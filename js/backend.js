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
                    console.log(error)
                    onError(error);
                    return;
                    
            }

            if(typeof onLoad == 'function') {
                for(let i = 0; i < data.length; i++) {
                    onLoad(data[i]);
                }
                window.mapActivate();
                return;
            };
            
        });

        xhr.open('GET', 'https://js.dump.academy/keksobooking/data', true);
        xhr.send();
    }

    function onError(errInf) {
        let errorContainer = document.createElement('div');
        errorContainer.style.cssText = 'background: red; \
            width: 100%; \
            heigth: 50px; \
            position: absolute; \
            top: 0; \
            color: white; \
            text-align: center';
        errorContainer.textContent = errInf + ' Ошибка загрузки страницы';
        document.querySelector('main').appendChild(errorContainer);
    }

    getFromServer(window.addCardOnMap, onError);
})()