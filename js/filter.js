(function() {

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

    function showSortedCards(data) {
        let mapFilters = document.querySelector('.map__filters');
        let parameters = {
            type: 'any',
            price: 'any',
            rooms: 'any',
            guests: 'any',
            features: []
        }

        mapFilters.addEventListener('change', function(event) {
            let sortedArr = data;
            // add chosen by user characteristics in object parameters
            if(event.target.name !== 'features') {
                let parameterChanged = event.target.name.replace('housing-', '');
                parameters[parameterChanged] = event.target.value;

            }
            if(event.target.name == 'features') {
                parameters.features = [];
                let addedFeatures = mapFilters.querySelectorAll('input[type$="checkbox"]:checked');
                addedFeatures.forEach( function (feature) {
                    parameters.features.push(feature.value);
                })
            }
            // delete previous cards from map
            deletePins();
            deletePopups();
            // sort all advertisements based on user choice
            for(var key in parameters) {

                if(parameters[key] != 'any' && key != 'features' && key != 'price') {
                    sortedArr = sortedArr.filter(function(sortedArrItem) {
                        return sortedArrItem.offer[key] == parameters[key];
                    })
                }

                if(key == 'price' && parameters[key] != 'any') {
                    let sortedArrPrice = [];
                    sortedArr.forEach( function (sortedArrItem) {
                        let priceCategory = 0;
                        if (sortedArrItem.offer.price >= 10000 && sortedArrItem.offer.price <= 50000) {
                            priceCategory = 'middle';
                        }
                        if (sortedArrItem.offer.price < 10000) {
                            priceCategory = 'low';
                        }
                        if (sortedArrItem.offer.price > 50000) {
                            priceCategory = 'high';
                        }
                        if (priceCategory == parameters.price) {
                            sortedArrPrice.push(sortedArrItem)
                        }
                    })
                    sortedArr = sortedArrPrice;
                }

                if(key == 'features') {
                    let sortedArrFeatures = [];
                    sortedArr.forEach(function(sortedArrItem) {
                        let radio = true;
                        for(let i = 0; i < parameters.features.length; i++ ) {
                            if(!sortedArrItem.offer.features.includes(parameters.features[i])){
                                radio = false;
                            }
                        }
                        if(radio) {
                            sortedArrFeatures.push(sortedArrItem);
                        }
                    sortedArr = sortedArrFeatures;
                    })
                }
            }
            // add only chosen cards 
            sortedArr.forEach(function(name){
                addCardOnMap(name);
            })
        })
    }

})()