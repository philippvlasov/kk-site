@extends('layout.layout')
@section('title', 'Главная')
@section('class', 'main_page')

@section('main')
    <div class="main section fp-auto-height-responsive" data-number="1" data-custom-background-img="../img/bg9.jpg">
        <h1><span class="yellow">[</span>Контент<span class="yellow">]</span> <span class="lastWord">Квартира</span>
        </h1>
        <p class="main_subtext">Решаем любую задачу присутствия <br>Вашего бизнеса в сети</p>
        <p class="main_subtext">Стратегия. Копирайтинг. SMM. Реклама. Дизайн. <br>Технические задачи любой
            сложности.</p>
        <div class="button-wrapper">
            <a href="/services" class="button button_inverse">Заказать услугу</a>
            <a href="#" class="button">Узнать больше</a>
        </div>
    </div>

    <div class="about section fp-auto-height-responsive" data-number="2" data-custom-background-img="../img/bg9.jpg">
        <h3>Контент Квартира - это:</h3>
        <ul>
            <li>Команда из 18 контент-маркетологов, таргетологов, дизайнеров и технических специалистов</li>
            <li>11520+ часов практического опыта продающего копирайтинга и контент-маркетинга</li>
            <li>Десятки успешно внедренных в бизнесы клиентов Контент Квартиры стратегий по работе с контентом</li>
            <li>Проекты для рынков Польши, Германии, Италии</li>
            <li>Работа с лучшими: GeniusMarketing, Игорь Обуховский, Бегущий Банкир Андрей Онистрат, Роман Шляхов,
                Ицхак Пинтосевич, Первая мужская конференция в Украине, Группа строительных компаний Delmar, Павел
                Авдонькин, Vinzer Home, Эдвард Дубинский и другими
            </li>
        </ul>
        <div class="button-wrapper">
            <a href="/about" class="button button_inverse">Познакомиться</a>
        </div>
    </div>

    <div class="services section fp-auto-height-responsive" data-number="3" data-custom-background-img="../img/bg2.jpg">
        <h3>Наши услуги</h3>
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" href="#content" role="tab" data-toggle="tab">
                    <i class="fab fa-accusoft"></i>
                    Контент</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#copyright" role="tab" data-toggle="tab">
                    <i class="fas fa-edit"></i>
                    Продающий копирайтинг</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#market" role="tab" data-toggle="tab">
                    <i class="fas fa-chart-bar"></i>
                    Маркетинг</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#advert" role="tab" data-toggle="tab">
                    <i class="fas fa-bullhorn"></i>
                    Реклама</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tech" role="tab" data-toggle="tab">
                    <i class="fas fa-laptop-code"></i>
                    Технические услуги</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#design" role="tab" data-toggle="tab">
                    <i class="far fa-object-group"></i>
                    Дизайн</a>
            </li>
        </ul>

        <hr>

        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active show" id="content">
                <h4>Контент</h4>
                <ul>
                    <li>Ведение блогов (личных и компаний)</li>
                    <li>Ведение страниц в соцсетях (личных и компаний)</li>
                    <li>Написание репутационных статей</li>
                    <li>Внедрение контент-маркетинга в Ваш бизнес “под ключ”</li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="copyright">
                <h4>Продающий копирайтинг</h4>
                <ul>
                    <li>Написание текстов на лендинги, посадочные страницы, страницы лид-магнитов</li>
                    <li>Написание коммерческих предложений</li>
                    <li>Написание писем в email-рассылки и чат-бот рассылки</li>
                    <li>Тексты для корпоративных сайтов и другие копирайтинг-задачи</li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="market">
                <h4>Маркетинг</h4>
                <ul>
                    <li>Разработка контент-стратегий</li>
                    <li>Разработка стратегий под запуск</li>
                    <li>Разработка маркетинг-стратегий</li>
                    <li>Разработка воронок писем</li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="advert">
                <h4>Реклама</h4>
                <ul>
                    <li>Сбор участников на онлайн и живые события</li>
                    <li>Сбор заявок на покупку продуктов</li>
                    <li>Продвижение сообществ в соцсетях</li>
                    <li>Комплексное продвижение в соцсетях</li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="tech">
                <h4>Технические услуги</h4>
                <ul>
                    <li>Создание сайтов и блогов</li>
                    <li>Создание лендингов, посадочных страниц “под ключ”</li>
                    <li>Создание чат-ботов</li>
                    <li>Реализация технических задач любой сложности</li>
                </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="design">
                <h4>Дизайн</h4>
                <ul>
                    <li>Дизайн продающих страниц</li>
                    <li>Дизайн корпоративных сайтов и блогов</li>
                    <li>Оформление коммерческих предложений</li>
                    <li>Решение других дизайн-задач для Вашего бизнеса</li>
                </ul>
            </div>
        </div>
        <div class="button-wrapper">
            <a href="/services" class="button button_inverse">Подробнее</a>
        </div>
    </div>

    <div class="reviews section fp-auto-height-responsive" data-number="4" data-custom-background-img="../img/bg6.jpg">
        <h3>Отзывы</h3>
        <div id="slider-for">
            <div class="text_slide">
                <h4>Игорь Обуховский</h4>
                <p>Экс-тренер проекта «Зваженi та щасливi», автор онлайн фитнес-игры «ЖирКиллер»</p>
            </div>
            <div class="text_slide">
                <h4>Границ.нет</h4>
                <p>Обучающий проект для тех, кто хочет построить бизнес на любимом деле</p>
            </div>
            <div class="text_slide">
                <h4>Роман Шляхов</h4>
                <p>Интернет-предприниматель,
                    продюсер, миллионер</p>
            </div>
        </div>
        <div id="slider-nav">
            <div class="img_slide">
                <img src="img/Obuhovskiy-wide.jpg" alt="Obuhovskiy">
            </div>
            <div class="img_slide">
                <img src="img/Granytz-wide.jpg" alt="Granytz">
            </div>
            <div class="img_slide">
                <img src="img/Shlyahov-wide.jpg" alt="Shlyahov">
            </div>
        </div>
        <div class="button-wrapper">
            <a href="/reviews" class="button button_inverse">Подробнее</a>
        </div>
    </div>

    <div class="portfolio section fp-auto-height-responsive" data-number="5"
         data-custom-background-img="../img/bg3.jpg">
        <h3>Наши кейсы</h3>
        <div class="case_row">
            <div class="case_item">
                <img src="img/mega-preview.jpg" alt="mega">
                <p class="caption">Текст на лендинг Мегатренинга Ицхака Пинтосевича</p>
                <div class="case_content">
                    <img data-src="img/megatraining.jpg" src="" alt="megatraining">
                </div>
            </div>
            <div class="case_item">
                <img src="img/kolesnikov-preview.jpg" alt="mega">
                <p class="caption">Блог эксперта по Facebook из США</p>
                <div class="case_content">
                    <h5>Личный блог эксперта по Фейсбук-продвижению из США Давида Колесникова</h5>
                    <h6>Краткое описание проекта</h6>
                    <p>Давид Колесников – эксперт по продвижению бизнеса в Facebook, интернет-маркетолог,
                        предприниматель из Америки, который только выходит на рынок СНГ и не является узнаваемой
                        для аудитории личностью.</p>
                    <h5>Цели</h5>
                    <p>Формирование образа эксперта в своей нише (продвижение бизнеса через Facebook);
                        Повышение уровня доверия у аудитории, которая привлекается на события.
                        Активность по имени в сети.</p>
                    <h5>Инструмент</h5>
                    <p>Блог.</p>
                    <h5>Вложения: точечное продвижение постов.</h5>
                    <p>При минимальных вложениях, за счет качества предоставляемой информации, уже на 3-м месяце ведения
                        блога (на первом запуске) клиент сделал продажи своего авторского онлайн-курса по продвижению в
                        Facebook при стоимости пакета участия от $200.</p>
                    <div class="img_item">
                        <a href="#">
                            <img src="img/kolesnikov-link1.jpg" alt="kolesnikov-link2">
                        </a>
                        <i class="fas fa-link"></i>
                    </div>
                    <div class="img_item">
                        <a href="#">
                            <img src="img/kolesnikov-link2.jpg" alt="kolesnikov-link2">
                        </a>
                        <i class="fas fa-link"></i>
                    </div>
                    <div class="img_item">
                        <a href="#">
                            <img src="img/kolesnikov-link3.jpg" alt="kolesnikov-link3">
                        </a>
                        <i class="fas fa-link"></i>
                    </div>
                    <div class="img_item">
                        <a href="#">
                            <img src="img/kolesnikov-link4.jpg" alt="kolesnikov-link4">
                        </a>
                        <i class="fas fa-link"></i>
                    </div>

                </div>
            </div>
            <div class="case_item">
                <img data-src="img/gayvan-preview.jpg" src="" alt="mega">
                <p class="caption">Текст на лендинг Мегатренинга Ицхака Пинтосевича</p>
                <div class="case_content">
                    <h5>Проект “Чай Гайван”</h5>
                    <h6>Описание проекта</h6>
                    <p>Клиент - ТМ, занимающаяся продажей элитных сортов чая в Германии и Англии.</p>
                    <h5>Цели</h5>
                    <p>Повысить узнаваемость бренда<br>
                        Собрать аудиторию ценителей чая в одном месте<br>
                        Активность по имени в сети.<br>
                        Сформировать образ места, где истинные ценители чая могут найти напиток
                        индивидуально под свои вкусы и требования
                        Сформировать образ владельца ТМ как эксперта в чае</p>
                    <h5>Инструмент: Instagram</h5>
                    <p>*аккаунт велся на английском языке.</p>
                    <h5>Первый этап работы</h5>
                    <p>Создание контент-плана и внедрение разнообразных рубрик постов вместо однообразных продающих
                        публикаций;<br>
                        Смена внешнего вида аккаунта.</p>
                    <h5>Так аккаунт выглядел до начала работы</h5>
                    <div class="img_item">
                        <img src="img/gayvan1.jpg" alt="gayvan1">
                    </div>
                    <h5>Так - через пару недель после старта</h5>
                    <div class="img_item">
                        <img data-src="img/gayvan2.jpg" src="" alt="gayvan2">
                    </div>
                    <h5>Мы меняли внешний вид аккаунта в зависимости от сезона</h5>
                    <div class="img_item">
                        <img src="img/gayvan3.jpg" alt="gayvan3">
                    </div>
                    <h5>Наилучшим образом аудитория реагировала именно на фото в таких теплых тонах</h5>
                    <div class="img_item">
                        <img src="img/gayvan4.jpg" alt="gayvan4">
                    </div>
                    <h5>Второй этап</h5>
                    <p>Продвижение. Мы использовали продвижение публикаций на разные группы потенциально
                        заинтересованной аудитории в Инстаграм.</p>
                    <p>Сложность задачи - продвижение осуществлялось на рынок Англии и Германии. Контент там
                        воспринимается иначе, нежели на русскоязычном рынке. К примеру, аудиторию сложно зацепить
                        всевозможными розыгрышами и бесплатностями.</p>
                    <p>Однако нам удалось выйти на стоимость уникального клика 0,23-0,63 евро (в 2,5 раза дешевле
                        изначальной цены), что для европейского рынка считается отличным показателем.</p>
                    <p>Исходя их общей затраченной на продвижение суммы и количества новых подписчиков в месяц,
                        стоимость подписчика выходила 1,2 евро, а через месяц была снижена до 1,1 евро (при среднем
                        показателе цены подписчика по Европе в 2,5-3,5 евро).</p>
                    <p>Кроме того, бонусом удалось увеличить количество переходов в магазин клиента на Амазоне из
                        Инстаграм, хотя такой цели рекламная кампания вообще не преследовала.</p>
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <a href="/portfolio" class="button button_inverse">Подробнее</a>
        </div>
    </div>

    <div class="contact section fp-auto-height-responsive" data-number="6" data-custom-background-img="../img/bg4.jpg">
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

@push('fullpagejs')
    <script src="{{asset('js/fullpage.js')}}"></script>
@endpush

