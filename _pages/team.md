---
title: "People"
layout: base
permalink: /people
classes: wide
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
<script src="https://unpkg.com/magic-grid/dist/magic-grid.min.js"></script>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

<!-- # People -->

We are looking for new Postdocs, PhD students and Master/Bachelor students to join HASLab and work on storage research topics.<br>
If you are interested in working with us, please send me an [email](mailto:jtpaulo@inesctec.pt).

<!-- HASLab members involved in distributed storage research: -->
<div class="row">
        <div class="col-sm-12 rel pb80 tit">
          <h3 style="text-align: center;"><span>Meet the team</span></h3>
        </div>
      </div>

<div class="people" id="people_section">
  {% for member in site.data.team_members %}
  <div class="container-fluid rel icons team pt50 pb0">
          <div class="col-sm-12 text-center contIt rel shSec it5">
            <div class="item pb50">
              <div class="lineBox pb10">
                <div class="img bgi lazyload" data-src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}" style="background-image: url(&quot;{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}&quot;);"></div>
                <div class="cont sh" style="height: 118px;">
                  <div class="int">
                    <h5>{{ member.name }}</h5>
                    <p>{{ member.info }}</p>
                    <div class="social-links">
                      <a href="mailto:{{ member.email }}"><i class="fas fa-envelope"></i></a>
                      {% if member.git %} <a href="{{ member.git }}"><i class="fab fa-github"></i></a>{% endif %}
                      {% if member.ldin %} <a href="{{ member.ldin }}"><i class="fab fa-linkedin"></i></a>{% endif %}
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>



<!--
## Previous Members
<table align="center" style="width:100%">
<tr><th>Visitors</th>
    <th>Master Students</th>
    <th>Bachelor Students</th>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Pedro Reis, 2012/2013</td>
  </tr>
</table>

-->





<script>

    const magicProjectsGrid = new MagicGrid({
      container: "#people_section",
      animate: false,
      gutter: 50, // default gutter size
      static: true,
      useMin: false,
      maxColumns: 5,
      useTransform: true
    });

    $("document").ready(() => {
      magicProjectsGrid.listen();
    });



</script>