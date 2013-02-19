function counter_func(msginputId,ccounter_inputId)
{	
	var gomb;
	var outputContainer;
       var msglen = msginput.value.length;
}      
function onClick() {
        alert( ++msglen + ' szóból áll a szöveg!');
}
        
function setUp() {
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);
