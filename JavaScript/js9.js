function arithfunction()
{
	array=[1,6,3,10,7,8];
var mini =Math.min(1,6,3,10,7,8);
document.write("Minimum number in array: " + mini);
document.write("<br>");
var maxi =Math.max(1,6,3,10,7,8);
document.write("Maximum number in array: " +maxi);
var total=0;
var len=array.length;
for(var i in array)
{
 total = total + array[i];
 }
document.write("<br>");
document.write("Sum of array: "+total);
var avg=total/len;
document.write("<br>");
document.write("Avg of array: "+avg);
 
}