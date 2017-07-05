var formTextarea = document.querySelector( '#form-textarea' );
let formEmailInput = document.querySelector( '#email-address' );
formTextarea.addEventListener( 'keyup', checkValidity );
formTextarea.addEventListener( 'onchange', checkValidity );
formEmailInput.addEventListener( 'onchange', checkValidity );
formEmailInput.addEventListener( 'keyup', checkValidity );


function displayWordCount( e ){
	if ( e.srcElement.id === 'form-textarea' ) {
		let textareaContent = e.srcElement.value;
		let numOfWords = wordCount( textareaContent );
		let numOfChars = charCount( textareaContent );
		wordCountTarget = document.querySelector( '#word-count' );
		charCountTarget = document.querySelector( '#char-count' );
		wordCountTarget.textContent = numOfWords.toString();
		charCountTarget.textContent = numOfChars.toString();
	}
}

function wordCount ( s ) {
	return s.split( /\b\S+\b/g ).length - 1;
}

function charCount ( s ) {
	return s.length;
}


var submitBtn = document.querySelector( 'form .btn-primary' );
submitBtn.addEventListener( 'click', submitFunc );

function submitFunc ( e ) {
	e.preventDefault();
	let formEmailInput = document.querySelector( '#email-address' );
	var formTextarea = document.querySelector( '#form-textarea' );
	let formEmailvalue = formEmailInput.value;
	let formTextareaValue = formTextarea.value;
	let validEmail = isValidEmail( formEmailvalue );
	let validMsg = isValidMsg( formTextareaValue );
	if (!validEmail ) displayAlert( 'email', formEmailInput );
	if ( !validMsg ) displayAlert ( 'message', formTextarea );	
	
	if ( validEmail && validMsg ) {
		formEmailInput.value = '';
		formTextarea.value = '';
		alert(" Your message have been submitted! We are glad to hear from you!");
	}
}

function isValidMsg (m) {
	return ( ( m.length <= 1000 ) && ( m.length > 0 ) );
}


function isValidEmail (email){
	let re = /^[A-Z0-9._+%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi;
	return re.test(email);
}


function checkValidity ( e ) {
	if ( e.target.id === 'email-address' ) {
		if ( isValidEmail( e.target.value ) ) clearAlert ( e );
	}
	if ( e.target.id === 'form-textarea' ) {
		displayWordCount ( e );
		if ( isValidMsg( e.target.value ) ) clearAlert ( e );
	}
}

function clearAlert ( e ) {
	let re = /^\w*-alert$/g;
	if ( re.test(e.target.nextSibling.id)) e.target.parentNode.removeChild(e.target.nextSibling);
	
}

function displayAlert( alertOrigin, alertObj ) {
	let pAlert = document.createElement( 'p' );
	pAlert.id = `${alertOrigin}-alert`;
	pAlert.style.color = 'red';
	pAlert.textContent = `The ${alertOrigin} you have entered is not valid. Please check and try to submit again`;
	alertObj.parentNode.insertBefore( pAlert, alertObj.nextSibling );
}

//alert('hello');
/*var donationCountAlert = document.getElementById('donation-count-alert');
console.log(donationCountAlert);
var btns = document.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++){
	console.log(btns[i]);
}

var navbarSupportedContent = document.getElementById('navbarSupportedContent');

var navbarSupportedContentAnchors = navbarSupportedContent.getElementsByTagName('a');

for (let i = 0; i < navbarSupportedContentAnchors.length; i++) {
	console.log(navbarSupportedContentAnchors[i].textContent);
}*/

/*var donationCountAlert = document.querySelector('#donation-count-alert');
console.log(donationCountAlert);

var btns = document.querySelectorAll('.btn');
btns.forEach(btn => console.log(btn));

var navbarSupportedContentAnchors = navbarSupportedContent.querySelectorAll('#navbarSupportedContent a');

navbarSupportedContentAnchors.forEach(anchor => console.log(anchor.textContent));*/

/*var navbarLinks = document.querySelectorAll('.navbar-nav a');
navbarLinks.forEach(navbarLink => {
	navbarLink.textContent = '-' + navbarLink.textContent + '-'; 
});

var sidebarLinks = document.querySelectorAll('.sidebar-content a');

sidebarLinks.forEach( sidebarLink => {
	console.log(sidebarLink);
	let innText = sidebarLink.textContent;
	sidebarLink.innerHTML = '';
	let italicTag = document.createElement('i');
	let itagTextNode = document.createTextNode( innText );
	italicTag.appendChild( itagTextNode );
	sidebarLink.appendChild(italicTag);

	// sidebarLink.innerHTML = '<i>' +sidebarLink.textContent + "</i>"
}); */

/*
var readMoreLinks = document.querySelectorAll('.article-read-more a');
readMoreLinks.forEach(readMoreLink => readMoreLink.style.color = 'green');
readMoreLinks.forEach(readMoreLink => readMoreLink.addEventListener('click', consoleLinkText));

function consoleLinkText (e) {
	e.preventDefault();
	console.log(e.clientX + ', ' + e.clientY);
	console.log(e.target.textContent);
}


var donateBtn = document.querySelector('.navbar a.btn-primary');
donateBtn.addEventListener('click', incrementDonated);

function incrementDonated (e) {
	var donationCountAlert = document.querySelector('#donation-count-alert');
	var donationCount = Number(donationCountAlert.textContent);
	donationCount++;	
	donationCountAlert.textContent = donationCount.toString();
}

var jumbotron = document.querySelector('.jumbotron');
jumbotron.addEventListener('click', jumbotronClick);

function jumbotronClick (e) {
	// console.log(e);
	e.stopPropagation();
}

document.body.addEventListener('click', bodyClick);

function bodyClick (e) {
	console.log(e.target.textContent);
}
*/






