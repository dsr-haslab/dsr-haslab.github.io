# Updating the DSR website

Almost every page reads its content from a data file, so most updates mean editing one YAML or BibTeX file. You rarely need to touch HTML.

## Before you start

Preview your changes locally:

```sh
bundle install                # first time only
bundle exec jekyll serve      # then open http://127.0.0.1:4000
```

Edits to pages and styles reload automatically. Edits to `_config.yml` need a restart, and edits under `_data/` sometimes do.

To publish, push to `master`. The GitHub Actions workflow builds and deploys the site in a few minutes.


## Quick reference

| Page | Edit this |
|---|---|
| Homepage: intro text | `index.html` (front matter at the top) |
| Homepage: news | `_data/news.yml` |
| Homepage: photo carousel | `_data/carousels.yml` (photos in `assets/images/photos/`) |
| Homepage: collaboration logos | `_data/collaborations.yml` (logos in `assets/images/logopic/`) |
| Research | `_domains/*.md` |
| Publications | `_bibliography/references.bib` (PDFs in `assets/files/<year>/`) |
| Projects | `_projects/*.md` |
| Tools | `_data/tools.yml` |
| People | `_data/team_members.yml` (photos in `assets/images/teampic/`) |
| Alumni | `_data/alumni.yml` and `_data/team_members.yml` |
| Visiting Us | `_data/visitors.yml` (photos in `assets/images/visiting/`) |
| About | `_pages/about.md` |
| Top menu | `_data/navigation.yml` |

---

## News

Edit `_data/news.yml` and add a block anywhere in the file. Items are sorted by date automatically. The homepage shows the latest 3, and `/news/` shows them all, grouped by year.

```yaml
- date: 2026-10-02
  title: "Paper Accepted at EuroSys'27"
  type: paper            # paper | award | defense | project | grant
  headline: "Our paper <em>\"Title\"</em> was accepted at EuroSys'27!"
  link: "/publications/" # optional: a site path or a full URL
  image: "/assets/images/photos/20261002_some_photo.jpg"   # optional
```

- `headline` accepts HTML, such as `<em>` for paper titles.
- The `type` sets the tag and icon. It also sets the link text: "Read the paper" for papers and awards, "Project page" for projects, and "Learn more" otherwise.
- For `image`, use a photo from `assets/images/photos/`. Keep it under about 500 KB (around 1600px wide) so the page loads quickly.

## Photo carousel (homepage)

Edit `_data/carousels.yml` and add an entry at the **top** of the `images` list. The carousel shows photos in file order and does not sort them.

```yaml
- images:
  - image: /assets/images/photos/20261002_some_photo.jpg
    caption: Jane Doe presenting our paper "Title" at Conference'26 (2026)
    date: 2026-10-02
  ...
```

Name photo files `YYYYMMDD_short_description.jpg` and put them in `assets/images/photos/`. The same photo can also be used as a news `image`.

## Collaboration logos (homepage)

Add the logo to `assets/images/logopic/` and an entry to `_data/collaborations.yml`:

```yaml
- name: KU Leuven
  logo: /assets/images/logopic/kuleuven.png
```

A PNG with a transparent or white background works best. Logos are scaled to fit a 2:1 box.

## Research

Each research domain has a file in `_domains/`. The number prefix sets the order on the Research page.

Front matter fields:

- `subtitle`: the domain name shown on its card.
- `brief_description`: the text on the Research page card.
- `summary`: the domain page's introduction. HTML is allowed; use `<br><br>` between paragraphs.
- `goals`: a list of `name` / `description` pairs.
- `highlighted_pubs`: BibTeX keys from `references.bib`.
- `contact`: a person's `id` from `team_members.yml`, whose card appears on the domain page.
- `domain_acr`: the short code (`edss`, `sos`, `bao`, `ais`). It must match the `web_domains` values in `references.bib`.

Each domain also has a filtered publications page in `_publications/`, which normally does not need changes.

## Publications

All publications live in `_bibliography/references.bib`. Add a standard BibTeX entry, ideally copied from the DOI or ACM/IEEE page, plus these site-only fields:

```bibtex
@inproceedings{jdoe2026conf,
  author      = {Doe, Jane and Paulo, Jo{\~a}o},
  title       = {Paper Title},
  booktitle   = {Proceedings of ...},
  year        = {2026},
  doi         = {10.1145/...},
  url         = {https://doi.org/10.1145/...},
  web_pubtype = {conference},
  web_domains = {edss},
  web_pdf     = {/assets/files/2026/papername-conf26-janedoe.pdf},
  web_slides  = {/assets/files/2026/papername-conf26-janedoe-presentation.pdf},
  web_git     = {https://github.com/dsrhaslab/...},
  web_award   = {Best Paper Award}
}
```

