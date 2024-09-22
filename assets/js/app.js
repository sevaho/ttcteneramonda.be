import PhotoSwipeLightbox from "./photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "./photoswipe.esm.min.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  showHideAnimationType: 'zoom',
  initialZoomLevel: 'fit',
  secondaryZoomLevel: 1.5,
  maxZoomLevel: 1,
  preloaderDelay: 0,
  pswpModule: PhotoSwipe,
});

lightbox.init();

