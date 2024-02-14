tg = window.Telegram.webApp;
alert( tg.initDataUnsafe.user.first_name );
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

