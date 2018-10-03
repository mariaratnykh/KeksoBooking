// form.js
(function(){
        
    // EventListener which change timeOut value depending on timeIn value
    /*var timeIn = document.querySelector('#timein');
    var timeIns = timeIn.children;
    var timeOut = document.querySelector('#timeout');
    var timeOuts = timeOut.children;

    timeIn.addEventListener('change', function(event) {
        for(var i = 0; i < timeIns.length; i++) {
            timeIns[i].removeAttribute('selected');
            timeOuts[i].removeAttribute('selected');
        }
        var currentVal = this.value;
        for (var t=0; t < timeIns.length; t++) {
            if(timeOuts[t].value === currentVal){
                timeOut.value = '13:00';
            }
        }
    })
    */
    
    // EventListener which doesn't let to set incorrect price based on type of builing
    var price = document.querySelector('#price');
    var type = document.querySelector('#type');
    
    function isCorrectType() {
        if(price.value < 1000) {
            if(type.value === 'flat' || type.value === 'house' || type.value === 'palace'){
                return false;
            } 
            return true;
    
        } else if(price.value < 5000) {
            if(type.value === 'house' || type.value === 'palace') {
                return false;
            }
            return true;
    
        } else if(price.value < 10000) {
            if(type.value === 'palace') {
                return false;
            }
            return true;
    
        } else {
            return true;
        }
    }
    
    price.addEventListener('change', function(event){
        if(!isCorrectType()){
            price.setCustomValidity('Слишком низкая цена для данного типа недвижимости');
        } else {
        price.setCustomValidity('');
        }
    })
    
    type.addEventListener('change', function(event) {
        if(!isCorrectType()) {
            price.setCustomValidity('Слишком низкая цена для данного типа недвижимости');
        } else {
        price.setCustomValidity('');
        }
    })
    
    // EventListener which change capacity value depending on number of rooms
    var rooms = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity');
    rooms.addEventListener('change', function(event){
        for(i=0; i < rooms.children.length; i++){
            capacity.children[i].removeAttribute('selected');
        }
        var currentVal = this.value;
        if(currentVal === '1') {
            capacity.children[2].setAttribute('selected', 'selected');
        } else if(currentVal === '2') {
            capacity.children[1].setAttribute('selected', 'selected');
        } else if(currentVal === '3') {
            capacity.children[0].setAttribute('selected', 'selected');
        } else if(currentVal === '100') {
            capacity.children[3].setAttribute('selected', 'selected');
        }
    })
})();
