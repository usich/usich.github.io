let tg = window.Telegram.WebApp;
tg.expand();

// alert(firstName)
btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click',function(){
	let firstName = document.getElementById('firstName');
	let lastName = document.getElementById('lastName');
	let middleName = document.getElementById('middleName');



	
	let data = {
		'asd': '1211212',
		'firstName': firstName.value,
		'lastName': lastName.value,
		'middleName': middleName.value
	};

		tg.sendData(JSON.stringify(data));
		tg.close();
	});


