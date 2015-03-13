@extends('app')

@section('content')
    <div class="row">
        <h1>Items</h1>
        <hr/>
    </div>
    @foreach(array_chunk($items->all(), 3) as $row)
        <div class="row">
            @foreach($row as $item)
                <article class="col-md-4">
                    <h2>
                        <a href="{{url('/items',[$item->id])}}">
                            {{$item->title}}
                        </a>
                    </h2>

                    <div>
                        <img src="{{$item->image}}"
                             class="img-responsive img-rounded img-thumbnail"
                             alt="{{$item->title}}"/>
                    </div>

                    <div class="body">
                    {{$item->description}}
                </div>
                </article>
            @endforeach
            <hr/>
        </div>
    @endforeach
    <div class="row">
        <div class="col-md-12 col-md-push-5">


            {!!$items->appends(Request::except('page'))->render()!!}
        </div>
    </div>

@stop

