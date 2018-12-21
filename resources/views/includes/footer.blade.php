@section('footer')
    <!-- Footer -->
    <section id="footer">

        <!-- Go to Top -->
        <div id="go-to-top" onclick="scroll_to_top();"><span class="icon glyphicon glyphicon-chevron-up"></span></div>

        <ul class="social-icons">
            <li><a href="https://www.facebook.com/content.kvartira/" target="_blank" title="Facebook"><img src="{{asset('img/facebook.png')}}" alt="Facebook"></a></li>
            <li><a href="https://vk.com/content_kvartira" target="_blank" title="Vk"><img src="{{asset('img/vk.png')}}" alt="Vk"></a></li>
        </ul>

        <!-- copyright text -->
        <div class="footer-text-line">© {{date('Y')}}<br> ФЛП Аксёнова Алина Юрьевна</div>
    </section>
    <!-- end: Footer -->
    @endsection