self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister()
      .then(() => self.caches.keys())
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => self.caches.delete(cacheName)),
      ))
      .then(() => self.clients.matchAll())
      .then((clients) => Promise.all(
        clients
          .filter((client) => 'navigate' in client)
          .map((client) => client.navigate(client.url)),
      )),
  )
})
