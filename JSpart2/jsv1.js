
var bankdetails ={
account_name:"zoo",
account_bal:2000,
account_number:101,
	withdraw: function(amount)
	{
		this.account_bal=this.account_bal-amount;
		document.write(this.account_bal);
	
	},
	
	deposit: function(amount)
	{
		this.account_bal=this.account_bal+amount;
		document.write(this.account_bal);
	}
};


function create()
	{
	document.write("<br>");
	bankdetails.withdraw(1000);
	document.write("<br>");
	bankdetails.deposit(100);
	document.write("<br>");
	document.write("Balance",bankdetails.account_bal);
	
    }
 
 

	 
	