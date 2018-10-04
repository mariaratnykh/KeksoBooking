//'use strict'

(function(){
    let createPin = function(obj) {
        var mapPin = document.createElement('button');
        mapPin.classList.add('map__pin');
        mapPin.classList.add('map__pin--created')
        // make correct position for pins
        window.PIN_SHIFT_LEFT = 20;
        window.PIN_SHIFT_TOP = 40;
        // PIN_SHIFT USAGE IS NECESSARY FOR CLEAR INDICATION OF ADDRESS BY SHARP CORNER OF PIN
        mapPin.style.left = (+obj.location.x - window.PIN_SHIFT_LEFT) + 'px';
        mapPin.style.top = (+obj.location.y + window.PIN_SHIFT_TOP )+ 'px';
        // create avatars for pins
        var ava = document.createElement('img');
        ava.src = obj.author.avatar;
        ava.style.width = '40px';
        ava.style.height = '40px';
        ava.draggable = false;
        // add img inside pin-button
        mapPin.appendChild(ava);
        //mapPin.classList.add('hidden');
        return mapPin;
    }
    // making popups function
    let createPopup = function (obj) {
        var template = document.querySelector('template').content.cloneNode(true);
        // adding title and other information
        template.querySelector('h3').innerHTML = obj.offer.title;
        template.querySelector('small').innerHTML = obj.offer.address;
        template.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
        // check type of building and assign it to popup
        function buldingTypeIdentify(obj){
            if(obj.offer.type === 'flat') {
                return "Квартира"
            } else if (obj.offer.type === 'bungalo') {
                return"Бунгало"
            } else if (obj.offer.type === 'house') {
                return "Дом"
            }
        }
        template.querySelector('h4').innerHTML = buldingTypeIdentify(obj);
        template.querySelector('h4 ~ p').innerHTML = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
        template.querySelector('.popup__checkout').innerHTML = 'Заезд после ' + obj.offer.checkin + ', выезд после ' + obj.offer.checkout;
        template.querySelector('ul ~ p').innerHTML = obj.offer.description;
        template.querySelector('.popup__avatar').src = obj.author.avatar;

        // delete all contains in features
        var features = template.querySelector('.popup__features');
        var featuresChildren = features.querySelectorAll('li');
        for (var i=0; i < featuresChildren.length; i++){
            features.removeChild(featuresChildren[i]);
        }

        // create again features elements for every property in offer.features,
        // add classes for every element
        for( var i = 0; i < obj.offer.features.length; i++) {
            var featuresLi = document.createElement('li');
            features.appendChild(featuresLi);
            featuresLi.classList.add('feature');
            featuresLi.classList.add('feature--'+obj.offer.features[i]);
        }
        template.querySelector('.popup').classList.add('hidden');
        return template;
    }

    function createFunctionalCard(obj) {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(createPin(obj));
        fragment.appendChild(createPopup(obj));

        let pin = fragment.querySelector('.map__pin');
        let popup = fragment.querySelector('.popup');
        let closeButton = popup.querySelector('.popup__close');

        function makePinUnactive() {
            let pins = document.querySelectorAll('.map__pin--created');
            let popups = document.querySelectorAll('.popup');
            for(let j = 0; j < pins.length; j++) {
                if(pins[j].classList.contains('map__pin--active')) {
                    pins[j].classList.remove('map__pin--active');
                    if(!popups[j].classList.contains('hidden')){
                        popups[j].classList.add('hidden');
                    }
                }
            }
        }
        pin.addEventListener('click', function(event) {
            makePinUnactive();
            popup.classList.remove('hidden');
            pin.classList.add('map__pin--active');
        });
        closeButton.addEventListener('click', function(event){
            popup.classList.add('hidden');
            pin.classList.remove('map__pin--active');
        });

        return fragment;
    }

    window.addCardOnMap = function(obj) {
        document.querySelector('.map').appendChild(createFunctionalCard(obj));
    }

})();