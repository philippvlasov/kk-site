@extends('layout.layout')
@section('title', 'Спасибо')
@include('includes.sub-menu')
@include('includes.footer')
@section('thanks')
    <div id="thanks" class="section-wrapper clearfix section" data-custom-background-img="{{asset('img/bg9.jpg')}}"
         data-centered="false">
        <div class="content-wrapper clearfix">
            <div class="col-sm-12 col-md-12 pull-right">
    <h1>Спасибо, {{session()->get('userName', '')}}! Ваша заявка принята в работу</h1>
            </div>
        </div>
    </div>
    @stop