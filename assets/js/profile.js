let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
// alert(JSON.stringify(initData));
if (initData != ''){
    alert( "Правильно!" );
    JsBarcode('#barcode', '1231231231234', {
        lineColor: "#0aa",
        width:4,
        height:60,
        // height: 30,
        displayValue: false
        }); 
}

