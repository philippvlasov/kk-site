<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author"
          content="Контент Квартира. Ваш удаленный контент-отдел. Решим задачу качественного присутствия Вашего бизнеса в сети. Контент-маркетинг. Копирайтинг. SMM. Реклама. Дизайн. Технические задачи любой сложности.">

    <title>@yield('title')</title>
    <link rel="stylesheet" href="{{asset('css/libs.css')}}">
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
</head>

<body>
<div class="bg" id="@yield('page')"></div>
@include('includes.menu')
@yield('menu')
<div class="conteiner-fluid">
    <div class="main-content @yield('page')" id="fullpage">
@yield('main')
@yield('about')
@yield('services')
@yield('reviews')
@yield('portfolio')
@yield('contact')
@yield('thanks')
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="contentModal" tabindex="-1" role="dialog" aria-labelledby="contentModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

            </div>
        </div>
    </div>
</div>

<script src="{{asset('js/libs.js')}}"></script>
@stack('fullpagejs')
<script src="{{asset('js/slick.js')}}"></script>
<script src="{{asset('js/main.js')}}"></script>

</body>
</html>