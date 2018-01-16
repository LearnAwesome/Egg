<html>
  <head>
    <title>Github Repos</title>
    <link rel="icon" href="/public/avatar.jpg" type="image/x-icon">
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="news-view view">
      {% for repo in list %}
        <div class="item">
          <a href="{{ repo.html_url }}">{{ repo.name }}</a>
          <strong>{{ helper.formatTime(repo.created_at) }}</strong>
        </div>
      {% endfor %}
    </div>
  </body> 
</html>