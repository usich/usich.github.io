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
        alert(JSON.stringify(initDataUnsafe));
        alert(params['user-id']);
        if (params.hasOwnProperty('user-id')){
            userId = initDataUnsafe.user.id;
            userId = userId.toString();
            alert(`${userId}: ${userId.length}. #### ${params['user-id']}: ${params['user-id'].length}`);
            if (params['user-id'] != userId) {

                tg.close()
                return;
            }
        } else {
            alert("123");
            tg.close();
            return;
        }
        

        // JsBarcode('#barcode', '1231231231234', {
        //     lineColor: "#0aa",
        //     width:4,
        //     height:60,
        //     // height: 30,
        //     displayValue: false
        //     }); 
    }
}

main();