All `web_*` fields are internal and hidden from the BibTeX shown on the site. Put PDFs in `assets/files/<year>/` and name them `shortname-venueYY-firstauthor.pdf`. Double-check that the file name matches the `web_pdf` path exactly.

| Field | Effect |
|---|---|
| `web_domains` | Which domain publication pages list it: `edss`, `sos`, `bao`, `ais`, comma-separated. |
| `web_pubtype` | The type filter. One or more of `conference`, `journal`, `workshop`, `poster`, `preprint`, separated by commas, e.g. `{workshop, poster}`. |
| `web_pdf` | Path to paper's PDF. |
| `web_slides` | Path to paper's slides. |
| `web_git` | Link to code repository (e.g., GitHub). |
| `web_award` | Type of award (e.g., Best Paper Award). |


## Projects

Each project has a file in `_projects/`. To add one, copy an existing file such as `_projects/14_rescueware.md`, give it the next number, and edit:

```yaml
excerpt: Rescueware                  # short name shown on the card
permalink: /projects/Rescueware
name: "Full project title"
type: ANI PT2030                     # funding programme
reference: 21746 (...)
img: /assets/images/prjpic/x.png     # optional, in assets/images/prjpic/
status: Active                       # Active | Finished
website: https://...
duration:
  start: 2026-01-02
  end: 2029-01-01
responsible: joao.t.paulo            # id from team_members.yml
partners:
  - name: INESC TEC
    country: Portugal
    website: https://www.inesctec.pt/
```

Write the project description as normal text below the closing `---`.

The Projects page lists active projects first, then finished ones, newest first. When a project ends, change `status` to `Finished`. Add `visible: false` to hide a project without deleting it.

## Tools

Edit `_data/tools.yml`:

```yaml
- name: LazyFS
  description: A File System that forgets un-fsynced data
  repo: https://github.com/dsrhaslab/lazyfs
  highlight: true    # true = shown first
```

## People

Edit `_data/team_members.yml`. The file has three lists:

- `team_members`: current members, shown on the People page in file order.
- `previous_team_members`: former members, used by the Alumni page.
- `external_collaborators`: co-supervisors from outside the team, used by the Alumni page.

```yaml
- name: Jane Doe
  id: jane.d.doe                 # unique; used by alumni.yml, projects and domains
  photo: janedoe.jpg             # file in assets/images/teampic/
  info: PhD Student
  email: jane.d.doe@inesctec.pt
  git: https://github.com/...    # optional
  ldin: https://linkedin.com/... # optional
```

Use a square photo, about 400×400px and under 200 KB.

**When someone leaves:** move their block from `team_members` to `previous_team_members`. Keep the same `id` so their alumni entries still link to them.

## Alumni

Edit `_data/alumni.yml`. Each entry is one completed thesis or role:

```yaml
- title: "Thesis Title"
  author: jane.d.doe             # id from team_members.yml
  year: 2026 # 2026.04.09        # comment = defense date
  type: mscthesis                # phdthesis | mscthesis | other
  thesis_url:                    # optional, e.g. a RepositoriUM link
  supervisors:
    - joao.t.paulo               # ids from team_members.yml
  next_step:                     # optional
    type: industry               # academic | industry | other
    title: Software Engineer
    institution: Company
```

The `author` and every `supervisors` id must exist somewhere in `team_members.yml`: current, previous, or external collaborators. Otherwise the name shows up empty.

## Visiting Us

Edit `_data/visitors.yml`. It has two lists.

**Short visits (one week or less)** go under `short-term`:

```yaml
- date: September 2024
  affiliation: AIST, Japan
  talk: Talk title               # optional
  persons:
    - name: Dr. Jane Doe
      website: https://...       # optional
```

**Longer visits** go under `visiting-researchers`:

```yaml
- name: Jane Doe
  position: PhD Student
  affiliation: University, Country
  photo: /assets/images/visiting/jane-doe.jpg   # optional; initials shown otherwise
  website: https://...
  visits:                        # a person can have several visits
    - start: 2026-04-01
      end: 2026-07-01
      talk: Talk title           # optional
      program: INESC TEC International Visiting Researcher Programme (IIVRP)   # optional
```

## Homepage intro, About page, and menu

- **Homepage intro text and the three feature cards:** front matter at the top of `index.html`.
- **About page:** `_pages/about.md`, plain Markdown.
- **Top menu:** `_data/navigation.yml`. The order in the file is the order in the menu.
