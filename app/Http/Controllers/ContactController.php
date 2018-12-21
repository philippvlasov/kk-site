<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;
use Illuminate\Http\Request;
use App\Order;
use Illuminate\Support\Facades\DB;
use App\Mail\OrderMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;


class ContactController extends Controller
{

    public function show()
    {
        return view('pages.main');
    }

    /**
     * Сохраняет заявку в БД, отправляет в телегам и на почту. При возникновении ошибок пишет в файл
     *
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $order = new Order();

        $order->name = $request->name;
        $order->email = $request->email;
        $order->phone = $request->contact_number;
        $order->message = $request->message;

        //проверям выбраны ли услуги
        if (!empty($request->services)) {
            $order->user_order = serialize($request->services);
        }

        //сохраняем в БД
        try {
            $order->save();
        }
        catch (\Exception $e) {
            $order->catchErrors($e->getMessage());
        }

        //Отправляем сообщение в телеграм
        try {
            $order->sendTelegram();
            $telegramError = false;
        }
        catch (\Exception $e) {
            $telegramError = $e->getMessage();
            $order->catchErrors($telegramError);
        }

        //отправляем письмо в очередь
        try {
            $order->sendEmail();
            $mailError = false;
        }
        catch (\Exception $e) {
            $mailError = $e->getMessage();
            $order->catchErrors($mailError);
        }

        if($telegramError && $mailError) {
            $route = 'ops';
        } else {
            $route = 'thanks';
            //записываем в сессию имя клиента
            $request->session()->put('userName', $request->name);
        }
        return redirect()->route($route);
    }
}

