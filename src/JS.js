import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Code for handling navigation links click
    const handleNavLinksClick = (event) => {
      const { hash } = event.currentTarget;

      if (hash !== '') {
        event.preventDefault();

        const targetElement = document.querySelector(hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    // Code for initializing Isotope
    const initIsotope = () => {
      const t = window.$('.portfolio-container');
      t.isotope({
        filter: '.new',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });

      window.$('.filters a').click(function () {
        window.$('.filters .active').removeClass('active');
        window.$(this).addClass('active');

        const filter = window.$(this).attr('data-filter');
        t.isotope({
          filter,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });
    };

    // Initialize Isotope on component mount
    initIsotope();

    // Event listener for navigation links
    window.$('.navbar .nav-link').on('click', handleNavLinksClick);

    // Clean up event listeners on component unmount
    return () => {
      window.$('.navbar .nav-link').off('click', handleNavLinksClick);
    };
  }, []); // Empty dependency array ensures this useEffect runs only once on mount

  useEffect(() => {
    // Code for initializing Google Maps
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.674, lng: -73.945 },
        zoom: 12,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        // ... (other map options)
      });
      // ... (other map styling options)
    };

    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    // Clean up the script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures this useEffect runs only once on mount

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MyComponent;
