let btncalllogin = document.getElementById('btnlogininstead');
let btncallregistration = document.getElementById('btncreateaccount');
let loginform = document.querySelector('.login');
let registrationform = document.querySelector('.registration');

btncalllogin.addEventListener('click', () =>{
	
	loginform.style.display = "block";
	registrationform.style.display = "none";
})
btncallregistration.addEventListener('click', () =>{
	loginform.style.display = "none";
	registrationform.style.display = "block";
})
