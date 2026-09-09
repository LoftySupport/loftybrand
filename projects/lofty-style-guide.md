# Lofty Style Guide

A single-page, navigable style guide for the Lofty app system — the readable
counterpart to the card grid in the Design System tab.

**Design project:** https://claude.ai/design/p/8e6b8f3b-54d6-43db-8a16-0f9671194892

## Files

Vendored as [`lofty-style-guide/Lofty Style Guide.html`](./lofty-style-guide/).
One file, no scripts.

## What it consumes

Links the nine token files and `styles.css` from this repository directly, so
it always renders the current values rather than a snapshot. Uses the orange
square mark as its favicon, the orange logo in the side nav, and
`lofty-shapes-01-orange.svg` in the masthead.

Every colour, radius, space and font in it is a `var(--token)` reference. There
are no literals to drift — a token change here is visible in the guide on
reload, which makes it the fastest way to eyeball the effect of a token edit.

## Structure

Sticky 224px side nav against a scrolling page, matching the app shell's nav
width. Numbered sections, each with an eyebrow, title and intro, then blocks.
Brand display type for the masthead, the screen scale everywhere else.

## Not imported

The project also held an earlier draft (`Lofty style guide.html`, lowercase)
and three `guide-*.jsx` files from an approach that was abandoned — the final
page references none of them. Neither came across.
