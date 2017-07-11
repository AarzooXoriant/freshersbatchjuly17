function count(){
var string=document.getElementById("word").value;
string = string.split(" ").join("");
alert(string.length);
}