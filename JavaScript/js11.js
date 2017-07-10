function vow(){
    array=[];
	var sent=document.getElementById("sentence").value;
   array.push(sent.split());
   document.write(array);
   var count1=0;
   //count2=0,count3=0,count4=0,count5=0;
for(var i in array)
{	
		if( array[i]=="a"|array[i] == "A")
		{
			var count1=count1+1;
		}
		else if( array[i] == "e"| array[i] == "E" )
		{
			var count2=count2+1;
		}
		else if( array[i] =="i" | array[i] =="I")
		{var count3=count3+1;
		}
		else if( array[i] == "o"|array[i] == "O")
		{
			var count4=count4+1;
		}
		else if(array[i] == "u"| array[i] == "U")
		{
			var count5=count5+1;
		}
	}
		
	document.write("<br>");
	document.write(count1);
	document.write("<br>");
	document.write(count2);
	document.write("<br>");
	document.write(count3);
	document.write("<br>");
	document.write(count4);
	document.write("<br>");
	document.write(count5);
	document.write("<br>");

    }
