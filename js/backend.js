(function(){
    function getFromServer(onLoad, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        let data;
        let error;

        xhr.addEventListener('readystatechange', function() { 
            if (xhr.readyState != 4) return; 

            switch (xhr.status){
                case 200 :
                    data = xhr.response;
                    break;
                default:
                    error = xhr.status + ': ' + xhr.statusText;
            }

            if(typeof onLoad == 'function') {
                onLoad(data[0]);
                return;
            };
            if(typeof onError == 'function') {
                onError(error);
                return;
            }
        });

        xhr.open('GET', 'https://js.dump.academy/keksobooking/data', true);
        xhr.send();
    }

    function cons(inf) {
        console.log(inf[0]);
        console.log(inf[2]);
    }
    function errCons(errInf) {
        console.log(errInf)
    }

    getFromServer(createPin, errCons);
    //onLoad(data); // => createPin(data)
    //onError(error);
    
})()