var ca=0;
var ce=0;
var ci=0;
var co=0;
var cu=0;

function vowelcounted(){
 var receivedstring=document.getElementById("sentence").value;
 var convertstring=receivedstring.split("");
 
 for(var i in convertstring)
 {
	 if(convertstring[i]=='a')
	 {
		 ca++;
	 }
	 if(convertstring[i]=='e')
	 {
		 ce++;
	 }
	 if(convertstring[i]=='i')
	 {
		 ci++;
	 }
	 if(convertstring[i]=='o')
	 {
		 co++;
	 }
	 if(convertstring[i]=='u')
	 {
		 cu++;
	 }
  }
 document.write("<br>");
 document.write("Count of A: "+ca);
 document.write("<br>");
 document.write("Count of E: "+ce);
 document.write("<br>");
 document.write("Count of I: "+ci);
 document.write("<br>");
 document.write("Count of O: "+co);
 document.write("<br>");
 document.write("Count of U: "+cu);
}