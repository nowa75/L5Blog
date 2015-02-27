<?php namespace App;


use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class Article
 *
 * @package App
 */
class Article extends Eloquent {

    // mass asigment
    protected $fillable = [
        'title',
        'body',
        'published_at'
    ];

    // as carbon instance
    protected $dates = [ 'published_at' ];

    // convention setNameAttribute
    public function setPublishedAtAttribute( $date )
    {
        $this->attributes[ 'published_at' ] = Carbon::parse( $date );

    }

    // OPUBLIKOWANE convention scopeName
    /**
     * @param Eloquent|Builder $query
     *
     * @return Builder $query
     */
    public function scopePublished( Builder $query )
    {
        $query->where( 'published_at', '<=', Carbon::now() );
    }

    // NIE OPUBLIKOWANE
    public function scopeUnpublished( Eloquent $query )
    {
        $query->where( 'published_at', '>', Carbon::now() );
    }

}
