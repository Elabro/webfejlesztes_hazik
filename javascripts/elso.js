var msginput;
var gomb;
var outputContainer;
var msg;
function onClick() {
        alert( msginput.value.length + ' szóból áll a szöveg!');
}

function onKeyUp(){
	msg.value = msginput.value.length;
	
}

function setUp() {
	msg = document.getElementById('msg');
	msginput = document.getElementById('msginput');
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
	
}

document.addEventListener('DOMContentLoaded', setUp);
