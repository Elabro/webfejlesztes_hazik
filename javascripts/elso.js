function ccounter_func(msginputId,ccounter_inputId)
{
        var msginput = document.getElementById(msginputId);
        var ccounter_input = document.getElementById(ccounter_inputId);
        var msglen = msginput.value.length;
 
        ccounter_input.value = msglen;
 
        if(msglen > 0 ) {
                alert("Üzenet max hossza: "+msglen);
                msginput.value = msginput.value.substring(0,msglen);
                ccounter_input.value=0;
        }
        
}
