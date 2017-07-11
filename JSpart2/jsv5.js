function Bankdetails( _account_name,_account_bal,_account_number){
this.account_name=_account_name;
this.account_bal=_account_bal;
this.account_number=_account_number;
}
	Bankdetails.prototype.withdraw= function(amount)
	{
		this.account_bal=this.account_bal-amount;
		document.write(this.account_bal);
	};
	
	Bankdetails.prototype.deposit= function(amount)
	{
		this.account_bal=this.account_bal+amount;
		document.write(this.account_bal);
	};
	Bankdetails.prototype.getname= function()
	{
		return this.account_name;
	};
	Bankdetails.prototype.getbal= function()
	{
		return this.account_bal;
	};
	Bankdetails.prototype.getnumber= function()
	{
		return this.account_number;
	};

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
 
 

	 
	