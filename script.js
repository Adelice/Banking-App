$(document).ready(function(){

	var checking = 100;
	var saving = 200;
	var total = checking + saving;

	$(".checking_amount").text(checking);
	$(".saving_amount").text(saving);

  $("#button_checking_deposit").on("click", checking_deposit);

	$("#button_saving_deposit").on("click", savings_deposit); 
	
	$("#button_saving_withdrawl").on("click", savings_withdrawl);
	
	$("#button_checking_withdrawl").on("click", checking_withdrawl);

	function checking_deposit(event){
		var amount_to_deposit = $(".input_checking").val();
		checking += parseInt(amount_to_deposit);
		total = checking + saving;
		$(".checking_amount").text(checking);
	  event.preventDefault();
	};


	function checking_withdrawl(event){
		var amount_to_withdraw = $(".input_checking").val();
		if (amount_to_withdraw < total) {
			if (amount_to_withdraw < checking) {
				checking -= parseInt(amount_to_withdraw)
				total = checking + saving }
			else {
				alert("insufficient funds in checking. removing from saving.")
				total -= parseInt(amount_to_withdraw)
				checking = 0
				saving = total }
		$(".checking_amount").text(checking);
		$(".saving_amount").text(saving);
		} else {
			alert("insufficient funds in checking AND savings combined")
		}
		event.preventDefault();
	};

	function savings_deposit(event){
		var amount_to_deposit = $(".input_saving").val();
		saving += parseInt(amount_to_deposit);
		total = checking + saving;
		$(".saving_amount").text(saving);
		event.preventDefault();
	};

	function savings_withdrawl(event){
		var amount_to_withdraw = $(".input_saving").val();
		if (amount_to_withdraw < total) {
			if (amount_to_withdraw < saving) {
			  saving -= parseInt(amount_to_withdraw)
			  total = checking + saving }
			else {
				alert("insufficient funds in savings. removing from checking.")
				total -= parseInt(amount_to_withdraw)
				saving = 0
				checking = total }
	  	$(".saving_amount").text(saving);
	  	$(".checking_amount").text(checking);
		} else {
			alert("insufficient funds in checking AND savings combined")
		}
		event.preventDefault();
	};
});