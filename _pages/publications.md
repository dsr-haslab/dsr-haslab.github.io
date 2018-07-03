---
title: "DBR @ HASLab - Publications"
layout: gridlay
excerpt: "DBR @ HASLab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications


{% for publi in site.data.publist %}
   <h3>{{ publi.year}}</h3>
   <ul>
   {% for pub in publi.list %}
   	<li><strong>{{ pub.title }}</strong>. {{ pub.authors }}. {{ pub.where }}.</li>
   {% endfor %}
	</ul>
{% endfor %}

