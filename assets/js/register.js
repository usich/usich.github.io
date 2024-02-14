let tg = window.Telegram.WebApp;


tg.expand();


btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let middleName = document.getElementById('middleName');
	let email = document.getElementById('email');

	let data = {
		'firstName': firstName.value,
		'lastName': lastName.value,
		'middleName': middleName.value,
		'email': email.value
	};

		tg.sendData(JSON.stringify(data));
		tg.close();
	});


