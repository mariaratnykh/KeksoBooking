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

// создаем фрагмент и цикл, который последовательно добавляет все кнопки-пины во фрагмент из массива с объектами
var fragment = document.createDocumentFragment();

for(var i = 0; i < objects.length; i++) {
    fragment.appendChild(createPin(objects[i]));   
}

// вставляем фрагмент внутрь .map__pins
document.querySelector('.map__pins').appendChild(fragment); 

for (var j = 0; j < objects.length; j++) {

// клонируем карточку объявления из template
var template = document.querySelector('template').content.cloneNode(true);
// добавляем заголовок и прочую информацию
template.querySelector('h3').innerHTML = object8.offer.title;
template.querySelector('p > small').innerHTML = object8.offer.address;
template.querySelector('.popup__price').innerHTML = object8.offer.price + '&#x20bd;/ночь';
// проверяем тип жилья и присваиваем в карточку
var type;
if(object8.offer.type === 'flat') {
    type = "Квартира"
} else if (object8.offer.type === 'bungalo') {
    type = "Бунгало"
} else if (object8.offer.type === 'house') {
    type = "Дом"
}
template.querySelector('h4').innerHTML = type;
template.querySelector('h4 ~ p').innerHTML = object8.offer.rooms + ' комнаты для ' + object8.offer.guests + ' гостей';
template.querySelector('.popup__checkout').innerHTML = 'Заезд после ' + object8.offer.checkin + ', выезд после ' + object8.offer.checkout;

// удаляем все содержимое features через цикл
var features = template.querySelector('.popup__features');
var featuresChildren = features.querySelectorAll('li');

for (var i=0; i < featuresChildren.length; i++){
    features.removeChild(featuresChildren[i]);
}

// создаем новый элемент для каждого свойства из offer.features,
// добавляем для каждого элемента классы
for( var i = 0; i < object8.offer.features.length; i++) {
    var featuresLi = document.createElement('li');
    features.appendChild(featuresLi);
    featuresLi.classList.add('feature');
    featuresLi.classList.add('feature--'+object8.offer.features[i]);
}

template.querySelector('ul ~ p').innerHTML = object8.offer.description;
template.querySelector('.popup__avatar').src = object8.author.avatar;

document.querySelector('.map').appendChild(template);
}

