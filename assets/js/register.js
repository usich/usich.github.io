let tg = window.Telegram.WebApp;
let initData = tg.initData || '';
let initDataUnsafe = tg.initDataUnsafe || {};

tg.expand();

function main(){

	queryString = window.location.search;
    queryString = queryString.substring(1);
    if (queryString.includes('&')){
        queryParams = queryString.split("&");
    } else {
           queryParams = queryString;
       }  
    params = {};
    for (let i = 0; i < queryParams.length; i++) {
        let pair = queryParams[i].split("=");
        params[pair[0]] = pair[1];
    }

	btnRegister = document.getElementById('btn-register');
	btnRegister.addEventListener('click',function(){
		alert("eeeeesss");
		let personalData = window.getElementById('formCheck-1');
		alert('xxxxxx');
		if (personalData.value == false){
			alert('123');
			return;
		}
		alert('zzzzz');
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

			tg.sendData(JSON.stringify(data));
			tg.close();
		});
}

main();