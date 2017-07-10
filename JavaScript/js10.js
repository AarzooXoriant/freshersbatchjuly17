function sortinglist()
{
	array=[1,6,3,10,7,8];
	var text=document.getElementById("textboxsort").value;
switch (text) {
    case "asc":
         array.sort(function(a, b){return a - b});
		document.getElementById("mydiv").innerHTML = array;
		break;
    case "dsc":
        array.sort(function(a, b){return b - a});
		document.getElementById("mydiv").innerHTML = array;
        break;
		
    default:
        alert("Invalid Choice");
        break;
}	
}