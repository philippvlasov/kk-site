@extends('layout.layout')
@section('title', 'Упс')
@include('includes.sub-menu')
@include('includes.footer')
@section('thanks')
    <div id="oops" class="section-wrapper clearfix section" data-custom-background-img="{{asset('img/bg9.jpg')}}"
         data-centered="false">
        <div class="content-wrapper clearfix">
            <div class="col-sm-12 col-md-12 pull-right">
                <h1>Что-то пошло не так...</h1>
                <h2>Попробуйте еще раз через пару минут или напишите нам на почту content.kvartira@gmail.com</h2>
            </div>
        </div>
    </div>
@stop