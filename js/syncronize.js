export {synchronizeRelatedFormFields};

function synchronizeRelatedFormFields () {
    var syncValues = function(element, selection) {
        element.value = selection;
    };

    let synchronizeFields = function (fieldMain, fieldDependent, paramsMain, paramsDependent, syncValues) {
        fieldMain.addEventListener('change', function(evt) {
            for( let i = 0; i < paramsMain.length; i++ ) {
                if (fieldMain.value === paramsMain[i]){
                    syncValues(fieldDependent, paramsDependent[i]);
                }
            }
        })
    }

    let checkinTime = document.querySelector('#timein');
    let checkoutTime = document.querySelector('#timeout');
    synchronizeFields(checkinTime, checkoutTime, ['12:00', '13:00', '14:00'], ['12:00', '13:00', '14:00'], syncValues);

    let rooms = document.querySelector('#room_number');
    let capacity = document.querySelector('#capacity');
    synchronizeFields(rooms, capacity, ['1','2','3','100'], ['1','2','3','0'], syncValues);

}