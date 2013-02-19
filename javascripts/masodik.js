var myHandler = {
 msginput: null,
 gomb: null,
 outputContainer: null,
 msg: null,

onClick: function() {
        alert( myHandler.msginput.value.length + ' karakterből áll a szöveg!');
},

onKeyUp: function (){
  myHandler.msg.value = myHandler.msginput.value.length;

},

setUp: function () {
	myHandler.msg = document.getElementById('msg');
	myHandler.msginput = document.getElementById('msginput');
        	myHandler.gomb = document.getElementById('gomb');
	myHandler.outputContainer = document.getElementById('output');
	myHandler.gomb.addEventListener('click', myHandler.onClick);
	myHandler.msginput.addEventListener('keyup', myHandler.onKeyUp);

}
}
document.addEventListener('DOMContentLoaded', myHandler.setUp);
