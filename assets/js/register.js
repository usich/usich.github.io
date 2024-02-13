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

btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	tg.sendData(JSON.stringify(data));
	tg.close();
});



