// Piggyplant Service Worker
const CACHE = 'piggyplant-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/impressum.html',
  '/datenschutz.html',
  '/kleine-sparer/kleine-sparer.html',
  '/kleine-sparer/sparschwein.html',
  '/kleine-sparer/sparschwein-spiel.html',
  '/kleine-sparer/muenzen.html',
  '/kleine-sparer/muenzen-rechnen.html',
  '/kleine-sparer/muenzen-quiz.html',
  '/kleine-sparer/einkaufen.html',
  '/kleine-sparer/einkaufen-spiel.html',
  '/kleine-sparer/sparziel.html',
  '/kleine-sparer/sparziel-rechner.html',
  '/kleine-sparer/wunsch-sparer.html',
  '/kleine-sparer/lernspiele.html',
  '/assets/manifest.json',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap'
];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS).catch(err => console.log('Cache partial fail:', err));
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache first, fallback to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
