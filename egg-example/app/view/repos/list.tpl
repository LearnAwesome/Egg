<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div class="news-view view">
      {% for repo in list %}
        <div class="item">
          <a href="/">{{ repo.name }}</a>
        </div>
      {% endfor %}
    </div>
  </body>
</html>