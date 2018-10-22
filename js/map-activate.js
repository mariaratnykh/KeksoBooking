// Disable advertisement form 
import {getFromServer, onError} from './backend';
import {addCardOnMap} from './card';
export {deactivateMap, activateMapAfterClick};

let map = document.querySelector('.map');
let formElements = Array.from(document.querySelectorAll('.form__element'));

function deactivateMap() {
    map.classList.add('map--faded');
    formElements.forEach(function(item) {
        item.setAttribute('disabled', 'disabled');
    })
}

// Activate map and adverisement form after pressing the main button
function activateMapAfterClick() {
    let pinMain = document.querySelector('.map__pin--main');
    pinMain.addEventListener('mousedown', mapPinHandler);

    function mapPinHandler(evt) {
        getFromServer(addAllCardsOnMap, onError);
        showCards();
        map.classList.remove('map--faded');

        let pinMain = document.querySelector('.map__pin--main');
        pinMain.setAttribute('draggable', 'true');
        formElements.forEach(function(item) {
            item.removeAttribute('disabled');
        })
        document.querySelector('.notice__form').classList.remove('notice__form--disabled');

        pinMain.removeEventListener('mousedown', mapPinHandler);
    }
}

function addAllCardsOnMap (data) {
    data.forEach(function(name){
        addCardOnMap(name); 
    })
}
    
function showCards () {
    let pins = document.querySelectorAll('.map__pin--created');
    Array.from(pins).forEach( function (pin) {
        pin.classList.remove('hidden');
    })
}