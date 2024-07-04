---
title: "Tools"
layout: base
permalink: /tools
classes: wide
excerpt: <a href="https://github.com/dsrhaslab/" class="btn btn--light-outline btn--small" style="margin:0; padding:0.1em">DSR Github</a>
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

<script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>

{% assign tools_highlighted = site.data.tools | where_exp: "item", "item.highlight == true" %}

{% assign other_tools = site.data.tools | where_exp: "item", "item.highlight == false" %}

{% assign sorted_tools = tools_highlighted | concat: other_tools %}

<div id="dsr_tools">

{% assign number_printed = 0 %}
{% for tool in sorted_tools %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
<div class="card-group">
{% endif %}
  <div class="card">
    <a href="{{ tool.repo }}">
      <div class="card-block">
        <h4 class="card-title">{{ tool.name }}</h4>
        <p class="card-tool-text">{{ tool.description }}</p>
      </div>
    </a>
  </div>
{% assign number_printed = number_printed | plus: 1 %}
{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 0 %}
</div>
{% endif %}
{% endfor %}


{% if even_odd != 0 %}

{% assign remaining = 4 | minus: even_odd %}

{% for i in (1..remaining) %}
  <div class="card noHover notransition" style="border:0">
  </div>
{% endfor %}

{% endif %}


<script>
  $('#dsr_tools').children().each(function(gi, gobj) {
    $(this).children().each(function(i, obj) {
      var href = $(this).find("a").attr("href");
      if (href == undefined) {
        return;
      }
      href = href.replace("https://github.com/", "https://api.github.com/repos/");
      var stargazers_count = 03;
      var forks_count = 03;
      jQuery.getJSON(href, function(res) {
        stargazers_count = res.stargazers_count;
        if (stargazers_count>-1) {
          $(obj).append($('<div class="card_bottom_section"><span><i class="fas fa-star"></i>&nbsp;'+stargazers_count+'</span><span><i class="fas fa-code-branch"></i>&nbsp;'+forks_count+'</span></div>'));
        };
      });
    });
  });
</script>
