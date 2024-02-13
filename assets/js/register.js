let tg = window.Telegram.webApp;

let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let middleName = document.getElementById('middle_name');

tg.expand();

let data = {
	firstName: firstName,
	lastName: lastName,
	middleName: middleName
}
tg.sendData(JSON.stringify(data));
