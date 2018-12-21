<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VacancyController extends Controller
{
    public function show()
    {
        return view('pages.vacancies');
    }
    public function store(Request $request){
//        dd($request->file());
//        $file = $request->file;
//        $fileName = $file->getClientOriginalName();
//        $file->move(storage_path('resume'), time().'_'.$fileName);
//        dd($file->getClientOriginalName());
        foreach ($request->file() as $file) {
           echo '1<br>';
            foreach ($file as $f) {
//                dd($file);
                echo '2<br>';
                $f->move(storage_path('resume'), time().'_'.$f->getClientOriginalName());
            }
        }
//        return "Успех";

//        $order = new Order();
//        $order->name = $request->name;
//        $order->email = $request->email;
//        $order->phone = $request->contact_number;
//        $order->message = $request->message;
//
//        $order->save();
//
//        $order->sendEmail($order);
//
//        $request->session()->put('userName', $request->name);
//        return redirect()->route('thanks');

    }
}
