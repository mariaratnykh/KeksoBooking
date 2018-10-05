
// Disable advertisement form 
(function(){
    window.mapDeactivate = function() {
        document.querySelector('.map').classList.add('map--faded')

        var formElements = document.querySelectorAll('.form__element');
        for(i = 0; i < formElements.length; i++) {
            formElements[i].setAttribute('disabled', 'disabled');
        }
    }

    window.createCards = function (data) {
        data.forEach(function(name){
            addCardOnMap(name); 
        })
    }

    function showCards () {
        var pins = document.querySelectorAll('.map__pin--created');
        Array.from(pins).forEach( function (pin) {
            pin.classList.remove('hidden');
        })
    }

    // Activate map and adverisement form after pressing the main button
    window.mapActivate = function() {
        var pinMain = document.querySelector('.map__pin--main');

        function mapPinHandler(evt) {
            getFromServer(createCards, onError);

            var pinMain = document.querySelector('.map__pin--main');
            document.querySelector('.map').classList.remove('map--faded');
            var formElements = document.querySelectorAll('.form__element');

            pinMain.setAttribute('draggable', 'true');

            for(i = 0; i < formElements.length; i++) {
                formElements[i].removeAttribute('disabled');
            };
            document.querySelector('.notice__form').classList.remove('notice__form--disabled');
            pinMain.removeEventListener('mousedown', mapPinHandler);
        }
        
        pinMain.addEventListener('mousedown', mapPinHandler);
    }

})();