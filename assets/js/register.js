let tgbot = window.Telegram.WebApp;
let initData = tgbot.initData || '';
let initDataUnsafe = tgbot.initDataUnsafe || {};

tgbot.expand();

function main(){

	queryString = window.location.search;
    queryString = queryString.substring(1);
    params = {};

    if (queryString.includes('&')){
        queryParams = queryString.split("&");
        for (let i = 0; i < queryParams.length; i++) {
        	let pair = queryParams[i].split("=");
        	params[pair[0]] = pair[1];
    	}
    } else {
    	let pair = queryString.split("=");
        params[pair[0]] = pair[1];
       	
       } 
	btnRegister = document.getElementById('btn-register');
	btnRegister.addEventListener('click',function(){
		let personalData = document.getElementById('formCheck-1');
		if (personalData.value == false){
			return;
		}
		let firstName = document.getElementById('firstName');
		let lastName = document.getElementById('lastName');
		let middleName = document.getElementById('middleName');
		let email = document.getElementById('email');

		let data = {
			'firstName': firstName.value,
			'lastName': lastName.value,
			'middleName': middleName.value,
			'email': email.value,
			'phone_number': params['phone_number']
		};

			tgbot.sendData(JSON.stringify(data));
			tgbot.close();
		});
}

main();