<?php namespace App\Http\Controllers;

use App\Http\Requests;

class PagesController extends Controller {

    public function contact()
    {
        return View( 'pages.contact' );
    }

    public function about()
    {
        $first  = 'Michał';
        $last   = 'Nowacki';
        $people = [
            'Taylor', 'Munch', 'Greg'
        ];

        return View( 'pages.about', compact( 'first', 'last', 'people' ) );
    }

}
