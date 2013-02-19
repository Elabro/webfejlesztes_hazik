var myHandler = {
 msginput: null,
 gomb: null,
 outputContainer: null,
 msg: null,

onClick: function() {
        alert( msginput.value.length + ' szóból áll a szöveg!');
},

onKeyUp: function (){
  msg.value = msginput.value.length;

},

setUp: function () {
	myHandler.msg = document.getElementById('msg');
	myHandler.msginput = document.getElementById('msginput');
        	myHandler.gomb = document.getElementById('gomb');
	myHandler.outputContainer = document.getElementById('output');
	myHandler.gomb.addEventListener('click', onClick);
	myHandler.msginput.addEventListener('keyup', onKeyUp);

}
}
document.addEventListener('DOMContentLoaded', myHandler.setUp);
