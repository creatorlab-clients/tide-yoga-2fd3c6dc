/* ═══════════════════════════════════════════════════════════════
   template-fiorai-002 — Bloom Atelier — script.js
   creative-floral scroll · multi-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/fiorai-002/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // creative-floral — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 800;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#9C7B72" stop-opacity="0.18"/>'
    + '<stop offset="100%" stop-color="#C4AA7D" stop-opacity="0.10"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="#F8F4EF"/>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<text x="50%" y="50%" font-family="\'Cormorant Garamond\',Georgia,serif" font-size="17"'
    + ' font-style="italic" fill="#9A9087" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Light icons — SVG inline ────────────────────────
var PHOSPHOR_ICONS = {

  // HeartStraight — casamentos / amor
  'HeartStraight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M128,224S24,168,24,96A56,56,0,0,1,128,64.4,56,56,0,0,1,232,96C232,168,128,224,128,224Z"/></svg>',

  // Star — eventos / festas
  'Star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="128,32 158,96 228,104 179,150 192,220 128,186 64,220 77,150 28,104 98,96"/></svg>',

  // Leaf — bouquets / arranjos
  'Leaf': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M208,48c0,96-80,144-80,144S48,144,48,48A80,80,0,0,1,208,48Z"/><line x1="128" y1="192" x2="128" y2="232"/></svg>',

  // MapPin — endereço
  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M128,24A72,72,0,1,0,200,96C200,136,128,232,128,232S56,136,56,96A72,72,0,0,1,128,24Z"/><circle cx="128" cy="96" r="24"/></svg>',

  // Clock — horários
  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  // Phone — telefone
  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M159.38,185.79a96,96,0,0,1-89.17-89.17,8,8,0,0,1,2.19-6.4L87.6,75a8,8,0,0,1,11,.56l24,28a8,8,0,0,1-.44,11.13l-16.31,15.69a80.33,80.33,0,0,0,39.75,39.75l15.69-16.31a8,8,0,0,1,11.13-.44l28,24a8,8,0,0,1,.56,11L185.79,177.19A8,8,0,0,1,159.38,185.79Z"/></svg>',

  // WhatsApp Logo
  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,81.06l11.48,22.94L101,118.37a8,8,0,0,0-.73,7.65,56.53,56.53,0,0,0,30.15,30.15,8,8,0,0,0,7.65-.73l14.37-9.08,22.94,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/></svg>',

  // Instagram Logo
  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="6" fill="currentColor" stroke="none"/></svg>',

  // Arrow Right — link indicator
  'ArrowRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>'

};

(function () {
  'use strict';

  // ── Inject Phosphor icons ──────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ────────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ────────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 48);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── Hero text reveal (above fold) ─────────────────────────
  setTimeout(function () {
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('hero-visible');
    document.querySelectorAll('.hero .fade-up, .page-header .fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 80);

  // ── IntersectionObserver — Fade Up & Stagger ───────────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      // Skip hero elements — handled above
      if (!el.closest('.hero') && !el.closest('.page-header')) {
        animObserver.observe(el);
      }
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Tilt 3D — portfolio & galeria cards ───────────────────
  // Disabled on mobile (window.innerWidth < 768)
  function initTilt() {
    if (window.innerWidth < 768) return;

    document.querySelectorAll('.tilt-3d').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.style.transition = 'transform 0.15s ease, box-shadow 0.15s ease';
      });
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width  - 0.5;
        var y = (e.clientY - rect.top)  / rect.height - 0.5;
        var rotY =  x * 10;  // max ±5° at edge (10 * 0.5)
        var rotX = -y * 10;
        card.style.transform = 'perspective(700px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) scale3d(1.01,1.01,1.01)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease';
        card.style.transform  = '';
      });
    });
  }
  initTilt();

  // ── Scroll animation — canvas (cover mode) ─────────────────
  // Multi-page guard: only run on pages that have the canvas
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var loaded       = 0;
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');
  var DPR          = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, total > 0 ? scrolled / total : 0);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      var num = String(idx + 1);
      while (num.length < FRAME_PAD) num = '0' + num;
      img.src = FRAME_PATH + FRAME_PREFIX + num + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
