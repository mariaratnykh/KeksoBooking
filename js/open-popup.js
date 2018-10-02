// Make pins functioinal 
//open-popup.js
(function(){
    var popups = document.querySelectorAll('.popup');
    var pins = document.querySelectorAll('.map__pin--created');
    var closeButtons = document.querySelectorAll('.popup__close');

    // Disable advertisement form
    var formElements = document.querySelectorAll('.form__element');
    for(i = 0; i < formElements.length; i++) {
        formElements[i].setAttribute('disabled', 'disabled');
    }

    // Activate map and adverisement form after pressing the main button
    var pinMain = document.querySelector('.map__pin--main');
    pinMain.addEventListener('mousedown', function(event) {
        document.querySelector('.map').classList.remove('map--faded');
        pinMain.setAttribute('draggable', 'true');
        for( i = 0; i < pins.length; i++) {
            pins[i].classList.remove('hidden');
        }
        for(i = 0; i < formElements.length; i++) {
            formElements[i].removeAttribute('disabled');
        };
        document.querySelector('.notice__form').classList.remove('notice__form--disabled');
    })

    // Open popup after pressing the pin
    for(var i = 0; i < popups.length; i++) {
        addEvt(i);
    }

    // Fucntion that makes pin inactive (if it is) and hides it's popup
    function makePinUnactive() {
        for(var j = 0; j < pins.length; j++) {
            if(pins[j].classList.contains('map__pin--active')) {
                pins[j].classList.remove('map__pin--active');
                if(!popups[j].classList.contains('hidden')){
                    popups[j].classList.add('hidden');
                }
            }
        }
    }
    // Functions for EventListener that opens popups
    function addEvt (i){
        pins[i].addEventListener('click', function(event) {
            makePinUnactive();
            popups[i].classList.remove('hidden');
            pins[i].classList.add('map__pin--active');
        });
        closeButtons[i].addEventListener('click', function(event){
            popups[i].classList.add('hidden');
            pins[i].classList.remove('map__pin--active');
        });
    }
})();

/*
(function(){
    window.createPin = function(obj) {
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
        mapPin.classList.add('hidden');
        return mapPin;
    }
    // making popups function
    function createPopup (obj) {
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

    // create document fragment and cycle, which adds all pins in fragment
    var fragment = document.createDocumentFragment();
    for(var i = 0; i < window.objects.length ; i++) {
        var adv = document.createElement('div');
        adv.classList.add('map__adv');
        adv.appendChild(createPin(window.objects[i]));
        adv.appendChild(createPopup(window.objects[i])); 
        fragment.appendChild(adv);
    }
    document.querySelector('.map').appendChild(fragment);
    var advs = document.querySelectorAll('.map__adv');  
})();
*/