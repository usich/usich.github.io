let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

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

main();

