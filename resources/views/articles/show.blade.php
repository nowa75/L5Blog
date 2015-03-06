@extends('app')

@section('content')
    <h1>{{$article->title}}</h1>
    <article>{{$article->body}}</article>
    <hr/>

    @unless($article->tags->isEmpty())
        <h5>Tags:</h5>
        <div class="btn-group" role="group" aria-label="Tags:">
            @foreach($article->tags as $tag)
                <a type="button" class="btn btn-default" href="{{url('tags',[$tag->id])}}">{{$tag->name}}</a>
            @endforeach
        </div>
        <hr/>
    @endunless
    <a href="{{url('articles')}}">Back</a>
@stop

