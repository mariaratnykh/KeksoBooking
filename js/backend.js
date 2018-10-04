(function(){
    window.getFromServer = function(onLoad, onError) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        window.data;
        let error;

        xhr.addEventListener('readystatechange', function() { 
            if (xhr.readyState != 4) return; 

            switch (xhr.status){
                case 200 :
                    data = xhr.response;
                    break;
                default:
                    error = xhr.status + ': ' + xhr.statusText;
                    onError(error);
                    return;
                    
            }

            onLoad(data);
            return;
            
        });

        xhr.open('GET', 'https://js.dump.academy/keksobooking/data', true);
        xhr.send();
    }

    window.onError = function(errInf) {
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

})()