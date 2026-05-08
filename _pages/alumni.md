---
title: "Alumni"
layout: base
permalink: /alumni
classes: wide
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

<style>
.alumni-entry {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid #eee;
}
.alumni-year {
  min-width: 2.8rem;
  font-size: 0.85rem;
  color: #999;
  flex-shrink: 0;
}
.alumni-body {
  flex: 1;
  font-size: 0.95rem;
}
.alumni-author {
  font-weight: 600;
}
.alumni-meta {
  display: block;
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.1rem;
}
.alumni-meta a {
  color: #777;
}
.alumni-meta a:hover {
  color: #333;
}
.alumni-links {
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;
  align-items: center;
}
.alumni-links a {
  color: #aaa;
}
.alumni-links a:hover {
  color: #333;
}
[data-tooltip] {
  position: relative;
  cursor: default;
}
[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
}
</style>

{% assign all_members = site.data.team_members.team_members
  | concat: site.data.team_members.previous_team_members
  | concat: site.data.team_members.external_collaborators %}

This page highlights past team members who have completed theses or projects aligned with our research topics.

## PhD Theses
<hr>

{% assign phd_theses = site.data.alumni | where_exp: "item", "item.type == 'phdthesis'" %}
{% assign phd_by_year = phd_theses | group_by: "year" | sort: "name" | reverse %}
{% for group in phd_by_year %}
{% for pub in group.items %}
{% assign pub_author = all_members | where: "id", pub.author | first %}
<div class="alumni-entry">
  <span class="alumni-year">{{ pub.year }}</span>
  <div class="alumni-body">
    <span class="alumni-author">{% if pub_author %}{{ pub_author.name }}{% else %}{{ pub.author }}{% endif %}</span> — <em>{{ pub.title }}</em>
    {% if pub.supervisors or pub.next_step %}
    <span class="alumni-meta">
      {% if pub.supervisors %}
        <i class="fas fa-chalkboard-teacher" data-tooltip="Supervisors"></i>
        {% for supervisor_id in pub.supervisors %}
          {% assign s = all_members | where: "id", supervisor_id | first %}
          {% if s and s.personal_webpage %}
            <a href="{{ s.personal_webpage }}">{{ s.name }}</a>
          {% elsif s %}
            {{ s.name }}
          {% else %}
            {{ supervisor_id }}
          {% endif %}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      {% endif %}
      {% if pub.supervisors and pub.next_step %} &nbsp;·&nbsp; {% endif %}
      {% if pub.next_step %}
        {% if pub.next_step.type == 'academic' %}
          <i class="fas fa-graduation-cap" data-tooltip="Next step"></i>
        {% else %}
          <i class="fas fa-briefcase" data-tooltip="Next step"></i>
        {% endif %}
        {% if pub.next_step.title %}{{ pub.next_step.title }}{% endif %}
        {% if pub.next_step.institution %} @ {{ pub.next_step.institution }}{% endif %}
      {% endif %}
    </span>
    {% endif %}
  </div>
  <div class="alumni-links">
    {% if pub_author and pub_author.personal_webpage %}
      <a href="{{ pub_author.personal_webpage }}" data-tooltip="Personal webpage"><i class="fas fa-fw fa-globe"></i></a>
    {% endif %}
    {% if pub_author and pub_author.ldin %}
      <a href="{{ pub_author.ldin }}" data-tooltip="LinkedIn"><i class="fab fa-fw fa-linkedin"></i></a>
    {% endif %}
    {% if pub.thesis_url and pub.thesis_url != "" %}
      <a href="{{ pub.thesis_url }}" data-tooltip="Thesis link"><i class="fas fa-fw fa-link"></i></a>
    {% endif %}
  </div>
</div>
{% endfor %}
{% endfor %}

## MSc Theses
<hr>

