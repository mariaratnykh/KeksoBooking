
export {makeMainPinDraggable};

const MAP_ZONE = {
    TOP_MIN: 140,
    TOP_MAX: 540,
    LEFT_MIN: 50,
    LEFT_MAX: 1100
}

function makeMainPinDraggable() {
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

        // PIN_SHIFT USAGE IS NECESSARY FOR CLEAR INDICATION OF ADDRESS BY SHARP CORNER OF PIN
        let pinMainTop = +pinMain.offsetTop + shift.top ;
        if(pinMainTop < MAP_ZONE.TOP_MIN) {
            pinMainTop = MAP_ZONE.TOP_MIN;
        }
        if(pinMainTop > MAP_ZONE.TOP_MAX) {
            pinMainTop = MAP_ZONE.TOP_MAX;
        }

        let pinMainLeft = +pinMain.offsetLeft + shift.left;
        if(pinMainLeft < MAP_ZONE.LEFT_MIN) {
            pinMainLeft = MAP_ZONE.LEFT_MIN;
        }
        if(pinMainLeft > MAP_ZONE.LEFT_MAX) {
            pinMainLeft = MAP_ZONE.LEFT_MAX;
        }

        pinMain.style.left = pinMainLeft + 'px';
        pinMain.style.top = pinMainTop + 'px';

        pinMainAddress.value = 'x: ' + pinMainLeft + ', y: ' + pinMainTop;
    });
}
