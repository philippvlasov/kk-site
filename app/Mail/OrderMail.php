<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $name;
    protected $email;
    protected $phone;
    protected $msg;
    protected $services;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $email, $phone, $msg, $services)
    {

        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->msg = $msg;
        $this->services = $services;
//        dd($this->msg);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.orderToEmail')
                    ->with(
                        [
                            'name' => $this->name,
                            'email' => $this->email,
                            'phone' => $this->phone,
                            'msg' => $this->msg,
                            'services' =>  $this->services
                        ]
                    )
                    ->subject('Заявка с сайта Контент Квартира');
    }
}
