var msginput;
var gomb;
var outputContainer;
var msglen = msginput.value.length;

function onClick() {
        alert( msglen + ' szóból áll a szöveg!');
}

function setUp() {
	msginput = document.getElementById('msginput');
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);
