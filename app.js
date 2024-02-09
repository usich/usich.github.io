let tg = window.Telegram.WebApp;

tg.expand();
document.getElementById("customerName").innerHTML = tg.initDataUnsafe.user.first_name;
