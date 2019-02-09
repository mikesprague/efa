const VERSION = '0.0.1';
const CACHE_NAME = `extrafood-app-${VERSION}`;
const cacheAlways = [
  '/',
  '/manifest.json',
  '/dist/style.css',
  '/dist/main.bundle.js',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png',
];

/* eslint-disable */
addEventListener('install', (installEvent) => {
  // console.info(`[SW] Begin Installing New Version ${CACHE_NAME}`);
  self.skipWaiting();
  // perform install steps
  installEvent.waitUntil(
    caches.open(CACHE_NAME)
    .then((staticCache) => {
      // Must have cached
      return staticCache.addAll(cacheAlways).then(() => {
        // console.info('[SW] Cached the 'must haves'');
        // console.info(`[SW] Finished Updating LocalWeather.io ${CACHE_NAME}`);
      }); // end return addAll/then
    }) // end open then
  ); // end waitUntil
}); // end addEventListener

addEventListener('activate', (activateEvent) => {
  // console.info('[SW] Activate Started');
  activateEvent.waitUntil(
    caches.keys()
    .then((cacheNames) => {
      return Promise.all(
        cacheNames
        .filter(cacheName => cacheName !== CACHE_NAME)
        .map((cacheName) => {
          // console.info(`[SW] Deleted Old Version ${cacheName}`);
          return caches.delete(cacheName);
        }) // end map
      ); // end return Promise.all
    }) // end keys then
    .then(() => {
      // console.info('[SW] Activated');
      return clients.claim();
    }) // end then
  ); // end waitUntil
}); // end addEventListener

// intercept network requests
self.addEventListener('fetch', (event) => {
  // console.info('[SW] Fetch Started');
  event.respondWith(
    caches.match(event.request).then((response) => {
      // cache hit - return response
      if (response) {
        // console.info(`[SW] Served from Cache ${event.request.url}`);
        return response;
      }
      // clone the request because it's a one time use stream
      const fetchRequest = event.request.clone();
      // console.info(`[SW] Fetched ${event.request.url}`);
      return fetch(fetchRequest).then((response) => {
        // check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        // clone the response because it's a one time use stream
        const responseToCache = response.clone();
        event.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
            // console.info(`[SW] Added to Cache ${event.request.url}`);
            cache.put(event.request, responseToCache);
          })
        );
        return response;
      }).catch((error) => {
        console.log(error, event.request.url);
      });
    })
  );
});
