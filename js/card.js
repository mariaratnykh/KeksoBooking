// PIN_SHIFT USAGE IS NECESSARY FOR CLEAR INDICATION OF ADDRESS BY SHARP CORNER OF PIN
export {addCardOnMap, PIN_SHIFT};

const PIN_SHIFT = {
    LEFT: 20,
    TOP: 40
}

let createPin = function(obj) {
    let mapPin = document.createElement('button');
    mapPin.classList.add('map__pin');
    mapPin.classList.add('map__pin--created')
    // PIN_SHIFT USAGE IS NECESSARY FOR CLEAR INDICATION OF ADDRESS BY SHARP CORNER OF PIN
    mapPin.style.left = (+obj.location.x - PIN_SHIFT.LEFT) + 'px';
    mapPin.style.top = (+obj.location.y + PIN_SHIFT.TOP)+ 'px';
    // create avatars for pins
    let ava = document.createElement('img');
    ava.src = obj.author.avatar;
    ava.style.width = '40px';
    ava.style.height = '40px';
    ava.draggable = false;
    // add img inside pin-button
    mapPin.appendChild(ava);
    //mapPin.classList.add('hidden');
    return mapPin;
}
    
let createPopup = function (obj) {
    let template = document.querySelector('template').content.cloneNode(true);
    // adding title and other information
    template.querySelector('h3').innerHTML = obj.offer.title;
    template.querySelector('small').innerHTML = obj.offer.address;
    template.querySelector('.popup__price').innerHTML = obj.offer.price + '&#x20bd;/ночь';
    // check type of building and assign it to popup
    function defineBuldingType(obj){
        if(obj.offer.type === 'flat') {
            return "Квартира"
        } else if (obj.offer.type === 'bungalo') {
            return"Бунгало"
        } else if (obj.offer.type === 'house') {
            return "Дом"
        }
    }
    template.querySelector('h4').innerHTML = defineBuldingType(obj);
    template.querySelector('h4 ~ p').innerHTML = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
    template.querySelector('.popup__checkout').innerHTML = 'Заезд после ' + obj.offer.checkin + ', выезд после ' + obj.offer.checkout;
    template.querySelector('ul ~ p').innerHTML = obj.offer.description;
    template.querySelector('.popup__avatar').src = obj.author.avatar;

    let features = template.querySelector('.popup__features');
    // create features elements for every property in offer.features,
    // add classes for every element
    obj.offer.features.forEach((feature) => {
        let featuresLi = document.createElement('li');
        //features.appendChild(featuresLi);
        featuresLi.classList.add('feature');
        featuresLi.classList.add('feature--'+ feature);
        features.appendChild(featuresLi);
    });

    template.querySelector('.popup').classList.add('hidden');
    return template;
}

function createFunctionalCard(obj) {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(createPin(obj));
    fragment.appendChild(createPopup(obj));

    let pin = fragment.querySelector('.map__pin');
    let popup = fragment.querySelector('.popup');
    let closeButton = popup.querySelector('.popup__close');

    function makePinsUnactive() {
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
        makePinsUnactive();
        popup.classList.remove('hidden');
        pin.classList.add('map__pin--active');
    });
    closeButton.addEventListener('click', function(event){
        popup.classList.add('hidden');
        pin.classList.remove('map__pin--active');
    });

    return fragment;
}

function addCardOnMap (obj) {
    document.querySelector('.map').appendChild(createFunctionalCard(obj));
}
