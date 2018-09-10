window.addEventListener('load', init);

function init(e)
{
	var fName = document.querySelector('#fname');
	var lName = document.querySelector('#lname');
	var email = document.querySelector('#email');
	var email2 = document.querySelector('#email2');
	var phone = document.querySelector('#number');
	var submit = document.querySelector('#submit');
	var fnError = document.querySelector('#fnError');
	var lnError = document.querySelector('#lnError');
	var emailError = document.querySelector('#emailError')
	var conError = document.querySelector('#conError')
	var pError = document.querySelector('#pError');

	var check = document.querySelector('#firstName');
	var check2 = document.querySelector('#lastName');
	var check3 = document.querySelector('#mail');
	var check4 = document.querySelector('#mail2');
	var check5 = document.querySelector('#phone');

	var form  = document.querySelector("#form");
	var conf = document.querySelector("#confirmation");

	/*var p = document.querySelector('p');
	console.log(p);
	var p2 = document.querySelector('span')
	console.log(p2);
	var p3 = document.querySelector('input'); 
	console.log(p3);*/

	
	
	submit.addEventListener('click', doStuff);

	function doStuff(e)
	{
		if(check.value === "")		//first name check
		{
			fName.style.color = 'red';
			fnError.innerHTML = '*';
			fnError.style.color = 'red';
		}
		else
		{
			fName.style.color = 'black';
			fnError.style.color = 'black';
			fnError.innerHTML = '';
		}

		if(check2.value === "")		//last name check
		{
			lName.style.color = 'red';
			lnError.innerHTML = '*';
			lnError.style.color = 'red';
		}
		else
		{
			lName.style.color = 'black';
			lnError.style.color = 'black';
			lnError.innerHTML = '';
		}

		if(check3.value === "")		//email check
		{
			email.style.color = 'red';
			emailError.innerHTML = '*';
			emailError.style.color = 'red';
		}
		else
		{
			email.style.color = 'black';
			emailError.style.color = 'black';
			emailError.innerHTML = '';
		}

		if(check4.value === "")		//conformation email check
		{
			email2.style.color = 'red';
			conError.innerHTML = '*';
			conError.style.color = 'red';
		}
		else if(check4.value != check3.value)
		{
			email2.style.color = 'red';
			conError.innerHTML = 'Email does not match';
			conError.style.color = 'red';
		}
		else
		{
			email2.style.color = 'black';
			conError.style.color = 'black';
			conError.innerHTML = '';
		}

		if(check5.value === "")		//phone number check
		{
			phone.style.color = 'red';
			pError.innerHTML = '*';
			pError.style.color = 'red';
		}
		else
		{
			phone.style.color = 'black';
			pError.style.color = 'black';
			pError.innerHTML = '';
		}

		form.style.display = "none";	//form goes away
		conf.style.display = "block";	//confirmation displays

		let confdata = document.querySelector("#info");

		confdata.innerHTML = `${check.value}<br> ${check2.value}<br> ${check3.value}<br> ${check5.value}`;


	}
}