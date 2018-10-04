
// Disable advertisement form 
(function(){
    window.mapDeactivate = function() {
        document.querySelector('.map').classList.add('map--faded')

        var formElements = document.querySelectorAll('.form__element');
        for(i = 0; i < formElements.length; i++) {
            formElements[i].setAttribute('disabled', 'disabled');
        }
    }

    // Activate map and adverisement form after pressing the main button
    window.mapActivate = function() {
        var pinMain = document.querySelector('.map__pin--main');

        function mapPinHandler(evt) {
            getFromServer(addAllCards, onError);

            var pinMain = document.querySelector('.map__pin--main');
            var pins = document.querySelectorAll('.map__pin--created');
            document.querySelector('.map').classList.remove('map--faded');
            var formElements = document.querySelectorAll('.form__element');

            pinMain.setAttribute('draggable', 'true');
            for( i = 0; i < pins.length; i++) {
                pins[i].classList.remove('hidden');
            }
            for(i = 0; i < formElements.length; i++) {
                formElements[i].removeAttribute('disabled');
            };
            document.querySelector('.notice__form').classList.remove('notice__form--disabled');
            pinMain.removeEventListener('mousedown', mapPinHandler);
        }
        
        pinMain.addEventListener('mousedown', mapPinHandler);
    }

})();