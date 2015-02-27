@extends('app')

@section('content')

    <h1>Edit Article: <strong>"{{$article->title}}"</strong></h1>

    <hr/>

    {!! Form::model($article,['method'=>'PATCH','action' => ['ArticlesController@update', $article->id]]) !!}
    @include('articles.partial.form', ['submitButtonText' =>'Update Article'])
    {!! Form::close() !!}

    @include('errors.list')

@stop