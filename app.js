let tg = window.Telegram.WebApp;

tg.expand();
document.getElementById("customerName").innerHTML = tg.initDataUnsafe.user.first_name;

let send = document.getElementById("send");

// tg.sendData("asdasdasdasdasdasdsda");
// tg.close();

send.addEventListener("click", function() {
	// tg.sendData('asdasdasdasdasdasdsda');
	tg.close();
});
 