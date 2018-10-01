//'use strict'

(function(){

    var object1 = {
        'author': {
            'avatar': 'img/avatars/user01.png',
        },
        'offer' : {
            'title' : 'Красивый гостевой домик',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '5000',
            'type' : 'bungalo',
            'rooms' : '3',
            'guests' : '8',
            'checkin' : '12:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '680',
            'y' : '300',
        }
    }
    
    var object2 = {
        'author': {
            'avatar': 'img/avatars/user02.png',
        },
        'offer' : {
            'title' : 'Неуютное бунгало по колено в воде',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '85000',
            'type' : 'bungalo',
            'rooms' : '4',
            'guests' : '8',
            'checkin' : '12:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'dishwasher'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '300',
            'y' : '320',
        }
    }
    var object3 = {
        'author': {
            'avatar': 'img/avatars/user03.png',
        },
        'offer' : {
            'title' : 'Уютное бунгало далеко от моря',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '15000',
            'type' : 'bungalo',
            'rooms' : '2',
            'guests' : '6',
            'checkin' : '12:00',
            'checkout' : '12:00',
            'features' : ['wifi'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '380',
            'y' : '175',
        }
    }
    var object4 = {
        'author': {
            'avatar': 'img/avatars/user04.png',
        },
        'offer' : {
            'title' : 'Маленький ужасный дворец',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '55000',
            'type' : 'house',
            'rooms' : '4',
            'guests' : '15',
            'checkin' : '12:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking', 'conditioner'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '800',
            'y' : '220',
        }
    }
    var object5 = {
        'author': {
            'avatar': 'img/avatars/user05.png',
        },
        'offer' : {
            'title' : 'Некрасивый негостиприимный домик',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '3000',
            'type' : 'bungalo',
            'rooms' : '3',
            'guests' : '12',
            'checkin' : '13:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '700',
            'y' : '400',
        }
    }
    var object6 = {
        'author': {
            'avatar': 'img/avatars/user06.png',
        },
        'offer' : {
            'title' : 'Огромный прекрасный дворец',
            'address' : '{{this.location.x}}, {{this.location.y}}',
            'price' : '1 000 000',
            'type' : 'house',
            'rooms' : '22',
            'guests' : '50',
            'checkin' : '14:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking', 'washer', 'conditioner', 'dishwasher'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '600',
            'y' : '300',
        }
    }
    var object7 = {
        'author': {
            'avatar': 'img/avatars/user07.png',
        },
        'offer' : {
            'title' : 'Большая уютная квартира',
            'address' : '{{location.x}}, {{location.y}}',
            'price' : '3000',
            'type' : 'flat',
            'rooms' : '2',
            'guests' : '6',
            'checkin' : '13:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking', 'elevator', 'conditioner'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '370',
            'y' : '480',
        }
    }
    var object8 = {
        'author': {
            'avatar': 'img/avatars/user08.png',
        },
        'offer' : {
            'title' : 'Маленькая неуютная квартира',
            'address' : '710, 450',
            'price' : '1000',
            'type' : 'flat',
            'rooms' : '2',
            'guests' : '8',
            'checkin' : '14:00',
            'checkout' : '12:00',
            'features' : ['wifi', 'parking', 'elevator'],
            'description' : '',
            'photos' : [],
        },
        'location' : {
            'x' : '710',
            'y' : '450',
        }
    }
    
    window.objects = [object1, object2, object3, object4, object5, object6, object7, object8];
})();

//create-pins-and-popups.js
(function(){
    
    function createPin (obj) {
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
    pinMain.addEventListener('mouseup', function(event) {
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



// form.js
(function(){
    // EventListener which change timeOut value depending on timeIn value
    var timeIn = document.querySelector('#timein');
    var timeIns = timeIn.children;
    var timeOut = document.querySelector('#timeout');
    var timeOuts = timeOut.children;

    timeIn.addEventListener('change', function(event) {
        for(var i = 0; i < timeIns.length; i++) {
            timeIns[i].removeAttribute('selected');
            timeOuts[i].removeAttribute('selected');
        }
        var currentVal = this.value;
        for (var t=0; t < timeIns.length; t++) {
            if(timeOuts[t].value === currentVal){
                timeIns[t].setAttribute('selected', 'selected');
                timeOuts[t].setAttribute('selected', 'selected');
            }
        }
    })
    // EventListener which doesn't let to set incorrect price based on type of builing
    var price = document.querySelector('#price');
    var type = document.querySelector('#type');
    console.log(price.value);
    console.log(type.value);
    
    function isCorrectType() {
        if(price.value < 1000) {
            if(type.value === 'flat' || type.value === 'house' || type.value === 'palace'){
                return false;
            } 
            return true;
    
        } else if(price.value < 5000) {
            if(type.value === 'house' || type.value === 'palace') {
                return false;
            }
            return true;
    
        } else if(price.value < 10000) {
            if(type.value === 'palace') {
                return false;
            }
            return true;
    
        } else {
            return true;
        }
    }
    
    price.addEventListener('change', function(event){
        if(!isCorrectType()){
            price.setCustomValidity('Слишком низкая цена для данного типа недвижимости');
        } else {
        price.setCustomValidity('');
        }
    })
    
    type.addEventListener('change', function(event) {
        if(!isCorrectType()) {
            price.setCustomValidity('Слишком низкая цена для данного типа недвижимости');
        } else {
        price.setCustomValidity('');
        }
    })
    
    // EventListener which change capacity value depending on number of rooms
    var rooms = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity');
    rooms.addEventListener('change', function(event){
        for(i=0; i < rooms.children.length; i++){
            capacity.children[i].removeAttribute('selected');
        }
        var currentVal = this.value;
        if(currentVal === '1') {
            capacity.children[2].setAttribute('selected', 'selected');
        } else if(currentVal === '2') {
            capacity.children[1].setAttribute('selected', 'selected');
        } else if(currentVal === '3') {
            capacity.children[0].setAttribute('selected', 'selected');
        } else if(currentVal === '100') {
            capacity.children[3].setAttribute('selected', 'selected');
        }
    })
})();

//drag-pin-main.js
(function(){
    let pinMain = document.querySelector('.map__pin--main');
    let startCoordinates = {};
    let shift = {};
    let pinMainAddress = document.querySelector('#address'); //address in adv form

    pinMain.addEventListener('dragstart', function(evt) {
        startCoordinates = {
            left: evt.x,
            top: evt.y,
        }
    })
    pinMain.addEventListener('dragend', function(evt) {
        shift = {
            left: evt.x - startCoordinates.left,
            top: evt.y - startCoordinates.top,
        }
        
        pinMain.style.top = pinMain.offsetTop + shift.top + 'px';
        pinMain.style.left = pinMain.offsetLeft + shift.left + 'px';

        // PIN_SHIFT USAGE IS NECESSARY FOR CLEAR INDICATION OF ADDRESS BY SHARP CORNER OF PIN
        let pinMainCorrectTop = +pinMain.offsetTop + shift.top + window.PIN_SHIFT_TOP;
        let pinMainCorrectLeft = +pinMain.offsetLeft + shift.left - window.PIN_SHIFT_LEFT;
        //if pin is out of map zone
        if(pinMainCorrectTop < 140) {
            pinMainCorrectTop = 140;
            pinMain.style.top = '140px';
        }
        if(pinMainCorrectTop > 540) {
            pinMainCorrectTop = 540;
            pinMain.style.top = '540px';
        }

        pinMainAddress.value = 'x: ' + pinMainCorrectLeft + ', y: ' + pinMainCorrectTop;
    })
})();
