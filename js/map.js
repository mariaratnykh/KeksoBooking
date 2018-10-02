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
    window.createPopup = function (obj) {
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

    function addPinAndPopup(obj) {
        var fragment = document.createDocumentFragment();
        var adv = document.createElement('div');
        adv.classList.add('map__adv');
        adv.appendChild(createPin(obj));
        adv.appendChild(createPopup(obj)); 
        fragment.appendChild(adv);
        document.querySelector('.map').appendChild(fragment);
    }
    // create document fragment and cycle, which adds all pins in fragment
    for(let i = 0; i < objects.length; i++ ) {
        addPinAndPopup(objects[i]);
    }
})();