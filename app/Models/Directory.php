<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Directory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
        'unique_id',
        'parent_id',
    ];

    public static function boot(){
        parent::boot();


        static::creating(function($m){
            $m->unique_id = Str::uuid();
        });
    }
}
