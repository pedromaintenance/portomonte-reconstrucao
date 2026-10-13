/* Portomonte: Reconstrução — PWA offline-first */
const CACHE_NAME='portomonte-pwa-v2';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(k=>k.startsWith('portomonte-pwa-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;let url=new URL(event.request.url);if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 if(event.request.mode==='navigate'){
   event.respondWith((async()=>{const cached=await caches.match(new URL('./index.html',self.registration.scope));if(cached)return cached;try{return await fetch(event.request)}catch(e){return new Response('Abra o jogo online uma vez antes de jogar offline.',{status:503,headers:{'content-type':'text/plain;charset=utf-8'}})}})());return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
