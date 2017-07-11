function palindrome(){
var string=document.getElementById("word").value;
var revstring="";
var len=string.length;
for(var i=len-1;i>=0;--i)
{
revstring +=string.charAt(i);
}
 
alert(revstring);
var areEqual = string.toUpperCase() === revstring.toUpperCase();
if(areEqual){
alert("The string is Palindrome");
}
else{
alert("Not Palindrome");
}
}