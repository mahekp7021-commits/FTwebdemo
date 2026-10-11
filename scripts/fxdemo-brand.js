/* FXDemo brand cleanup and accessible wordmark */
(function () {
  "use strict";
  const brandPattern = /OANDA Global Markets|OANDA Corporation|OANDA|Oanda|oanda/gi;
  function replaceBrandText(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (node.nodeValue && brandPattern.test(node.nodeValue)) {
        brandPattern.lastIndex = 0;
        node.nodeValue = node.nodeValue.replace(brandPattern, "FXDemo");
      }
      brandPattern.lastIndex = 0;
    });
  }
  function applyBrand() {
    document.title = "FXDemo | Forex & CFD Trading";
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(function (el) {
      el.setAttribute("content", "FXDemo | Forex & CFD Trading");
    });
    document.querySelectorAll('meta[name="apple-mobile-web-app-title"]').forEach(function (el) {
      el.setAttribute("content", "FXDemo");
    });
    document.querySelectorAll("img").forEach(function (img) {
      const label = [img.getAttribute("alt"), img.getAttribute("title"), img.getAttribute("src")].join(" ");
      if (/oanda/i.test(label) && !img.dataset.fxdemoReplaced) {
        const mark = document.createElement("span");
        mark.className = "fxdemo-wordmark";
        mark.setAttribute("aria-label", "FXDemo");
        mark.innerHTML = '<span class="fxdemo-symbol" aria-hidden="true">FX</span><span class="fxdemo-word">Demo</span>';
        img.replaceWith(mark);
      }
    });
    replaceBrandText(document.body);
    const heroHeading = document.querySelector("h1");
    if (heroHeading) {
      heroHeading.textContent = "Trade smarter. Move with FXDemo.";
      heroHeading.setAttribute("aria-label", "Trade smarter. Move with FXDemo.");
    }
    const consent = document.querySelector("#onetrust-consent-sdk");
    if (consent) consent.remove();
  }
  const style = document.createElement("style");
  style.textContent = ".fxdemo-wordmark{display:inline-flex;align-items:center;gap:7px;font:800 25px/1 Inter,'Segoe UI',Arial,sans-serif;letter-spacing:-1px;color:#102033;text-decoration:none}.fxdemo-symbol{display:inline-grid;place-items:center;width:35px;height:35px;border-radius:10px;background:#B7F000;color:#102033;font-size:14px;letter-spacing:-.8px}.fxdemo-word{color:#102033}.fxdemo-word::first-letter{color:#6E9900}";
  document.head.appendChild(style);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", applyBrand);
  else applyBrand();
  const observer = new MutationObserver(function () { replaceBrandText(document.body); });
  window.addEventListener("load", function () {
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }, { once: true });
})();