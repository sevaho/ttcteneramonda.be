import PhotoSwipeLightbox from "./photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "./photoswipe.esm.min.js";


window.addEventListener('DOMContentLoaded', e => {

    console.log(`Received event: ${e}`);
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    document.addEventListener('DOMContentLoaded', function() {
        const sections = document.querySelectorAll('.content-section'); // Sections to spy on
        const navLinks = document.querySelectorAll('#mainNav .nav-link'); // Navigation links
        const offset = 74; // Offset similar to Bootstrap's (adjust as needed)

        // Function to highlight the correct navigation link based on scroll position
        const highlightNav = () => {
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop - offset; // Adjust for the offset
                if (pageYOffset >= sectionTop) {
                    currentSection = section.getAttribute('id');
                }
            });

            // Remove the 'active' class from all links, then add it to the current section's link
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        };

        // Call the function on page scroll
        window.addEventListener('scroll', highlightNav);
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

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

