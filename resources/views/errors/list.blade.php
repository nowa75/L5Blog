@if($errors->any())
    <div class="panel panel-danger">
        <div class="panel-heading">
            <h3 class="panel-title">Oops! there is some errors!</h3>
        </div>
        <ul class="list-group">
            @foreach($errors->all() as $error)
                <li class="list-group-item list-group-item-danger">
                    {{$error}}
                </li>
            @endforeach
        </ul>
    </div>
@endif
