
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75952891514525, 37.612466812133796],
            zoom: 15,
            controls: ['geolocationControl', 'zoomControl']
        },
        { 
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition:  { top: "200px", right: "20px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "120px", right: "20px" }
          }
        );

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark([55.75855405429652, 37.6009715406103], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.svg',
            iconImageSize: [28, 40],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }

