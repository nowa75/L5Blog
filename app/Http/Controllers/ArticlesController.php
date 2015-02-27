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

    /**
     * wyświetla wszystkie opublikowane artykuły
     * @method Article published
     *
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
     * @param mixed $id
     *
     * @return \Illuminate\View\View
     */
    public function show( $id )
    {
        $article = Article::findOrFail( $id );


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
        Article::create( $request->all() );

        return Redirect( 'articles' );
    }

    public function edit( $id )
    {
        $article = Article::findOrFail( $id );

        return view( 'articles.edit' )->with( 'article', $article );
    }

    public function update( $id, ArticleRequest $request )
    {
        $article = Article::findOrFail( $id );
        $article->update( $request->all() );

        return redirect( 'articles' );
    }
}
