var object1 = {
    'author': {
        'avatar': 'img/avatars/user01.png',
    },
    'offer' : {
        'title' : 'Красивый гостевой домик',
        'address' : '{{location.x}}, {{location.y}}',
        'price' : '5000',
        'type' : 'bungalo',
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
        'address' : '{{location.x}}, {{location.y}}',
        'price' : '1 000 000',
        'type' : 'house',
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
        'address' : '{{location.x}}, {{location.y}}',
        'price' : '1000',
        'type' : 'flat',
        'guests' : '2',
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