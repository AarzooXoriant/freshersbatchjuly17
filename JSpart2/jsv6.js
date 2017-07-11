function Empdetails( _empid,_ename,_empsalary,_deptno){
this.empid=_empid;
this.ename=_ename;
this.empsalary=_empsalary;
this.deptno=_deptno;
}

var EmpManager= (function() {
var emp = [];
return{
addEmp: function(Empdetails) {emp.push(Empdetails);},
getEmp: function() { return emp; },
sortemp: function() { 
emp.sort(function(a, b){return a.empid - b.empid});}
}
})();

function create()
	{
	var employee1= new Empdetails(1,"Suraj",1000,101);
	EmpManager.addEmp(employee1);
	var employee2= new Empdetails(6,"Mini",5000,103);
	EmpManager.addEmp(employee2);
	var employee3= new Empdetails(3,"Raju",2000,109);
	EmpManager.addEmp(employee3);
	EmpManager.sortemp();
	console.log(EmpManager.getEmp());
	
	
    }
 
 

	 
	