tg = window.Telegram.webApp;
initDataUnsafe = tg.initDataUnsafe || {};
alert(JSON.stringify(initDataUnsafe));
if (tg.initData == ''){
    alert( "Правильно!" );
    JsBarcode('#barcode', '1231231231234', {
        lineColor: "#0aa",
        width:4,
        height:60,
        // height: 30,
        displayValue: false
        }); 
}

