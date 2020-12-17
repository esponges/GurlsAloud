<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Gurls.Aloud</title>
    <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="{{ asset('https://use.fontawesome.com/releases/v5.15.1/js/all.js') }}" crossorigin="anonymous">
    </script>
    <!-- Google fonts-->
    <link href="{{ asset('https://fonts.googleapis.com/css?family=Montserrat:400,700') }}" rel="stylesheet"
        type="text/css" />
    <link href="{{ asset('https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic') }}"
        rel="stylesheet" type="text/css" />
    <link href="{{ asset('https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700') }}" rel="stylesheet"
        type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet" />
    <script>
        var csrf_token = '<?php echo csrf_token(); ?>';
    </script>
</head>

<body>
    @yield('content')
</body>

<!-- Bootstrap core JS-->
<script src="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js') }}"></script>
<script src="{{ asset('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js') }}"></script>
<!-- Third party plugin JS-->
<script src="{{ asset('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js') }}"></script>
<!-- Contact form JS-->
<script src="{{ asset('assets/mail/jqBootstrapValidation.js') }}"></script>
<script src="{{ asset('assets/mail/contact_me.js') }}"></script>
<!-- Core theme JS-->
<script src="{{ asset('js/scripts.js') }}"></script>
{{-- React --}}
<script src="{{ asset('js/app.js') }}" defer></script>
