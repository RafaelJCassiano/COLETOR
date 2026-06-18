// Arquivo: sw.js
const CACHE_NAME = 'coletor-cache-v1';
const urlsToCache = [
  './',
  './lindex.html',
  // Se tiver outras páginas ou imagens locais, coloque aqui
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepta as requisições da rede
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna o cache se achar (OFFLINE), senão tenta baixar da internet
        return response || fetch(event.request);
      })
  );
});
