@extends('layout.layout')
@section('title', 'Услуги')
@section('page', 'services_page')

@section('services')

    <div class="services section fp-auto-height-responsive">
        <h3>Наши услуги</h3>
        <ul class="nav nav-tabs" role="tablist">

            @foreach($categories as $category)

                <li class="nav-item">
                    <a class="nav-link @if ($loop->first) active @endif" href="#tab{{ $category->id }}" role="tab"
                       data-toggle="tab">
                        <i class="{{ $category->icon_class }}"></i>
                        {{ $category->name }}</a>
                </li>

            @endforeach

        </ul>

        <hr>

            <div class="tab-content">

                @foreach($categories as $category)

                <div role="tabpanel" class="tab-pane fade in @if ($loop->first) active show @endif"
                     id="tab{{ $category->id }}">
                    <h4>{{ $category->name }}</h4>
                    <p>{!! $category->description !!}</p>
                    <ul>

                        @foreach($category->services as $service)

                            <li>
                                <label>
                                    <input name="service[]" type="checkbox">
                                    <span class="checkmark"></span>
                                    <span class="item_name" id="{{ $service->id }}">{{ $service->content }}</span>
                                </label>
                            </li>

                        @endforeach

                    </ul>
                </div>

                @endforeach

                <div class="button-wrapper">
                    <a href="#" class="button button_inverse" id="cart">Узнать цену</a>
                </div>
                <ul class="test"></ul>
            </div>
    </div>

    <div class="contact section">
        <h3>Свяжитесь с нами</h3>
        <div class="form_block">
            <p class="contact_info">
                <i class="fas fa-mobile-alt"></i>
                Tel: +38 (094) 711 70 66</p>
            <p class="contact_info">
                <i class="fas fa-mobile-alt"></i>
                Tel: +38 (094) 711 70 66</p>
            <p class="contact_info">
                <i class="far fa-envelope"></i>
                content.kvartira@gmail.com</p>
        </div>
        <div class="form_block">
            <form action="">
                <input type="text" name="name" required placeholder="Ваше имя">
                <input type="email" name="email" required placeholder="Ваш email">
                <input type="tel" name="phone" required placeholder="Ваш телефон">
                <textarea placeholder="Ваше сообщение"></textarea>
                <button class="button">Отправить</button>
            </form>
        </div>
    </div>

@stop