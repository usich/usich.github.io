tg = window.Telegram.WebApp;

	
queryString = window.location.search;
queryString = queryString.substring(1);
queryParams = queryString.split("&");
params = {};
for (var i = 0; i < queryParams.length; i++) {
    var pair = queryParams[i].split("=");
    params[pair[0]] = pair[1];
}


document.getElementById("profile-name").innerHTML = JSON.stringify(params);

JsBarcode('#barcode', params['barcode'], {
	format: "EAN13",
	width: 3
});
// JsBarcode('#barcode', '9781022540897', {
// 	format: "EAN13",
// 	width: 3
// });