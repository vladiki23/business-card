const CACHE_NAME = 'drone-pilot-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/logo192.png',
    '/logo512.png',
    '/manifest.json',
    '/videos/hero-video.mp4', // локальное видео
    '/path-to-images/drone-filming.webp',
    '/path-to-images/commercial-drone.webp',
    '/path-to-images/drone-survey.webp',
    '/path-to-images/real-estate-drone.webp'
    '/path-to-images/eu-flag.png'
    '/path-to-images/easa-logo.jpg'
    '/path-to-images/images.webp'
    '/path-to-images/uk-flag.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
