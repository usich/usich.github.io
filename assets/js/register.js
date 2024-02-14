let tg = window.Telegram.WebApp;

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let middleName = document.getElementById('middleName');

tg.expand();

let data = {
	firstName: firstName.value,
	lastName: lastName.value,
	middleName: middleName.value
};


btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	tg.sendData(JSON.stringify(data));
	tg.close();
});


