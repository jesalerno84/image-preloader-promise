class ImagePreloader {
	preloadImage(path) {
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload = resolve();
			img.onerror = reject();
		});
	}
}

export default ImagePreloader;