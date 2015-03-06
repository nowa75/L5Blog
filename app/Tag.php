<?php namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Tag
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Article[] $article
 */
class Tag extends Model {

    /**
     * Fillable fields for a tags
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * Get the articles associated with given tag
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function articles()
    {
        return $this->belongsToMany( 'App\Article' );
    }

}
