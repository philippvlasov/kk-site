<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Test page</h1>

@if(Auth::user())
<p>Привет {{ Auth::user()->name }}, твой логин {{ Auth::user()->login }}</p>
@endif
@cannot('is_admin')
   <p>User is not admin(((</p>
@endcan
</body>
</html>