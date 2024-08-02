---
title: "News"
layout: splash
permalink: /news/
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

{% for article in site.data.news %}

  <time datetime="{{ article.date }}" class="catalogue-time">{{ article.date | date: "%B %d, %Y" }}</time>
  <h3 class="catalogue-title">{{ article.title }}</h3>
  <div class="catalogue-line"></div>
  <div class="catalogue-headline">{{article.headline}}</div>
  <hr>
{% endfor %}