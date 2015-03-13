<?php namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests;
use App\Http\Requests\ArticleRequest;
use App\Tag;
use Auth;


/**
 * Class ArticlesController
 *
 * @package App\Http\Controllers
 */
class ArticlesController extends Controller {

    /**
     * Create a new ArticleController instance.
     * user must be authenticated for all method, except Index view
     */
    public function __construct()
    {
        //checks user is authenticated if not redirect to login page
        $this->middleware( 'auth', [ 'except' => 'index' ] );
    }

    /**
     * wyświetla wszystkie opublikowane artykuły
     * @return \Illuminate\View\View
     */
    public function index()
    {
        /** @noinspection PhpUndefinedMethodInspection */
        $articles = Article::published()->latest( 'published_at' )->get();

        return view( 'articles.index', compact( 'articles' ) );
    }

    /**
     * wyświetla jeden artykuł
     *
     * @param Article $article
     *
     * @return \Illuminate\View\View
     */
    public function show( Article $article )
    {
        return view( 'articles.show', compact( 'article' ) );
    }

    /**
     * wyświetla stronę do tworzenia Artykułu
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $tags = Tag::lists( 'name', 'id' );

        return view( 'articles.create', compact( 'tags' ) );
    }

    /**
     * zapisuje utworzony artykuł
     *
     * validation from App\Http\Requests\ArticleRequest
     *
     * @param ArticleRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store( ArticleRequest $request )
    {

        $this->createArticle( $request );

        //        Session::flash('flashMessage','Your article has been created');
        flash()->overlay( 'Your article has been created', 'Good Job!' );

        return Redirect( 'articles' );
    }

    /**
     * Save a new Article.
     *
     * @param ArticleRequest $request
     *
     * @return Article
     */
    private function createArticle( ArticleRequest $request )
    {
        $article = Auth::user()->articles()->create( $request->all() );

        $this->syncTags( $article, $request->input( 'tag_list' ) );

        return $article;
    }

    /**
     * Sync up the lists of tags in the database.
     *
     * @param Article $article
     * @param Array   $tags
     */
    private function syncTags( Article $article, array $tags)
    {
        $article->tags()->sync( $tags );
    }

    /**
     * Edit article view
     *
     * @param Article $article
     * @return $this
     */
    public function edit( Article $article )
    {

        $tags = Tag::lists( 'name', 'id' );

        return view( 'articles.edit' )->with( [ 'article' => $article, 'tags' => $tags ] );
    }

    /**
     * Save updated article and associated tags
     * @param Article        $article
     * @param ArticleRequest $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update( Article $article, ArticleRequest $request )
    {
        $article->update( $request->all() );
        $this->syncTags( $article, $request->input( 'tag_list' ) );

        flash( 'Article <strong>"' . $article->title . '"</strong> successfully updated' );
        return redirect( 'articles' )->with( [ 'flashMessage' => 'updated' ] );
    }
}
