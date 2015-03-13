<?php namespace App;

use Eloquent;

class Item extends Eloquent
{

    protected $fillable = [ 'title', 'description', 'image' ];


}
