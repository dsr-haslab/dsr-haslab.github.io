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
          {% comment %} Counts are computed from team_members.yml at build time {% endcomment %}
          {% assign n_staff = 0 %}{% assign n_phd = 0 %}{% assign n_msc = 0 %}{% assign n_collab = 0 %}
          {% for m in site.data.team_members.team_members %}
            {% assign lvl = m.info | upcase %}
            {% if m.role == 'research' %}{% assign n_collab = n_collab | plus: 1 %}
            {% elsif lvl contains 'PHD' %}{% assign n_phd = n_phd | plus: 1 %}
            {% elsif lvl contains 'MSC' %}{% assign n_msc = n_msc | plus: 1 %}
            {% elsif lvl contains 'PROFESSOR' or lvl contains 'RESEARCHER' %}{% assign n_staff = n_staff | plus: 1 %}
            {% endif %}
          {% endfor %}
          <ul class="team-summary">
            <li><span class="team-summary__num">{{ n_staff }}</span> Faculty &amp; Researchers</li>
            <li><span class="team-summary__num">{{ n_phd }}</span> PhD Students</li>
            <li><span class="team-summary__num">{{ n_msc }}</span> MSc Students</li>
            <li><span class="team-summary__num">{{ n_collab }}</span> Research Collaborators</li>
          </ul>
        </div>
      </div>

<div class="people" id="people_section">
  {% for member in site.data.team_members.team_members %}
  <div class="container-fluid rel icons team pt50 pb0">
          <div class="col-sm-12 text-center contIt rel shSec it5">
            <div class="item pb50">
              <div class="lineBox pb10">
                {% assign member_url = member.personal_webpage | default: member.inesctec_webpage %}{% if member_url %}<a class="team-member-link" href="{{ member_url }}" title="{{ member.name }}'s webpage" aria-label="{{ member.name }}'s webpage">{% endif %}
                <div class="img bgi lazyload" data-src="{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}" style="background-image: url(&quot;{{ site.url }}{{ site.baseurl }}/assets/images/teampic/{{ member.photo }}&quot;);"></div>
                {% if member_url %}</a>{% endif %}
                <div class="cont sh" style="height: 150px;">
                  <div class="int">
                    <h5>{% if member_url %}<a class="team-member-link" href="{{ member_url }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h5>
                    {% if member.role == 'research' %}
                      <p class="team-role team-role--research"><i class="fas fa-flask" aria-hidden="true"></i> Research Collaborator</p>
                      <span class="team-level">{{ member.info }}</span>
                    {% elsif member.role == 'thesis' %}
                      <p class="team-role team-role--thesis"><i class="fas fa-graduation-cap" aria-hidden="true"></i> {{ member.info }}</p>
                    {% else %}
                      <p>{{ member.info }}</p>
                    {% endif %}
                    <div class="social-links">
                      {% if member.email %}<a href="mailto:{{ member.email }}"><i class="fas fa-envelope"></i></a>{% endif %}
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

Discover our past team members and their contributions <a href="/alumni">here</a>.


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