<?php namespace App;


use Carbon\Carbon;
use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Article
 *
 * @package App
 * @property integer        $id
 * @property integer        $user_id
 * @property string         $title
 * @property string         $body
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $published_at
 * @property string         $excerpt
 * @property-read \App\User $user
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereId( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereUserId( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereTitle( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereBody( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereCreatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereUpdatedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article wherePublishedAt( $value )
 * @method static \Illuminate\Database\Query\Builder|\App\Article whereExcerpt( $value )
 * @method static \App\Article published()
 * @method static \App\Article unpublished()
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
