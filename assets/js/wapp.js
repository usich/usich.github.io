// tg = window.Telegram.WebApp;

JsBarcode('#barcode', '9781022540897', {
	format: "EAN13",
	width: 3
});

tg = window.Telegram.WebApp;
	
// params = tg.initDataUnsafe.start_param;

tg.showAlert("JSON.stringify(params)");
params = tg.initDataUnsafe.user;

tg.showAlert(typeof params);

// Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

// Parameter	Type	Required	Description
// web_app_query_id	String	Yes	Unique identifier for the query to be answered
// result