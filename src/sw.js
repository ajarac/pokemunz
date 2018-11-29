importScripts('./sw-utils.js');

const STATIC_NAME = 'static-v1';
const DYNAMIC_NAME = 'dynamic-v1';
const INMUTABLE_NAME = 'inmutable-v1';

self.addEventListener('install', (e) => {
	const cacheProm = caches.open(STATIC_NAME).then((cache) => cache.addAll([ '/', '/index.html', 'app/bundle.js' ]));

	const cacheInmutable = caches
		.open(INMUTABLE_NAME)
		.then((cache) => cache.add('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'));

	e.waitUntil(Promise.all([ cacheProm, cacheInmutable ]));
});

self.addEventListener('fetch', (e) => {
	const response = caches.match(e.request).then((res) => {
		if (res) {
			return res;
		} else {
			return fetch(e.request).then((newResp) => updateCacheDynamic(DYNAMIC_NAME, e.request, newResp));
		}
	});

	e.respondWith(response);
});