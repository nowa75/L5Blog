<?php namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ViewComposerServiceProvider extends ServiceProvider {

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->composeNavigation();
    }

    /**
     * Compose the Navigation Bar
     */
    private function composeNavigation()
    {
        view()->composer( 'partial.nav', 'App\Http\Composers\NavigationComposer' );
        //        view()->composer( 'partial.nav', function ( $view )
        //        {
        //            $view->with( 'latest', Article::latest()->first() );
        //        } );
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

}