{% assign msc_theses = site.data.alumni | where_exp: "item", "item.type == 'mscthesis'" %}
{% assign msc_by_year = msc_theses | group_by: "year" | sort: "name" | reverse %}
{% for group in msc_by_year %}
{% for pub in group.items %}
{% assign pub_author = all_members | where: "id", pub.author | first %}
<div class="alumni-entry">
  <span class="alumni-year">{{ pub.year }}</span>
  <div class="alumni-body">
    <span class="alumni-author">{% if pub_author %}{{ pub_author.name }}{% else %}{{ pub.author }}{% endif %}</span> — <em>{{ pub.title }}</em>
    {% if pub.supervisors or pub.next_step %}
    <span class="alumni-meta">
      {% if pub.supervisors %}
        <i class="fas fa-chalkboard-teacher" data-tooltip="Supervisors"></i>
        {% for supervisor_id in pub.supervisors %}
          {% assign s = all_members | where: "id", supervisor_id | first %}
          {% if s and s.personal_webpage %}
            <a href="{{ s.personal_webpage }}">{{ s.name }}</a>
          {% elsif s %}
            {{ s.name }}
          {% else %}
            {{ supervisor_id }}
          {% endif %}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      {% endif %}
      {% if pub.supervisors and pub.next_step %} &nbsp;·&nbsp; {% endif %}
      {% if pub.next_step %}
        {% if pub.next_step.type == 'academic' %}
          <i class="fas fa-graduation-cap" data-tooltip="Next step"></i>
        {% else %}
          <i class="fas fa-briefcase" data-tooltip="Next step"></i>
        {% endif %}
        {% if pub.next_step.title %}{{ pub.next_step.title }}{% endif %}
        {% if pub.next_step.institution %} @ {{ pub.next_step.institution }}{% endif %}
      {% endif %}
    </span>
    {% endif %}
  </div>
  <div class="alumni-links">
    {% if pub_author and pub_author.personal_webpage %}
      <a href="{{ pub_author.personal_webpage }}" data-tooltip="Personal webpage"><i class="fas fa-fw fa-globe"></i></a>
    {% endif %}
    {% if pub_author and pub_author.ldin %}
      <a href="{{ pub_author.ldin }}" data-tooltip="LinkedIn"><i class="fab fa-fw fa-linkedin"></i></a>
    {% endif %}
    {% if pub.thesis_url and pub.thesis_url != "" %}
      <a href="{{ pub.thesis_url }}" data-tooltip="Thesis link"><i class="fas fa-fw fa-link"></i></a>
    {% endif %}
  </div>
</div>
{% endfor %}
{% endfor %}

## Others
<hr>

{% assign others = site.data.alumni | where_exp: "item", "item.type == 'other'" %}
{% assign others_by_year = others | group_by: "year" | sort: "name" | reverse %}
{% for group in others_by_year %}
{% for pub in group.items %}
{% assign pub_author = all_members | where: "id", pub.author | first %}
<div class="alumni-entry">
  <span class="alumni-year">{{ pub.year }}</span>
  <div class="alumni-body">
    <span class="alumni-author">{% if pub_author %}{{ pub_author.name }}{% else %}{{ pub.author }}{% endif %}</span> — <em>{{ pub.title }}</em>
    {% if pub.supervisors or pub.next_step %}
    <span class="alumni-meta">
      {% if pub.supervisors %}
        <i class="fas fa-chalkboard-teacher" data-tooltip="Supervisors"></i>
        {% for supervisor_id in pub.supervisors %}
          {% assign s = all_members | where: "id", supervisor_id | first %}
          {% if s and s.personal_webpage %}
            <a href="{{ s.personal_webpage }}">{{ s.name }}</a>
          {% elsif s %}
            {{ s.name }}
          {% else %}
            {{ supervisor_id }}
          {% endif %}
          {% unless forloop.last %}, {% endunless %}
        {% endfor %}
      {% endif %}
      {% if pub.supervisors and pub.next_step %} &nbsp;·&nbsp; {% endif %}
      {% if pub.next_step %}
        {% if pub.next_step.type == 'academic' %}
          <i class="fas fa-graduation-cap" data-tooltip="Next step"></i>
        {% else %}
          <i class="fas fa-briefcase" data-tooltip="Next step"></i>
        {% endif %}
        {% if pub.next_step.title %}{{ pub.next_step.title }}{% endif %}
        {% if pub.next_step.institution %} @ {{ pub.next_step.institution }}{% endif %}
      {% endif %}
    </span>
    {% endif %}
  </div>
  <div class="alumni-links">
    {% if pub_author and pub_author.personal_webpage %}
      <a href="{{ pub_author.personal_webpage }}" data-tooltip="Personal webpage"><i class="fas fa-fw fa-globe"></i></a>
    {% endif %}
    {% if pub_author and pub_author.ldin %}
      <a href="{{ pub_author.ldin }}" data-tooltip="LinkedIn"><i class="fab fa-fw fa-linkedin"></i></a>
    {% endif %}
    {% if pub.thesis_url and pub.thesis_url != "" %}
      <a href="{{ pub.thesis_url }}" data-tooltip="Thesis link"><i class="fas fa-fw fa-link"></i></a>
    {% endif %}
  </div>
</div>
{% endfor %}
{% endfor %}