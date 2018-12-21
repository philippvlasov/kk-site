<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    protected $primaryKey = 'id';
    public $incrementing = 'id';

    public $timestamps = FALSE;

    public function services()
    {
        return $this->hasMany('App\Service');
    }
}
