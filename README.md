# chancli-bookmarklets

A collection of browser bookmarklets for reading and saving web content.

---

## Bookmarklets

### clean-page

Opens the current page in a new window stripped of scripts and clutter, showing only the main content (`article`, `main`, or `body`) with a minimal dark-themed reading layout. All links open in a new tab, and an "Original source" link is appended at the bottom.

**No dependencies** — uses only browser-native APIs (`fetch`, `DOMParser`).

---

### save-to-obsidian

Converts the current page to Markdown and opens it directly in Obsidian via the `obsidian://new` URI scheme. Generates a note with YAML frontmatter (`title`, `source`, `date`, `tags: [clippings]`).

If you have text selected before clicking the bookmarklet, it is prepended as a blockquote before the full page content.

**Dependency:** [Turndown](https://github.com/mixmark-io/turndown) — loaded at runtime from `unpkg.com`.

---

## How to install

Minify the bookmarklet you want (use the `.min.js` file), then create a new bookmark in your browser and paste the minified code as the URL.

## References

- https://css-tricks.com/a-complete-guide-to-bookmarklets
