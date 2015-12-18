/*global jest, describe, it, expect, fail */
jest.dontMock('../src/ImagePreloader.js');

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
				
			})
			.catch(function (err) {
				console.log(err);
				console.log(this);
			});
	});
	
	//https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png
	
	// it('', function () {
	// 	var imagePath = 'http://somesite/someimage.gif';
			
	// 	ImagePreloader.preloadImage(imagePath)
	// 		.then(function (data) {
				
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err);
	// 			console.log(this);
	// 		});
	// });
});