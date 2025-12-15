# AGENTS.md

| This file provides guidance to AI coding assistants when working with code in this repository.

The goal is to have a personal webpage for Cristobal Contreras Rubio. It has a legacy version in `legacy` folder (not important).

## Requirements

1. Responsive (mobile first) design
2. Light and dark theme
3. Focus on a11y like proper contrast in colours, dislexia font like Lexend, etc
4. Navbar dependant of size screen
  - Mobile screens -> Navbar anchored at the bottom with flex direction from right to left (easy to use with right thumb)
  - Other screens -> Navbar anchored at the top with flex direction from left to right
  - Anchored at the beginning there are the link sections, at the end of navbar is anchored the toggle theme button
5. Static page as much as possible.

### Stack

- TypeScript
- Astro
- TailwindCSS

## Structure for the page

Subpages:

1. Home (main page)
2. About
3. Blog
4. Portfolio / Products / Side Projects
5. Tips
6. Contact

It has a horizontal navbar with a link to each subpage.

### Home

It is a vertical scroll with hero section, minimal info, etc.

The goal get clients that hires the author, Cristóbal Contreras Rubio, so this page has it purpose.

### About

More personnal info:

- Experience
- Learning background
- Courses
- Talks and events
- etc

### Blog

Personal blog to share thoughts. To be defined.

### Portfolio

Professional experience

Side Products / Projects with a short explanation

### Tips

The goal is to migrate [this repo](https://github.com/crisconru/tips) made with MkDocs + Material Theme to this page but using Astro Starlite.

### Contact

Typical form to get in contact with me + social network profiles.
