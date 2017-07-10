var attempt = 3;
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "zoozoo" && password == "zoozoo"){
alert ("Login successfully");
window.location = "js1.html"; 
return false;
}
else{

for(var i=attempt;i>1;attempt--)
{
alert("You have left "+attempt+" attempt;");
break;
}
if( attempt == 0){
window.location = "js1.html"; 
return false;
}
}
}
