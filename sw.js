importScripts('/anschreiben/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/anschreiben/_nuxt/31af5462a49dc4fd9a11.js",
    "revision": "64676ba378d366e173e4efd63b60f29f"
  },
  {
    "url": "/anschreiben/_nuxt/40cbcddf77769e922f91.js",
    "revision": "2b504b4dc8b0782f64d65243979d4e56"
  },
  {
    "url": "/anschreiben/_nuxt/722d0e04dc3bc5b6be9d.js",
    "revision": "dfa72f20117e7169424d088147ec2bc2"
  },
  {
    "url": "/anschreiben/_nuxt/a099be1a6fce21cd7240.js",
    "revision": "4111cf60248a27c95728cd91fcfc7220"
  },
  {
    "url": "/anschreiben/_nuxt/de335f5131e9fcda5518.js",
    "revision": "39044db55990687c1665c058e205435c"
  }
], {
  "cacheId": "anschreiben",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/anschreiben/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/anschreiben/.*'), workbox.strategies.networkFirst({}), 'GET')
