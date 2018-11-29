function updateCacheDynamic(dynamicName, req, res) {
	caches.open(dynamicName).then((cache) => {
		cache.put(req, res);
	});

	return res.clone();
}
