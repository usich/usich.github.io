// tg = window.Telegram.WebApp;

JsBarcode('#barcode', '9781022540897', {
	format: "EAN13",
	width: 3
});



tg = window.Telegram.WebApp;
	
params = tg.initData;


// params = tg.initDataUnsafe;



// tg.showAlert("2323423");
document.getElementById("profile-name").innerHTML = JSON.stringify(params);

// Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

// Parameter	Type	Required	Description
// web_app_query_id	String	Yes	Unique identifier for the query to be answered
// result


{"query_id":"AAFOPZgpAAAAAE49mCmt8kL3","user":{"id":697843022,"first_name":"Илья","last_name":"","username":"ilya_usichenko","language_code":"ru","allows_write_to_pm":true},"auth_date":"1707867139","hash":"13ebfd0b4b39a072f8db8f0a5823977aedbae62d69169aa4de4bd76404cf3003"}

