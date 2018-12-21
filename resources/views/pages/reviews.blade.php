@extends('layout.layout')
@section('title', 'Отзывы')
@section('page', 'reviews_page')

@section('reviews')
    <div class="reviews section">
        <h2>Что говорят наши клиенты</h2>
        <div class="review-wrapper">
            <img class="client" src="{{asset('img/obuhovskiy-photo.jpg')}}" alt="obuhovskiy">
            <h4>Игорь Обуховский</h4>
            <p>экс-тренер проекта «Зваженi та щасливi», автор онлайн фитнес-игры
                «ЖирКиллер»</p>
            <p>Дорабатывали лендинг и подготовили всю воронку писем от продаж до запуска.</p>
            <img src="{{asset('img/Obuhovskiy.jpg')}}" alt="Obuhovskiy">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/granitsnet-photo.jpg')}}" alt="granitsnet">
            <h4>Границ.нет</h4>
            <p>обучающий проект для тех, кто хочет построить бизнес на любимом деле»</p>
            <p>Работали с проектом в качестве удаленного контент-отдела: взяли на себя все задачи от разработки стратегии до регулярного постинга в соцсетях и в блоге.</p>
            <img src="{{asset('img/Granyts1.png')}}" alt="Granyts1">
            <img src="{{asset('img/Granyts2.png')}}" alt="Granyts2">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/gavrilova-photo.jpg')}}" alt="gavrilova">
            <h4>Ирина Гаврилова</h4>
            <p>Бизнес-тренер уровня PCC ICF</p>
            <p>Работали с проектом в качестве удаленного контент-отдела: взяли на себя все задачи от разработки стратегии до регулярного постинга в соцсетях и в блоге.</p>
            <img src="{{asset('img/Gavrilova1.png')}}" alt="Gavrilova1">
            <img src="{{asset('img/Gavrilova2.jpg')}}" alt="Gavrilova2">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-f-photo.jpg')}}" alt="secret-f">
            <h4>Эксперт в нише эзотерики</h4>
            <p>Работали над запуском рекламной кампании для сбора участников на бесплатный интенсив</p>
            <img src="{{asset('img/izoterika.png')}}" alt="izoterika">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/kolesnikov-photo.jpg')}}" alt="kolesnikov">
            <h4>Давид Колесников</h4>
            <p>американский эксперт по продвижению в Facebook</p>
            <p>Работали с проектом в качестве удаленного контент-отдела: взяли на себя все задачи от разработки стратегии до регулярного постинга в соцсетях и в блоге.</p>
            <img src="{{asset('img/kolesnikov-review.png')}}" alt="kolesnikov">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/shliahov-photo.jpg')}}" alt="shliahov">
            <h4>Роман Шляхов</h4>
            <p>интернет-предприниматель, продюсер, миллионер</p>
            <p>Работали над написанием продающих текстов для Романа и его учеников.</p>
            <img src="{{asset('img/Shlyahov.png')}}" alt="Shlyahov">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-f-photo.jpg')}}" alt="secret-f">
            <h4>Производитель натуральных сладостей</h4>
            <p>интернет-предприниматель, продюсер, миллионер</p>
            <p>Разрабатывали название для нового продукта компании</p>
            <img src="{{asset('img/sladosti.jpg')}}" alt="sladosti">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/zastroyshik-photo.jpg')}}" alt="zastroyshik">
            <h4>Представитель крупного украинского застройщика</h4>
            <p>Работали над формированием узнаваемости и доверия к компании, т.к.она впервые зашла на рынок недвижимости Киева, через активное ведение бизнес-страницы на Facebook.</p>
            <img src="{{asset('img/potolok.png')}}" alt="potolok">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-f-photo.jpg')}}" alt="secret-f-photo">
            <h4>Проект Виктории Шуриной</h4>
            <p>духовный тренер счастливых людей</p>
            <p>Работали над написанием продающих текстов для Виктории, а также комплексно над ведением страниц в соцсетях.
                <br><br>
                Важно было вести страницы так, чтобы аудитория чувствовала в каждом посте личность Виктории.</p>
            <img src="{{asset('img/Shurina-review.png')}}" alt="Shurina">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-m-photo.jpg')}}" alt="secret-m-photo">
            <h4>Андрей</h4>
            <p>владелец web-студии</p>
            <p>Работали над написанием продающего текста для клиента студии Андрея.</p>
            <img src="{{asset('img/Andrei.jpg')}}" alt="Andrei">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-m-photo.jpg')}}" alt="secret-m-photo">
            <h4>Организатор элитных путешествий</h4>
            <p>Работали над написанием продающего текста для одного из туров.</p>
            <img src="{{asset('img/travel-review.jpg')}}" alt="travel">
        </div>

        <div class="review-wrapper">
            <img class="client" src="{{asset('img/secret-m-photo.jpg')}}" alt="secret-m-photo">
            <h4>Украинский застройщик экодомов</h4>
            <p>Работали над написанием продающего текста</p>
            <img src="{{asset('img/ekodom.png')}}" alt="ekodom">
        </div>
    </div>

    <div class="contact section">
        <h5>Хотите задать вопрос?<br>
            Заполните форму и мы ответим Вам в ближайшее время</h5>
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

    {{--<img class="quptes" src="{{asset('img/quotes.jpg')}}" alt="quotes">--}}

@stop