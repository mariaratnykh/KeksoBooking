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

var objects = [object1, object2, object3, object4, object5, object6, object7, object8]

document.querySelector('.map').classList.remove('map--faded');

// функция, которая создает пины с аватарами
function createPin (obj) {
    var mapPin = document.createElement('button');
    mapPin.classList.add('map__pin');
    // задаем положение элементам с учетом указателя острым концом пина
    mapPin.style.left = (+obj.location.x - 20) + 'px';
    mapPin.style.top = (+obj.location.y + 40 )+ 'px';
    // добавляем аватарки на кнопки пинов
    var ava = document.createElement('img');
    ava.src = obj.author.avatar;
    ava.style.width = '40px';
    ava.style.height = '40px';
    ava.draggable = false;
    // добавляем тэг с картинкой внутрь кнопки-пина
    mapPin.appendChild(ava);
    return mapPin;
}
// Функция, создающая попапы для объявлений
function createPopup (obj) {
    var template = document.querySelector('template').content.cloneNode(true);
    // добавляем заголовок и прочую информацию
    template.querySelector('h3').innerHTML = obj.offer.title;
    template.querySelector('small').innerHTML = obj.offer.address;
    template.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
    // проверяем тип жилья и присваиваем карточке
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

    // удаляем все содержимое features через цикл
    var features = template.querySelector('.popup__features');
    var featuresChildren = features.querySelectorAll('li');
    for (var i=0; i < featuresChildren.length; i++){
        features.removeChild(featuresChildren[i]);
    }

    // создаем заново элементы features для каждого свойства из offer.features,
    // добавляем для каждого элемента классы
    for( var i = 0; i < obj.offer.features.length; i++) {
        var featuresLi = document.createElement('li');
        features.appendChild(featuresLi);
        featuresLi.classList.add('feature');
        featuresLi.classList.add('feature--'+obj.offer.features[i]);
    }
    return template;
}

// создаем фрагмент и цикл, который последовательно добавляет все кнопки-пины во фрагмент из массива с объектами
var fragment = document.createDocumentFragment();
for(var i = 0; i < objects.length ; i++) {
    var adv = document.createElement('div');
    adv.classList.add('map__adv');
    adv.appendChild(createPin(objects[i]));
    adv.appendChild(createPopup(objects[i])); 
    fragment.appendChild(adv);
}
document.querySelector('.map').appendChild(fragment);
var advs = document.querySelectorAll('.map__adv');
console.log(advs);


// Делаем функциональными кнопки объявлений

var popups = document.querySelectorAll('.popup');
var pins = document.querySelectorAll('.map__pin');
var closeButtons = document.querySelectorAll('.popup__close');
// Скрываем все карточки объявлений
for(var i = 0; i < popups.length; i++) {
    popups[i].classList.add('hidden');
}
// ??????????????????????????????????????????????????????????????????????????????

for(var i = 0; i <= popups.length; i++) {
    pins[i].addEventListener('click', bigbigfunction(i), false);
}

/*
function openPins (idx) {
    pins[idx].addEventListener('click', function(event) {
        popups[idx-1].classList.remove('hidden');
        pins[idx].classList.add('map__pin--active');
    });
    closeButtons[idx].addEventListener('click', function(event){
        popups[idx].classList.add('hidden');
        pins[idx].classList.remove('map__pin--active');
    })
}
*/

function bigbigfunction(i) {
    return function(event) {
        popups[i].classList.remove('hidden');
        pins[i].classList.add('map__pin--active');
    }
}