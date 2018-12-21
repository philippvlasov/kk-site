@extends('layout.layout')
@include('includes.sub-menu')
@include('includes.footer')
@section('title', 'Вакансии')
<!-- Menu -->
@yield('sub-menu')
<!-- end: Menu -->
@section('vacancies')
    <article id="vacancies" class="section-wrapper clearfix" data-custom-background-img="{{asset('img/bg5.jpg')}}">
        <div class="content-wrapper clearfix">
            <div class="col-sm-10 col-md-9 pull-right">

                <h1 class="section-title">Ищем в команду</h1>
                <h3>Как стать частью Контент Квартиры</h3>
            </div><!-- .col-sm-11 -->
        </div><!-- .content-wrapper -->
    </article><!-- .section-wrapper -->

    <article id="vacancies" class="section-wrapper clearfix" data-custom-background-img="{{asset('img/bg5.jpg')}}">
        <div class="content-wrapper clearfix">
            <div class="col-sm-10 col-md-9 pull-right">

                <h3>Что для нас работа</h3>
                <p>Ценные ценности. Великая миссия. Мир-дружба-пирожок... Не то.<br><br>

                    Мы просто любим контент-маркетинг и дарим эту любовь нашим клиентам. Чтобы развивать их бренды, приводить им клиентов и увеличивать прибыль.<br><br>

                    Поэтому для нас работа - это достижение результата.
                </p>
                <p class="text-center">Если и для тебя тоже...</p>
            </div><!-- .col-sm-11 -->
        </div><!-- .content-wrapper -->
    </article><!-- .section-wrapper -->

    <article id="vacancies" class="section-wrapper clearfix" data-custom-background-img="{{asset('img/bg5.jpg')}}">
        <div class="content-wrapper clearfix">
            <div class="col-sm-10 col-md-9 pull-right">
                <h3>Тебе у нас понравится</h3>
                <p class="feature-paragraph">
                <ul class="list">
                    <li>Ты сможешь работать с интересными и разноплановыми проектами. В том числе и с лидерами в своих нишах</li>
                    <li>Получишь опыт практической реализации контент-маркетинг стратегий</li>
                    <li>Прокачаешься в контент-маркетинге. Быстро, жестко, с гарантией</li>
                    <li>Ты будешь вовремя получать оплату своей работы. Всегда
                    </li>
                    <li>Мы разные, но очень дружелюбные:) Да, так говорят все, но мы действительно такие:) Ты поймешь это уже после первого дня в общем чате</li>
                </ul>
                </p>
            </div><!-- .col-sm-11 -->
        </div><!-- .content-wrapper -->
    </article><!-- .section-wrapper -->

    <article id="vacancies" class="section-wrapper clearfix" data-custom-background-img="{{asset('img/bg5.jpg')}}">
        <div class="content-wrapper clearfix">
            <div class="col-sm-10 col-md-9 pull-right">
                <h3>Что мы ищем</h3>
                <!-- grid -->
                <section class="grid row clearfix clearfix-for-2cols">

                    <!-- grid item -->
                    <div class="grid-item col-md-6">
                        <div class="item-content clearfix">
                            <img data-img-src="{{asset('img/duh.jpg')}}" class="lazy item-thumbnail"
                                 alt="duh">
                            <div class="text-content">
                                <h6 class="text-center">Ответственность</h6>
                                <h5 class="text-center">Командный дух</h5>
                            </div>
                        </div><!-- end: .item-content -->
                    </div><!-- end: .grid-item -->

                    <!-- grid item -->
                    <div class="grid-item col-md-6">
                        <div class="item-content clearfix">
                            <img data-img-src="{{asset('img/delo.jpg')}}" class="lazy item-thumbnail"
                                 alt="delo">
                            <div class="text-content">
                                <h6 class="text-center">Инициативность</h6>
                                <h5 class="text-center">Желание делать на 101%</h5>
                            </div>
                        </div><!-- end: .item-content -->
                    </div><!-- end: .grid-item -->

                    <!-- grid item -->
                    <div class="grid-item col-md-6">
                        <div class="item-content clearfix">
                            <img data-img-src="{{asset('img/lubov.jpg')}}" class="lazy item-thumbnail"
                                 alt="lubov">
                            <div class="text-content">
                                <h6 class="text-center">Стремление развиваться</h6>
                                <h5 class="text-center">Любовь к своему делу</h5>
                            </div>
                        </div><!-- end: .item-content -->
                    </div><!-- end: .grid-item -->
                </section><!-- end: grid -->
                <h3>Отправьте Ваше резюме</h3>
                <form class="form-style clearfix form-val" action="{{route('vacancies')}}" method="POST"
                      enctype="multipart/form-data" role="form" name="form_name"> <!-- убрал класс validate-form-->
                {{ csrf_field() }}
                <!-- form left col -->
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="text-field form-control required"
                                   data-validation-type="string" id="form-name" placeholder="Ваше имя" name="name"
                                   value="{{old('name')}}">
                        </div>
                        <div class="form-group">
                            <input type="email" class="text-field form-control"
                                   data-validation-type="email" id="form-email" placeholder="Ваш email"
                                   name="email" value="{{old('email')}}">
                        </div>
                        <div class="form-group">
                            <input type="tel" class="text-field form-control phone"
                                   data-validation-type="phone" id="form-contact-number"
                                   placeholder="Ваш телефон" name="contact_number" value="{{old('contact_number')}}"
                                   data-bv-live="disabled">
                        </div>
                    </div><!-- end: form left col -->

                    <!-- form right col -->
                    <div class="col-md-6">
                        <div class="form-group">
                                <textarea placeholder="Ваше сообщение" class="form-control validate-field"
                                          name="message">{{old('message')}}</textarea>
                        </div>
                        <div class="form-group">
                            <input type="file" class="form_file"
                                   name="file[]" value="{{old('file')}}">
                        </div>
                        <div class="form-group">
                            <img src="{{asset('img/loader-form.GIF')}}" class="form-loader">
                            <button id="sub-btn" type="submit" class="btn btn-sm btn-outline-inverse">Отправить</button>
                        </div>
                        <div class="form-group form-general-error-container"></div>
                    </div><!-- end: form right col -->
                </form>
            </div><!-- .col-sm-11 -->
        </div><!-- .content-wrapper -->
    </article><!-- .section-wrapper -->
@stop