/*global describe, it, expect */
var ImagePreloader = require('../src/ImagePreloader.js').default;

describe('ImagePreloader', function () {
	it('throws an error on preloadImage when path is null', function () {
		var threwError = false;
		try {
			ImagePreloader.preloadImage(null);
		}
		catch (error) {
			expect(error.message).toBe('path is a required string');
			threwError = true;
		}
		
		expect(threwError).toBe(true);
	});
	
	it('throws an error on preloadImage when path is undefined', function () {
		var threwError = false;
		try {
			ImagePreloader.preloadImage(undefined);
		}
		catch (error) {
			expect(error.message).toBe('path is a required string');
			threwError = true;
		}
		
		expect(threwError).toBe(true);
	});
	
	it('throws an error on preloadImage when image does not exist', function () {
		var imagePath = 'http://somesite/someimage.gif';
			
		ImagePreloader.preloadImage(imagePath)
			.then(function (data) {
				fail();
			})
			.catch(function (err) {
				expect(err.path[0].src).toBe(imagePath);
			});
	});
});