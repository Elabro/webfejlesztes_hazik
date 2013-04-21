(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));

// Init the SDK upon load
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'FACEBOOK_APP_ID', // App ID
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // listen for and handle auth.statusChange events
  FB.Event.subscribe('auth.statusChange', function(response) {
    if (response.authResponse) {
      // user has auth'd your app and is logged into Facebook
      FB.api('/me', {fields:'name,first_name,last_name'}, function(me) {
        if (me.name) {
            $('#header').html(me.first_name + "'s Friends");
            $('#fb-logout').attr('style', 'display:block;');
            $('#fb-login').hide();
            $('h2').hide();

            console.log("user logged in: "+me.name);
        }
      });
      
      // try out the API now that the user has been authenticated
      FB.api('/me/friends', {fields: 'name,picture'}, function(friends){
        if (friends) {
            var output =''
              , picture = ''
              , name = '';

            for(var i=0; i<friends.data.length;i++) {
                picture = friends.data[i].picture.data.url;
                name = friends.data[i].name;
                output += '<tr><td><img src="'+picture+'"</td><td><strong>'+name+'</strong></td></tr>';
            }
            
            $('#friends').html(output);
        }
      });
      
    } else {
      // user has not auth'd your app, or is not logged into Facebook
      $('#header').html("Couldn't get permissions from user");
    }
  });
  
      // respond to clicks on the login and logout links
  $('#fb-login').click(function(){
    FB.login();
  });
  $('#fb-logout').click(function(){
    FB.logout(function(result) {
      if(result) {
        $('#header').html('Get Friends on Facebook');
        $('#friends').html('');
        $('#fb-login').attr("style", 'display:block');
        $('#fb-logout').attr("style", 'display:none');
      }
    });
  }); 
};
