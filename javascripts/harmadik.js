var myHandler = (function() {
  "use strict";
 var msginput, gomb, outputContainer,  msg;

function onClick() {
        alert( msginput.value.length + ' karakterből áll a szöveg!');
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
	msginput.addEventListener('keyup', onKeyUp);
}
return setUp;
})();

document.addEventListener('DOMContentLoaded', myHandler);
