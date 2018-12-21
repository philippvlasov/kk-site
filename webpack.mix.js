let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/sass/main.sass', 'public/css')
    .options({
        postCss: [
            require('autoprefixer')()
        ]
    });
mix.styles([
        'resources/assets/css/bootstrap.css',
        'resources/assets/css/normalize.css',
        'resources/assets/css/fullpage.css',
        'resources/assets/css/slick.css',
        'resources/assets/css/slick-theme.css',
        'resources/assets/css/fa.css',
    ],
        'public/css/libs.css'
    );
mix.scripts([
    'resources/assets/js/jquery.js',
    'resources/assets/js/tether.js',
    'resources/assets/js/bootstrap.js',
],
    'public/js/libs.js'
);
mix.scripts([
    'resources/assets/js/jquery.fullpage.js',
    'resources/assets/js/main_page_script.js'
],
    'public/js/fullpage.js');
mix.babel('resources/assets/js/main.js', 'public/js/main.js');


mix.copy('node_modules/slick-carousel/slick/slick.js', 'public/js');