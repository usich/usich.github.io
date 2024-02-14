let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

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
    alert(JSON.stringify(params));
    if (params.hasOwnProperty('chat-id')){
        if (params['chat-id'] != initDataUnsafe.chat.id) {tg.close()};
    } else {
        alert("123");
        tg.close();
    }
    

    // JsBarcode('#barcode', '1231231231234', {
    //     lineColor: "#0aa",
    //     width:4,
    //     height:60,
    //     // height: 30,
    //     displayValue: false
    //     }); 
}

