@extends('app')

@section('content')

    <h1>Write a new Article</h1>

    <hr/>

    @include('errors.list')
    {!! Form::model($article = new \App\Article, ['url' => 'articles']) !!}
    @include('articles.partial.form', ['submitButtonText' => 'Add Article'])
    {!! Form::close() !!}


@stop