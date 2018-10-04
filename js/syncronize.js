(function(){

    var checkinTime = document.querySelector('#timein');
    var checkoutTime = document.querySelector('#timeout');
    var syncValues = function(element, selection) {
        element.value = selection;
    };

    window.synchronizeFields = function (fieldMain, fieldDependent, paramsMain, paramsDependent, syncValues) {
        fieldMain.addEventListener('change', function(evt) {
            for( let i = 0; i < paramsMain.length; i++ ) {
                if (fieldMain.value === paramsMain[i]){
                    syncValues(fieldDependent, paramsDependent[i]);
                }
            }
        })
    }

    window.synchronizeFields(checkinTime, checkoutTime, ['12:00', '13:00', '14:00'], ['12:00', '13:00', '14:00'], syncValues);

    var rooms = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity');

    window.synchronizeFields(rooms, capacity, ['1','2','3','100'], ['1','2','3','0'], syncValues);

})