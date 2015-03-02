<?php namespace App;


use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Article
 *
 * @package App
 */
class Article extends Model {

    /**
     * anti mass assignment
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'body',
        'published_at'
    ];


    /**
     * published_at as carbon instance
     * @var array
     */
    protected $dates = [ 'published_at' ];


    /**
     * convention setNameAttribute
     * @param $date
     */
    public function setPublishedAtAttribute( $date )
    {
        $this->attributes[ 'published_at' ] = Carbon::parse( $date );

    }

    /**
     * OPUBLIKOWANE convention scopeName
     *
*@param Eloquent|Builder $query
     *
     * @return Builder $query
     */
    public function scopePublished( Builder $query )
    {
        $query->where( 'published_at', '<=', Carbon::now() );
    }


    /**
     * NIE OPUBLIKOWANE
     *
     * @param Builder $query
     */
    public function scopeUnpublished( Builder $query )
    {
        $query->where( 'published_at', '>', Carbon::now() );
    }

    /**
     * An Article is owned by User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        $this->belongsTo( 'App\User' );
    }

}
