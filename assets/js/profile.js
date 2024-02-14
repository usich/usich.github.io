let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};
// alert(JSON.stringify(initData));
if (initData != '' && initDataUnsafe != {}){
    alert( "Правильно!" );
    JsBarcode('#barcode', '1231231231234', {
        lineColor: "#0aa",
        width:4,
        height:60,
        // height: 30,
        displayValue: false
        }); 
}

