var msginput;
var gomb;
var outputContainer;
var msg;
function onClick() {
        alert( msginput.value.length + ' szóból áll a szöveg!');
}

function setUp() {
	msg = document.getElementById('msg');
	msginput = document.getElementById('msginput');
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
	msg.value = msginput.value.length;
}

document.addEventListener('DOMContentLoaded', setUp);
