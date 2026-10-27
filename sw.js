// O app de teste que existia aqui instalava um service worker. Este arquivo o desliga
// e apaga o cache antigo, para quem já abriu o site ver a landing page nova.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
})()));
