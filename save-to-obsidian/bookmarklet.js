javascript: (function () {
  const s = document.createElement("script");
  s.src = "https://unpkg.com/turndown/dist/turndown.js";

  s.onload = function () {
    const td = new TurndownService({
      headingStyle: "atx",
      bulletListMarker: "-",
      codeBlockStyle: "fenced",
    });

    td.remove([
      "script",
      "style",
      "nav",
      "footer",
      "header",
      "aside",
      "iframe",
      "noscript",
    ]);

    const t = document.title.trim();
    const u = location.href;
    const d = new Date().toISOString().split("T")[0];
    const sel = window.getSelection().toString().trim();

    const article =
      document.querySelector("article") ||
      document.querySelector("main") ||
      document.querySelector('[role="main"]') ||
      document.body;

    const md = (
      sel
        ? "> " +
          sel.split("\n").join("\n> ") +
          "\n\n---\n\n" +
          td.turndown(article)
        : td.turndown(article)
    )
      .replace(/\n{3,}/g, "\n\n")
      .slice(0, 50000);

    const n =
      "---\n" +
      'title: "' +
      t.replace(/"/g, "'") +
      '"\n' +
      "source: " +
      u +
      "\n" +
      "date: " +
      d +
      "\n" +
      "tags: [clippings]\n" +
      "---\n\n" +
      md;

    window.open(
      "obsidian://new?name=" +
        encodeURIComponent(t) +
        "&content=" +
        encodeURIComponent(n),
    );
  };

  document.head.appendChild(s);
})();
