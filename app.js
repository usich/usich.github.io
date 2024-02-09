let tg = window.Telegram.WebApp;

tg.expand();
document.getElementById("customerName").innerHTML = tg.dataUnsefe.user.first_name;
