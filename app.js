let tg = window.Telegram.WebApp;

tg.expand();
document.getElementById("customerName").innerHTML = tg.initDataUnsafe.user.first_name;

let send = document.getElementById("send");

send.addEventListener("click", () => {
	tg.sendData('asdasdasdasdasdasdsda');
	tg.close();
});


