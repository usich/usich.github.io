tg = window.Telegram.webApp;
if (tg.initData == ''){
   JsBarcode('#barcode', '1231231231234', {
    lineColor: "#0aa",
    width:4,
    height:60,
    // height: 30,
    displayValue: false
    }); 
};

