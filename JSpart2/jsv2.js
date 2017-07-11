
var Bankdetails =function(account_name,account_bal,account_number){
this.account_name=account_name;
this.account_bal=account_bal;
this.account_number=account_number;
	this.withdraw= function(amount)
	{
		this.account_bal=this.account_bal-amount;
		document.write(this.account_bal);
	
	};
	
	this.deposit= function(amount)
	{
		this.account_bal=this.account_bal+amount;
		document.write(this.account_bal);
	};
}


function create()
	{
	var bank= new Bankdetails("zoo",2000,101);
	document.write("<br>");
	bank.withdraw(1000);
	document.write("<br>");
	bank.deposit(100);
	document.write("<br>");
	document.write("Balance",bank.account_bal);
	
    }
 
 

	 
	