let tg = window.Telegram.WebApp;

let firstName = document.getElementById('first_name');
let lastName = document.getElementById('last_name');
let middleName = document.getElementById('middle_name');

tg.expand();

let data = {
	firstName: firstName,
	lastName: lastName,
	middleName: middleName
}

params = tg.initDataUnsafe.user;

tg.showAlert(typeof params);

btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	tg.sendData(JSON.stringify(data));
	tg.close();
});



