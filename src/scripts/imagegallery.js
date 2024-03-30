import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: '0000-0000-000-0000',
    speed: 500,
    thumbnail: true,
    download: false,
    zoomFromOrigin: false,
    hideScrollbar: true,
    counter: false,
});