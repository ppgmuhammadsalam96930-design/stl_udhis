/**
 * apply_hashes_module_with_placeholders.js
 * Client-side module that reads meta tags injected into index.html.
 * Safe to include in public repo. Placeholder values are "(kosong)" until replaced.
 */
window.STLUDHIS = (function () {
  function meta(name) {
    try {
      var el = document.querySelector('meta[name="' + name + '"]');
      return el ? el.getAttribute('content') : null;
    } catch (e) {
      return null;
    }
  }
  function mask(value) {
    if (!value) return "(kosong)";
    if (value.length <= 10) return value;
    return value.slice(0, 6) + "..." + value.slice(-4);
  }
  return {
    getHashes: function () {
      return {
        user: meta("stl-pass-user"),
        dev: meta("stl-pass-dev"),
        backup: meta("stl-pass-backup")
      };
    },
    getEmailServices: function () {
      return {
        primary: meta("stl-email-primary"),
        developer: meta("stl-email-developer"),
        education: meta("stl-email-education")
      };
    },
    debug: function (showFull) {
      try {
        console.group("🧭 STL-UDHIS Meta Debug");
        var h = this.getHashes();
        var e = this.getEmailServices();
        console.log("userHash:", showFull ? h.user || "(kosong)" : mask(h.user));
        console.log("devHash:", showFull ? h.dev || "(kosong)" : mask(h.dev));
        console.log("backupHash:", showFull ? h.backup || "(kosong)" : mask(h.backup));
        console.log("emailPrimary:", e.primary || "(kosong)");
        console.log("emailDeveloper:", e.developer || "(kosong)");
        console.log("emailEducation:", e.education || "(kosong)");
        console.groupEnd();
      } catch (err) { console.error("STLUDHIS debug error", err); }
    },
    showStatus: function () {
      try {
        var box = document.createElement('div');
        box.style.position = 'fixed';
        box.style.bottom = '10px';
        box.style.right = '10px';
        box.style.background = 'rgba(0,0,0,0.85)';
        box.style.color = '#fff';
        box.style.padding = '12px 16px';
        box.style.borderRadius = '8px';
        box.style.fontFamily = 'monospace';
        box.style.fontSize = '12px';
        box.style.zIndex = '9999';
        var h = this.getHashes();
        var e = this.getEmailServices();
        box.innerHTML = [
          "<strong>STL-UDHIS Meta Status</strong>",
          "user: " + mask(h.user),
          "dev: " + mask(h.dev),
          "backup: " + mask(h.backup),
          "email: " + (e.primary || "(kosong)")
        ].join("<br>");
        document.body.appendChild(box);
        setTimeout(function () { try { box.remove(); } catch (e) {} }, 8000);
      } catch (err) { console.warn("Failed to show status box", err); }
    }
  };
})();
