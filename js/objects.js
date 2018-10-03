
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
    
    objects = [object1, object2, object3, object4, object5, object6, object7, object8];
})();