# RedFormandoWeb

RedFormandoWeb is a multi-page institutional website for a ministerial network focused on formation, community, events, and spiritual resources.
It combines public content, event promotion, resource access, and lightweight interaction flows in a static frontend architecture.

[![HTML](https://img.shields.io/badge/HTML-5-E34F26)](#tech-stack)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6)](#tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E)](#tech-stack)
[![Live Site](https://img.shields.io/badge/Site-redformando.com-172759)](https://www.redformando.com/)

## Live Site

- https://www.redformando.com/

## Overview

- Institutional website for a ministerial network and spiritual community.
- Includes home page, family page, blog, resources, and training sections.
- Promotes events, registration flows, and ministry content.
- Uses static assets and configurable runtime content.
- Built as a lightweight multi-page website with responsive navigation.

## Core Features

- Home page with hero, ministry story, and events board.
- Multi-page site structure for family, blog, books, and training resources.
- Event registration modal and payment-link flow.
- Runtime configuration through `config.js`.
- Social media integrations for leaders and ministry profiles.
- SEO metadata, Open Graph, sitemap, and robots support.
- Responsive menu interactions and modal-based UI behavior.

## Tech Stack

| Layer         | Technology                               |
| ------------- | ---------------------------------------- |
| Structure     | HTML5                                    |
| Styling       | CSS3                                     |
| Interactivity | Vanilla JavaScript                       |
| Configuration | `config.js` runtime settings             |
| Media         | Static image assets                      |
| Hosting       | Static hosting / GitHub Pages compatible |

## Project Structure

```text
RedFormandoWeb/
  index.html
  familia.html
  blog.html
  recursos.html
  recursos-libros.html
  styles.css
  script.js
  config.js
  robots.txt
  sitemap.xml
  assets/
    images/
```

## Content Model

The project separates editable configuration from page markup.

Examples managed through `config.js`:

- Leader social links
- Blog PDF links
- Course and webinar links
- Payment provider URLs
- Featured event content
- Events board items

This makes the site easier to maintain without changing core layout code for every update.

## What This Project Shows

This repository is a strong example of:

- Institutional website structure for a real organization.
- Static frontend architecture with multiple content sections.
- Configurable content and event flows without a heavy framework.
- Responsive navigation and modal interactions.
- Real-world delivery for a community-centered brand.

## Local Setup

This is a static website, so you can run it quickly without a build step.

### Option 1

Open `index.html` in your browser.

### Option 2

Serve it locally with a static server:

```bash
npx serve .
```

## SEO and Web Presence

The repository includes:

- Canonical URLs
- Open Graph metadata
- Twitter preview metadata
- `robots.txt`
- `sitemap.xml`
- Security headers via Content Security Policy

## Suggested Next Improvements

- Replace placeholder payment links with production checkout URLs.
- Add a CMS or admin layer for events and blog resources.
- Improve accessibility for complex modal and menu states.
- Add analytics to measure event interest and content engagement.
- Create branded social preview images for each key page.
