var msginput;
var gomb;
var outputContainer;

function onClick() {
        alert( msginput.value.length + ' szóból áll a szöveg!');
}

function setUp() {
	msginput = document.getElementById('msginput');
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);
