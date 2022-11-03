
var $ = function (id) {
	return document.getElementById(id);
  };
  
  // function called processEntry
  function processEntry() {
	// get user's inputted value
	var valueOfIncome = Number(document.querySelector("#income").value);
	// move focus to first text box
	document.getElementById("income").focus();
  
	// if number is not valid, show error
	if (Number.isNaN(valueOfIncome) || valueOfIncome <= 0) {
	  alert("Number entered is invalid!");
	  return;
	}
	// pass tax value to calculateTax function and show in second text box
	document.querySelector("#tax").value = calculateTax(valueOfIncome);
  
	// function to calculate taxes
	function calculateTax(valueOfIncome) {
	  var valueOfTaxAmt = 0;
  
	  // convert income to integer
	  valOfIncomeInInteger = parseInt(valueOfIncome);
  
	  // use if-else statements to calculate tax amount
	  if (valOfIncomeInInteger > 0 && valOfIncomeInInteger <= 9875) {
		valueOfTaxAmt = valOfIncomeInInteger * 0.10;
	  } else if (valOfIncomeInInteger > 9875 && valOfIncomeInInteger <= 40125) {
		valueOfTaxAmt = (valOfIncomeInInteger - 9875) * 0.12 + 987.50;
	  } else if (valOfIncomeInInteger > 40125 && valOfIncomeInInteger <= 85525) {
		valueOfTaxAmt = (valOfIncomeInInteger - 40125) * 0.22 + 4617.50;
	  } else if (valOfIncomeInInteger > 85525 && valOfIncomeInInteger <= 163300) {
		valueOfTaxAmt = (valOfIncomeInInteger - 85525) * 0.24 + 14605.50;
	  } else if (valOfIncomeInInteger > 163300 && valOfIncomeInInteger <= 207350) {
		valueOfTaxAmt = (valOfIncomeInInteger - 163300) * 0.32 + 33271.50;
	  } else if (valOfIncomeInInteger > 207350 && valOfIncomeInInteger <= 518400) {
		valueOfTaxAmt = (valOfIncomeInInteger - 207350) * 0.35 + 47367.50;
	  } else if (valOfIncomeInInteger > 518400) {
		valueOfTaxAmt = (valOfIncomeInInteger - 518400) * 0.37 + 156235.00;
	  }
	  // return tax fixed to 2 decimals
	  return valueOfTaxAmt.toFixed(2);
	}
  }
  
  // run processEntry function on DOM/page load
  window.onload = function () {
	$("calculate").onclick = processEntry;
  };