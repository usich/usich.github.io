let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

let data  = {
    'initData': initData,
    'initDataUnsafe': initDataUnsafe
};

fetch('https://d0e8-91-149-240-106.ngrok-free.app/auth/login', {
  method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
  body: JSON.stringify(data), // Тело запроса в JSON-формате
  headers: {
    // Добавляем необходимые заголовки
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => {
    if (response.ok) {
      // Успешная авторизация
      return response.json();
    } else {
      // Ошибка авторизации
      throw new Error('Authorization failed');
    }
  })
  .catch((err)=>{
    console.log(err);
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

