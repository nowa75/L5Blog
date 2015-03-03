<?php namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests;
use App\Http\Requests\ArticleRequest;


/**
 * Class ArticlesController
 *
 * @package App\Http\Controllers
 */
class ArticlesController extends Controller {

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
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view( 'articles.create' );
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
        $article = new Article( $request->all() );
        \Auth::user()->articles()->save( $article );

        return Redirect( 'articles' );
    }

    public function edit( Article $article )
    {

        return view( 'articles.edit' )->with( 'article', $article );
    }

    public function update( Article $article, ArticleRequest $request )
    {
        $article->update( $request->all() );

        return redirect( 'articles' );
    }
}
