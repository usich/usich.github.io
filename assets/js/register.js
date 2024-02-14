let tg = window.Telegram.WebApp;

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let middleName = document.getElementById('middleName');

tg.expand();

let data = {
	'asd': '1211212',
	'firstName': firstName[0].value,
	'lastName': lastName[0].value,
	'middleName': middleName[0].value
};

// alert(firstName)
btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	tg.sendData(JSON.stringify(data));
	tg.close();
});


