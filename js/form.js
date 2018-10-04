// form.js
(function(){
    
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

})();
