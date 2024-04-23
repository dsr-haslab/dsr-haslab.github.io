---
title: "Research"
layout: default
permalink: /research
classes: wide
# excerpt: "Distributed Storage Research @ HASLab"
sitemap: false
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/unsplash-image-1.jpg
---

<script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
<script src="https://unpkg.com/magic-grid/dist/magic-grid.min.js"></script>


Our research is currently divided in four main topics:

  <div class="domains" id="domain_section">
      {% for domain in site.data.domains %}
      <a href="{{ domain.link }}" target="_blank">
          <section>
              <div class="section_title">{{ domain.name }}</div>
              <div class="about_section">
                  <span style="display:block">{{ domain.brief_description }}</span>
              </div>
          </section>
      </a>
      {% endfor %}
  </div>




<script>
      const magicProjectsGrid = new MagicGrid({
        container: "#domain_section",
        animate: false,
        gutter: 30, // default gutter size
        static: true,
        useMin: false,
        maxColumns: 4,
        useTransform: true
      });

      $("document").ready(() => {
        magicProjectsGrid.listen();
      });
</script>