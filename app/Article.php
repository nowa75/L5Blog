<?php namespace App;

use Eloquent;

class Article extends Eloquent {

    protected $fillable = [
        'title',
        'body',
        'published_at'
    ];

}
