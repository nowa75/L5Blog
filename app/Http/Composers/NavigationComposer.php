<?php
/**
 * Created by Michał Nowacki
 * Date: 06.03.15
 * Time: 15:37
 * Filename: NavigationComposer.php
 */
namespace App\Http\Composers;

use App\Article;
use Illuminate\Contracts\View\View;

/**
 * Compose the Navigation Bar
 *
 * Class NavigationComposer
 *
 * @package App\Http\Composers
 */
class NavigationComposer {

    function compose( View $view )
    {
        $view->with( 'latest', Article::latest()->first() );
    }
}