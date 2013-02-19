function ccounter_func(msginputId,ccounter_inputId)
{
        var msginput = document.getElementById(msginputId);
        var ccounter_input = document.getElementById(ccounter_inputId);
        var msglen = msginput.value.length;
 
        ccounter_input.value = (msglen > 0) ? max - msglen : max;
 
        if(msglen > max) {
                alert("Üzenet max hossza: "+max);
                msginput.value = msginput.value.substring(0,max);
                ccounter_input.value=0;
        }
        
}
