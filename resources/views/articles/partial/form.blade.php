<!-- Title Form Input -->
<div class="form-group">
    {!! Form::label('title', 'Title:') !!}
    {!! Form::text('title', null, ['class' => 'form-control'] ) !!}
</div>

<!-- Body Form Input -->
<div class="form-group">
    {!! Form::label('body', 'Body:') !!}
    {!! Form::textarea('body', null, ['class' => 'form-control'] ) !!}
</div>
<!-- Published_at Form Input -->
<div class="form-group">
    {!! Form::label('published_at', 'Published On:') !!}
    {!! Form::input('date', 'published_at', $article->published_at->format('Y-m-d'), ['class' => 'form-control'] ) !!}
</div>
<!-- Tags Form Input -->
<div class="form-group">
    {!! Form::label('tag_list', 'Tags:') !!}
    {!! Form::select('tag_list[]', $tags, null, ['class' => 'form-control', 'id' => 'tags', 'multiple'] ) !!}
</div>
<!-- Save article Form Input -->
<div class="form-group">
    {!! Form::submit($submitButtonText, ['class'=>'btn btn-primary form-control']) !!}
</div>

@section('footer')
    <script>
        {{--prity select box--}}
        $('#tags').select2({
            placeholder: "Select a tag's",
            tags: true
        });
    </script>
@stop