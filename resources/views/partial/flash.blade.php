@if(Session::has('flashMessage'))
    <div class="alert alert-success alert-important">{{ Session::get('flashMessage') }}</div>
@endif