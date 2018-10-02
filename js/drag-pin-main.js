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
