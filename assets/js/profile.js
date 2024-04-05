let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

fetch('https://eb53-91-149-240-106.ngrok-free.app/auth/login', {
  method: 'POST'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(initData),
})
  .then(response => {
    if (response.ok) {
      // Успешная авторизация
      return response.json();
    } else {
      // Ошибка авторизации
      throw new Error('Authorization failed');
    }
  });


function main(){
    if (initData != '' && initDataUnsafe != {}){

        queryString = window.location.search;
        queryString = queryString.substring(1);
        if (queryString.includes('&')){
            queryParams = queryString.split("&");
        } else {
               queryParams = queryString;
           }  
        params = {};
        for (let i = 0; i < queryParams.length; i++) {
            let pair = queryParams[i].split("=");
            params[pair[0]] = pair[1];
        }
        if (params.hasOwnProperty('user_id')){
            userId = initDataUnsafe.user.id;
            userId = userId.toString();
            
            if (params['user_id'] != userId) {
                
                tg.close();
                return;
            }
        } else {
            tg.close();
            return;
        }

        if (!params.hasOwnProperty('barcode') || params['barcode'].length != 13){
            
            tg.close();
            return;
        }

        JsBarcode('#barcode', params['barcode'], {
            lineColor: "#0aa",
            width:4,
            height:160,
            
            displayValue: false
            }); 
    }
}

// main();

