(function() {
    //getFromServer(addCardOnMap, 1, onError);
    window.mapDeactivate();
    window.mapActivate();
    getFromServer(showSortedCards, onError);

    
    function deletePins() {
        let pins = document.querySelectorAll('.map__pin--created');
        Array.from(pins).forEach(function(name) {
            name.parentNode.removeChild(name);
        })
    }

    function deletePopups(){
        let popups = document.querySelectorAll('.popup');
        Array.from(popups).forEach(function(name) {
            name.parentNode.removeChild(name);
        })
    }

    window.addAllCards = function (data) {
        data.forEach(function(name){
            addCardOnMap(name); 
        })
    }

    function showSortedCards(data) {
        let mapFilters = document.querySelector('.map__filters');
        let parameters = {
            type: 'any',
            price: 'any',
            rooms: 'any',
            guests: 'any'
        }
        

        mapFilters.addEventListener('change', function(event) {
            let sortedArr = data;
            let parameterChanged = event.target.name.replace('housing-', '');
            parameters[parameterChanged] = event.target.value;
            console.log(parameters);

            deletePins();
            deletePopups();

            for(var key in parameters) {
                if(parameters[key] != 'any') {
                    console.log('kek')
                    sortedArr = sortedArr.filter(function(sortedArrItem) {
                        console.log(sortedArrItem.offer[key]);
                        console.log(parameters[key]);
                        return sortedArrItem.offer[key] == parameters[key];
                    })
                }
            }
            console.log(sortedArr)

            sortedArr.forEach(function(name){
                addCardOnMap(name);
            })

        
        })
    }

})()