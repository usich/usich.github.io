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

params = tg.initDataUnsafe.start_param;

tg.answerWebAppQuery(tg.initDataUnsafe.query_id, JSON.stringify(params));

btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	tg.sendData(JSON.stringify(data));
	tg.close();
});



