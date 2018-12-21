<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class MyContactController extends Controller
{
    public function index()
    {
        if(Gate::allows('is_admin'))
        {
            dd('authorized');
        }


//        $projects = Project::all();
//        dd( $projects);
        return view('mycontacts');
    }
    public function test()
    {
        if(Gate::allows('is_admin'))
        {
            return view('test');
        }
        return view('test');
    }
}
