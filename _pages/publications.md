---
title: "Publications"
layout: default
# excerpt: "DSR @ HASLab -- Publications."
sitemap: false
permalink: /publications/
author_profile: false
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/unsplash-image-1.jpg
---


<!-- # Publications -->

{% for publi in site.data.publist %}
   <h3>{{ publi.year}}</h3>
   <ul>
   {% for pub in publi.list %}
   	<li><strong>{{ pub.title }}</strong>. {{ pub.authors }}. {{ pub.where }}.</li>
   {% endfor %}
	</ul>
{% endfor %}

