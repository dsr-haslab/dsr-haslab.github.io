# DSR website

[![Deploy](https://github.com/dsr-haslab/dsr-haslab.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/dsr-haslab/dsr-haslab.github.io/actions/workflows/jekyll.yml)

Source of [dsr-haslab.github.io](https://dsr-haslab.github.io), the website of the Distributed Storage Research (DSR) team at HASLab (INESC TEC & University of Minho).

## Run locally

Requires Ruby 3.2 and Bundler.

```sh
bundle install                # first time only
bundle exec jekyll serve      # then open http://127.0.0.1:4000
```

## Update content

Most pages are generated from data files, so updates rarely need HTML. See [UPDATING.md](UPDATING.md) for what to edit for each page (news, publications, people, projects, and more).

## Deploy

Pushing to `master` builds and deploys the site through GitHub Actions ([.github/workflows/jekyll.yml](.github/workflows/jekyll.yml)). **Every push to `master` goes live**, so preview locally first. If a change doesn't appear after a few minutes, check the [Actions tab](https://github.com/dsr-haslab/dsr-haslab.github.io/actions) for a failed build.

## Repository layout

```text
_data/           news, people, alumni, tools, visitors, carousel, collaborations, menu
_bibliography/   references.bib (all publications)
_domains/        research domain pages
_publications/   per-domain publication pages
_projects/       one file per project
_pages/          top-level pages (people, alumni, visiting, news, ...)
_layouts/        page templates
_includes/       reusable template pieces
_sass/           styles
assets/          images, PDFs, CSS, JS
index.html       homepage
_config.yml      site settings
```

## Credits

Built with [Jekyll](https://jekyllrb.com/) and a customized copy of the [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme (MIT License, see [LICENSE](LICENSE)).
