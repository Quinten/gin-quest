var resizeImg = function( img, scale ) {
	// http://phoboslab.org/log/2012/09/drawing-pixels-is-hard 
	// Takes an image and a scaling factor and returns the scaled image
    
    // The original image is drawn into an offscreen canvas of the same size
    // and copied, pixel by pixel into another offscreen canvas with the 
    // new size.

    //var ratio = ctx.webkitBackingStorePixelRatio || 1;
//ctx.drawImage( img, 0, 0, img.width/ratio, img.height/ratio );

//var pixels = null;
//if( ratio != 1 ) {
//    pixels = ctx.webkitGetImageDataHD( 0, 0, img.width, img.height );
//}
//else {
//    pixels = ctx.getImageData( 0, 0, img.width, img.height );
//}   
    var widthScaled = img.width * scale;
    var heightScaled = img.height * scale;
    
    var orig = document.createElement('canvas');
    orig.width = img.width;
    orig.height = img.height;
    var origCtx = orig.getContext('2d');
    origCtx.drawImage(img, 0, 0, img.width, img.height);
    //origCtx.drawImage(img, 0, 0, img.width/ratio, img.height/ratio); 
    var origPixels = origCtx.getImageData(0, 0, img.width, img.height);

/* 	var origPixels = null;
	if( ratio != 1 ) {
    	origPixels = origCtx.webkitGetImageDataHD( 0, 0, img.width, img.height );
    } else {
        origPixels = origCtx.getImageData( 0, 0, img.width, img.height );
    } */
    
    var scaled = document.createElement('canvas');
    scaled.width = widthScaled;
    scaled.height = heightScaled;
    var scaledCtx = scaled.getContext('2d');
    var scaledPixels = scaledCtx.getImageData( 0, 0, widthScaled, heightScaled );
// 	var scaledPixels = null;
/* 	if( ratio != 1 ) {
    	scaledPixels = scaledCtx.webkitGetImageDataHD( 0, 0, widthScaled, heightScaled );
    } else {
        scaledPixels = scaledCtx.getImageData( 0, 0, widthScaled, heightScaled );
    } */
    
    for( var y = 0; y < heightScaled; y++ ) {
        for( var x = 0; x < widthScaled; x++ ) {
            var index = (Math.floor(y / scale) * img.width + Math.floor(x / scale)) * 4;
            var indexScaled = (y * widthScaled + x) * 4;
            scaledPixels.data[ indexScaled ] = origPixels.data[ index ];
            scaledPixels.data[ indexScaled+1 ] = origPixels.data[ index+1 ];
            scaledPixels.data[ indexScaled+2 ] = origPixels.data[ index+2 ];
            scaledPixels.data[ indexScaled+3 ] = origPixels.data[ index+3 ];
        }
    }
    scaledCtx.putImageData( scaledPixels, 0, 0 );
    return scaled;
}