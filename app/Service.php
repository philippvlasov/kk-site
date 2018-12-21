<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $primaryKey = 'id';
    public $incrementing = 'id';

    public $timestamps = FALSE;

}
