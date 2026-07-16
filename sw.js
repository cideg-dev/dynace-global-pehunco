const CACHE = 'dynace-v1';
const URLS = ['/', '/dynace-global-pehunco/', '/index.html', '/styles.css?v=2', '/script.js?v=2', '/manifest.json', '/Dynace1.png', '/icon-192.png', '/icon-512.png'];

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
