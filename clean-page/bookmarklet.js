javascript: (async function () {
  const resp = await fetch(window.location.href);
  const text = await resp.text();
  const doc = new DOMParser().parseFromString(text, "text/html");
  doc.querySelectorAll("script").forEach((script) => script.remove());

  const titleOriginal = doc.querySelector("title");

  const article =
    doc.querySelector("article") ||
    doc.querySelector("main") ||
    doc.querySelector('[role="main"]') ||
    doc.body;

  const elements = article.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  elements.forEach((el) => {
    el.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_blank"));
  });
  const content = Array.from(elements)
    .map((el) => el.outerHTML)
    .join("\n");

  const css = `html { font-size: 100%; }
    body {
      background: #1a1a1a;
      color: #e0e0e0;
      font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 1.2rem;
      max-width: 680px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      line-height: 1;
    }
    h1, h2, h3, h4, h5, h6 {
      color: #ffffff;
      line-height: 1.3;
      margin-top: 2rem;
    }
    p {
    line-height: 1.2;
      margin: 1rem 0;
      color: #c8c8c8;
    }
    a{
    color: #CCFF00;
    }
    a:visited{
    color: #CCFFFF
    }`;

  const w = window.open("");

  const title = w.document.createElement("title");
  title.textContent = `[Cleaned] - ${titleOriginal.innerHTML}`;
  w.document.head.appendChild(title);

  const style = w.document.createElement("style");
  style.textContent = css;
  w.document.head.appendChild(style);

  const meta = w.document.createElement("meta");
  meta.setAttribute("charset", "utf-8");
  w.document.head.appendChild(meta);

  const originalSourceParagraph = w.document.createElement("p");
  const originalSourceLink = document.createElement("a");
  originalSourceLink.innerHTML = "Original source";
  originalSourceLink.href = window.location.href;
  originalSourceLink.setAttribute("target", "_blank");
  originalSourceParagraph.appendChild(originalSourceLink);

  w.document.body.innerHTML = content;

  w.document.body.appendChild(originalSourceParagraph);
})();
