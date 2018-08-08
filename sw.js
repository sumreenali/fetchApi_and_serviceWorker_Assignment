var cache_name = 'fetch-api-assignment5';
var cache_url = [
'/',
'index.html',
'index.js',
'app.js',
'../css/bootstrap.css',
'../js/bootstrap.js',
'../js/bootstrapjquery.js',
'users.json',
'sample.txt',
'../images/devFullDay.png'
];
//self refer the current service worker in js
self.addEventListener('install',function(e){
	console.log('Service worker install ');
	e.waitUntil(
		caches.open(cache_name).then(function(cache)
		{
			console.log('caching app');
			cache.addAll(cache_url);
		})
		);
});

self.addEventListener('fetch', function(e){
	console.log('[ServiceWorker] Fetch', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
		);
});

self.addEventListener('activate', function(e){
	console.log('[ServiceWorker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList){
			return Promise.all(keyList.map(function(key){
				if(key !== cache_name){
					console.log('[ServiceWorker] Removing old Cache', key);
					return caches.delete(key);
				}
			}));
		})
		);
	return self.clients.claim();
});