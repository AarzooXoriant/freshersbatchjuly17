
var bankdetails ={
account_name:"unknown",
account_bal:0,
account_number:0,
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
	var bankdetailsobj=Object.create(bankdetails);
	bankdetailsobj.account_name="zoo";
	bankdetailsobj.account_bal=2000;
	bankdetailsobj.account_number=101;
	document.write("<br>");
	bankdetailsobj.withdraw(1000);
	document.write("<br>");
	bankdetailsobj.deposit(100);
	document.write("<br>");
	document.write("Balance",bankdetailsobj.account_bal);
	
    }
 
 

	 
	