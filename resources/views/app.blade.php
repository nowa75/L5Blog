<!doctype html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="{!! asset('css/all.css') !!}">
</head>
<body>
@include('partial.nav')
<div class="container">
    @include('flash::message')
    @yield('content')
</div>

<footer class="footer">
    <div class="container">
        <p class="text-muted">Place sticky footer content here.</p>
    </div>
</footer>
<script src="{!! asset('js/all.js') !!}"></script>
<script>
    $('#flash-overlay-modal').modal();
    $('div.alert').not('.alert-important').delay(3000).slideUp(300);
</script>
@yield('footer')
</body>
</html>
