<?php

namespace App;

use App\Mail\OrderMail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

//use Config;
//use Illuminate\Support\Facades\Config;

class Order extends Model
{

    public function sendEmail()
    {
        $services = unserialize($this->user_order);
        Mail::to('aksenov.andrew@gmail.com')->send(new OrderMail($this->name, $this->email, $this->phone, $this->message, $services));
    }

    public function sendTelegram()
    {
        $token = config('telegram.token');
        $chat_id_list = config('telegram.chat_id_list');

        if (!empty($this->message)) {
            $msg = $this->message;
        } else {
            $msg = 'Сообщение отсутствует';
        }

        if (!empty($this->user_order)) {
            $services = unserialize($this->user_order);
            $services = implode("\n-", $services);
//dd($services);
        } else {
            $services = 'Ничего не выбрано';
        }
        $messageToTelegram = "Новая заявка на сайте! \nE-mail: $this->email \nТелефон: $this->phone \n Имя: $this->name \nСообщение: $msg \nУслуги:\n-$services";

        for ($i = 0; $i < count($chat_id_list); $i++) {
            file_get_contents('https://api.telegram.org/bot'
                . $token
                . '/sendMessage?chat_id='
                . $chat_id_list[$i]
                . '&text='
                . urlencode($messageToTelegram));
        }
    }

    public static function catchErrors($error)
    {
        if (Storage::exists('ErrorsFromContactController.txt')) {
            Storage::append('ErrorsFromContactController.txt', $error);
        } else {
            Storage::put('ErrorsFromContactController.txt', $error);
        }

    }
}
