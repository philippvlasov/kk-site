@extends('layout.layout')
@section('title', 'Контакты')
@include('includes.sub-menu')
@include('includes.footer')
@section('contact')
    <div id="contact" class="section-wrapper clearfix section reviews fp-auto-height-responsive" data-custom-background-img="{{asset('img/bg4.jpg')}}"
         data-centered="false">
        <div class="content-wrapper clearfix">

            <h2 class="section-title">Хотите заказать услугу,<br> узнать подробнее или задать вопросы?</h2>

            <!-- CONTACT DETAILS -->
            <div class="contact-details col-sm-5 col-md-5">
                {{--<p>123A,<br/>Molestie Lorem Avenue,<br/>Aliquam<br/>AAA0010</p>--}}
                <p>Tel: +7 (499) 677 24 11 <i class="fas fa-mobile-alt"></i></p>
                <p>Tel: +38 (094) 711 70 66 <i class="fas fa-mobile-alt"></i></p>
                <p><a href="mailto:content.kvartira@gmail.com">content.kvartira@gmail.com</a><i class="far fa-envelope"></i></p>
                <p>Мы в соцсетях
                    <a href="https://www.facebook.com/content.kvartira/" target="_blank" title="Facebook"><img src="{{asset('img/facebook.png')}}" alt="Facebook"></a>
                    <a href="https://vk.com/content_kvartira" target="_blank" title="Vk"><img src="{{asset('img/vk.png')}}" alt="Vk"></a>
                </p>
            </div>
            <!-- END: CONTACT DETAILS -->

            <!-- CONTACT FORM -->
            <div class="col-sm-7 col-md-7 pull-right">
                <!-- IMPORTANT: change the email address at the top of the assets/php/mail.php file to the email address that you want this form to send to -->

                <form class="form-style clearfix form-val" action="{{route('main')}}" method="POST"
                      role="form" name="form_name"> <!-- убрал класс validate-form-->
                {{ csrf_field() }}
                <!-- form left col -->
                    <div class="col-md-10 pull-right">
                        <div class="form-group">
                            <input type="text" required class="text-field form-control required"
                                   data-validation-type="string" id="form-name" placeholder="Ваше имя" name="name"
                                   value="{{old('name')}}">
                        </div>
                        <div class="form-group">
                            <input type="email" required class="text-field form-control"
                                   data-validation-type="email" id="form-email" placeholder="Ваш email"
                                   name="email" value="{{old('email')}}">
                        </div>
                        <div class="form-group">
                            <input type="tel" required class="text-field form-control phone"
                                   data-validation-type="phone" id="form-contact-number"
                                   placeholder="Ваш телефон" name="contact_number" value="{{old('contact_number')}}"
                                   data-bv-live="disabled">
                        </div>
                    </div><!-- end: form left col -->

                    <!-- form right col -->
                    <div class="col-md-10 pull-right">
                        <div class="form-group">
                                <textarea placeholder="Ваше сообщение" class="form-control validate-field"
                                          name="message">{{old('message')}}</textarea>
                        </div>
                        <div class="form-group">
                            <img src="{{asset('img/loader-form.GIF')}}" class="form-loader">
                            <button id="sub-btn" type="submit" class="btn btn-sm btn-outline-inverse">Отправить</button>
                        </div>
                        <div class="form-group form-general-error-container"></div>
                    </div><!-- end: form right col -->

                </form>
            </div><!-- end: CONTACT FORM -->
        </div>
    </div><!-- .section-wrapper -->
@stop