<?php

namespace App\Http\Controllers;

use App\Category;
use App\Service;
use Illuminate\Http\Request;

use DB;

class ServicesController extends Controller
{
    public function getServices()
    {

        $categories = Category::with('services')->get();

        return view('pages.services')->with('categories', $categories);
    }
}
