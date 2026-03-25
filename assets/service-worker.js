// Piggyplant Service Worker
const CACHE = 'piggyplant-v3';
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
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap',

  // ── Icons / Produktbilder (einkaufen-spiel) ──
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Aepfel.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ApfelsaftICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ApfelsaftNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ApfelsaftP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Baguette.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Bananen.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Bonbons.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Butter.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ChipsICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ChipsNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ChipsP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ColaICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ColaNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ColaP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/CornflakesICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/CornflakesNO.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/CornflakesP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Donut.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/DuschgelICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/DuschgelNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/DuschgelP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Eier.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ErdnussbutterICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ErdnussbutterNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ErdnussbutterP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GoudaICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GoudaNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GoudaP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GummibaerenICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GummibaerenNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/GummibaerenP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HackfleischICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HackfleischNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HackfleischP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Heidelbeeren.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HonigICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HonigNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/HonigP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/JoghurtICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/JoghurtNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/JoghurtP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KaffeeICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KaffeeNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KaffeeP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Karotten.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Kartoffeln.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Kekse.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KetchupICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KetchupNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KetchupP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KlopapierICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KlopapierNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/KlopapierP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Luftballon.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Lutscher.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MarmeladeICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MarmeladeNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MarmeladeP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Milch.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MineralwasserICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MineralwasserNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MineralwasserP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MuesliriegelICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MuesliriegelNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MuesliriegelP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Muffin.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MultivitICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MultivitNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/MultivitP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Nudeln2.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/OlivenoelICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/OlivenoelNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/OlivenoelP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Orangenlimo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Pixibuch.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PizzaICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PizzaNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PizzaP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PommesICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PommesNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/PommesP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Reis2.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SalatdressingICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SalatdressingNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SalatdressingP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Sammelkarten.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SchokoladeICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SchokoladeNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SchokoladeP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SenfICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SenfNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/SenfP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ShampoICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ShampoNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ShampoP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Softeis.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TeeICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TeeNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TeeP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Toastbrot.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TomatensauceICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TomatensauceNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/TomatensauceP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ZahnpastaICON.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ZahnpastaNo.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ZahnpastaP.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Zitronen.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/Zwiebeln.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/popcorn.webp',
  'https://cdn.jsdelivr.net/gh/KlotzOne/piggyplant@main/public/images/Icons/ueberraschungsei.webp'
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
