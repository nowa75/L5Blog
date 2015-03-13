@extends('app')
@section('content')

    <h1>About Me: {{ $first }} {{ $last }}</h1>
    @if(count($people))
        <h3>People i like:</h3>
        <ul>
            @foreach($people as $person)
                <li>{{ $person }}</li>
            @endforeach
        </ul>
    @endif
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sed?</p>
    <img src="http://placephant.com/301"/>
@stop