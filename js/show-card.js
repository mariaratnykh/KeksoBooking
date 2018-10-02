window.showCard = function(card) {
    addEvtClick(card);

    // Fucntion that makes pin inactive (if it is) and hides it's popup
    function makePinUnactive() {
        for(var j = 0; j < pins.length; j++) {
            if(pins[j].classList.contains('map__pin--active')) {
                pins[j].classList.remove('map__pin--active');
                if(!popups[j].classList.contains('hidden')){
                    popups[j].classList.add('hidden');
                }
            }
        }
    }
    // Functions for EventListener that opens popups
    function addEvtClick (pin){
        pin.addEventListener('click', function(event) {
            makePinUnactive();
            popups[i].classList.remove('hidden');
            pins[i].classList.add('map__pin--active');
        });
        closeButtons[i].addEventListener('click', function(event){
            popups[i].classList.add('hidden');
            pins[i].classList.remove('map__pin--active');
        });
    }
}
