export {showSortedCards};
import {addCardOnMap} from './card';

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
            Array.from(addedFeatures).forEach( function (feature) {
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
                    if (getPriceCategory(sortedArrItem) == parameters.price) {
                        sortedArrPrice.push(sortedArrItem)
                    }
                })
                sortedArr = sortedArrPrice;
            }

            if(key == 'features') {
                let sortedArrFeatures = [];
                sortedArr.forEach(function(sortedArrItem) {
                    if(isFeaturesIncluded(sortedArrItem, parameters.features)) {
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

function getPriceCategory(obj) {
    let priceCategory = 0;
    if (obj.offer.price >= 10000 && obj.offer.price <= 50000) {
        priceCategory = 'middle';
    }
    if (obj.offer.price < 10000) {
        priceCategory = 'low';
    }
    if (obj.offer.price > 50000) {
        priceCategory = 'high';
    }
    return priceCategory;
}

function isFeaturesIncluded (obj, features) {
    let radio = true;
    for(let i = 0; i < features.length; i++ ) {
        if(!obj.offer.features.includes(features[i])){
            radio = false;
        }
    }
    return radio;
}