---
title: "Tools"
layout: default
permalink: /tools
classes: wide
# excerpt: "Distributed Storage Research @ HASLab"
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  actions:
    - label: "DSR GitHub"
      url: "https://github.com/dsrhaslab/"
---

<script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
<script src="https://unpkg.com/magic-grid/dist/magic-grid.min.js"></script>

<script src="jquery.github.min.js"></script>

{% assign tools_highlighted = site.data.tools | where_exp: "item", "item.highlight == true" %}

{% assign other_tools = site.data.tools | where_exp: "item", "item.highlight == false" %}

<div class="tools" id="tools_section">
  {% for tool in tools_highlighted %}
  <a href="{{ tool.repo }}" target="_blank">
      <section>
          <div class="section_title">{{ tool.name }}</div>
          <div class="about_section">
              <span style="display:block">{{ tool.description }}</span>
          </div>
      </section>
  </a>
  {% endfor %}

  {% for tool in other_tools %}
  <a href="{{ tool.repo }}" target="_blank">
      <section>
          <div class="section_title">{{ tool.name }}</div>
          <div class="about_section">
              <span style="display:block">{{ tool.description }}</span>
          </div>
      </section>
  </a>
  {% endfor %}
</div>

<script>

    const magicProjectsGrid = new MagicGrid({
      container: "#tools_section",
      animate: false,
      gutter: 10, // default gutter size
      static: true,
      useMin: false,
      maxColumns: 4,
      useTransform: true
    });

    $('#tools_section').children().each(function(i, obj) {
      var href = $(this).attr('href');
      href = href.replace("https://github.com/", "https://api.github.com/repos/");
      var stargazers_count = 03;
      var forks_count = 03;
      jQuery.getJSON(href, function(res) {
        stargazers_count = res.stargazers_count;
        forks_count = res.forks_count;
        console.log(stargazers_count);
        console.log(forks_count);
        console.log($(this));
        if (stargazers_count>-1) {
          $(obj).find("section").append($('<div class="bottom_section"><span><i class="fas fa-star"></i>&nbsp;'+stargazers_count+'</span><span><i class="fas fa-code-branch"></i>&nbsp;'+forks_count+'</span></div>'));
        };
      });

    });

    $("document").ready(() => {
      magicProjectsGrid.listen();
    });



</script>