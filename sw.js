const CACHE = 'dynace-v1';
const URLS = ['/', '/dynace-global-pehunco/', '/index.html', '/styles.css?v=2', '/script.js?v=2', '/manifest.json', '/Dynace1.png', '/icon-192.png', '/icon-512.png',
    '/rocenta.html','/aceguard.html','/urbanism.html','/collagene.html','/tripleroot.html','/lyftmax.html','/acebrew.html',
    '/images/DYNACE_ROCENTA.jpg','/images/DYNACE_ACEGUARD.jpg','/images/DYNACE_URBANISM.jpg','/images/DYNACE_COLLAGENE.jpg','/images/DYNACE_TRIPLE_ROOT.jpg','/images/DYNACE_LYFTMAX.jpg','/images/DYNACE_ACE_BREW.jpg',
    '/images/thumb_DYNACE_ROCENTA.jpg','/images/thumb_DYNACE_ACEGUARD.jpg','/images/thumb_DYNACE_URBANISM.jpg','/images/thumb_DYNACE_COLLAGENE.jpg','/images/thumb_DYNACE_TRIPLE_ROOT.jpg','/images/thumb_DYNACE_LYFTMAX.jpg','/images/thumb_DYNACE_ACE_BREW.jpg'];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(URLS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('/index.html')))
    );
});
