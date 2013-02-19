function counter_func(msginputId,ccounter_inputId)
{
        var msginput = document.getElementById(msginputId);
        var counter_input = document.getElementById(counter_inputId);
        var msglen = msginput.value.length;
 
        counter_input.value = msglen;
 
}      
function onClick(ev) {
        createNewOutput( ++msglen + ' szóból áll a szöveg!');
}
        
function setUp() {
        gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);
