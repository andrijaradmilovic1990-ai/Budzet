// Aplikacija je preseljena u repo Aplikacije — stari service worker se sam uklanja.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister()));
