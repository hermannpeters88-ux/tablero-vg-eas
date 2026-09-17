// Service worker del tablero VG EAS.
// Único objetivo: guardar una copia de index.html para que, si la tele
// arranca antes de que el router termine de reconectarse a internet, el
// navegador pueda mostrar esa copia al instante (en vez de una pantalla
// en blanco) mientras fetchData() reintenta traer los datos en vivo.
// No cachea nada de las APIs de Google — esas siempre van directo a la red.

const CACHE_NAME = 'vg-tablero-shell-v1';
const APP_SHELL_URL = 'index.html';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(APP_SHELL_URL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  const isAppShell = req.mode === 'navigate' ||
    (req.method === 'GET' && url.origin === self.location.origin && url.pathname.endsWith('index.html'));

  if (!isAppShell) return; // todo lo demás (APIs de Google, etc.) va directo a la red

  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(APP_SHELL_URL, resClone));
        return res;
      })
      .catch(() => caches.match(APP_SHELL_URL))
  );
});
