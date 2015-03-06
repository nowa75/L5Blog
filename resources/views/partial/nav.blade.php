<nav class="navbar  navbar-fixed-top navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">L5Blog</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li class="active">{!!link_to('articles', 'Articles')!!}</li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li>{!! link_to_action('ArticlesController@show', $latest->title, [ $latest->id ]) !!}</li>
                <li><a href="/tags">Tags</a></li>
                <li>
                    <button type="button" class="btn btn-default navbar-btn">Logout</button>
                </li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
</nav>
