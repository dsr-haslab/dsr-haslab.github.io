---
title: "Visiting Us"
layout: base
permalink: /visiting-researchers/
classes: wide
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
---

<p>
Our group warmly welcomes professors, students, and researchers from around the world
to visit us, exchange ideas, and collaborate on shared research interests.
</p>

---

## Short-Term Visitors
<p class="section-intro">
This section highlights colleagues who visited our group for short stays of one week or less.
</p>

<div class="short-visitors">
  <ul>
    {% for visit in site.data.visitors["short-term"] %}
      <li>
        {{ visit.date }}.

        {% assign num_persons = visit.persons | size %}
        {% for p in visit.persons %}
          {% if forloop.index == num_persons and num_persons > 1 %}
            and
          {% elsif forloop.index > 1 and forloop.index < num_persons %}
            ,
          {% endif %}

          <strong>
            {% if p.website %}<a href="{{ p.website }}">{% endif %}
            {{ p.name }}
            {% if p.website %}</a>{% endif %}
          </strong>
        {% endfor %}

        {% if visit.affiliation %}
          – {{ visit.affiliation }}
        {% endif %}

        {% if visit.talk %}
          <br><span class="visit-talk">Talk: <em>{{ visit.talk }}</em></span>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>


---

## Visiting Researchers
<p class="section-intro">
Here we feature researchers who spent several weeks working closely with our group as part of longer-term collaborations.
</p>

<div class="visitor-grid">
{% for person in site.data.visitors["visiting-researchers"] %}
  {% assign person_id = person.id | default: person.name | downcase | replace: ' ', '-' %}

  <div class="visitor-card" id="card-{{ person_id }}" data-current="0">

    <div class="v-header">
      {% if person.photo %}
        <img class="v-photo" src="{{ person.photo }}" alt="Photo of {{ person.name }}">
      {% else %}
        <div class="v-photo" style="display:flex;align-items:center;justify-content:center;background:#ccc;color:#fff;font-weight:600;">
          {{ person.name | slice: 0,1 }}
        </div>
      {% endif %}

      <div class="v-info">
       <div class="v-name">
        {{ person.name }}
        {% if person.website %}
          <a href="{{ person.website }}" target="_blank" class="website-icon" title="Website">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
              <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
            </svg>
          </a>
        {% endif %}
      </div>


        {% if person.position %}
          <div class="v-pos">{{ person.position }}</div>
        {% endif %}

        <div class="v-affil">{{ person.affiliation }}</div>
      </div>
    </div>

    <div class="visit-page"></div>

    {% if person.visits.size > 1 %}
    <div class="visit-dots">
      {% for v in person.visits %}
        <span class="dot {% if forloop.first %}active{% endif %}"
              data-person="card-{{ person_id }}"
              data-index="{{ forloop.index0 }}"></span>
      {% endfor %}
    </div>
    {% endif %}

    <script type="application/json" id="visits-json-{{ person_id }}">
      {{ person.visits | jsonify }}
    </script>

  </div>
{% endfor %}
</div>

<script src="/assets/js/visiting.js"></script>
