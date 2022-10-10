"use strict";
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
	  if (valOfIncomeInInteger > 0 && valOfIncomeInInteger <= 9275) {
		valueOfTaxAmt = valOfIncomeInInteger * 0.1;
	  } else if (valOfIncomeInInteger > 9275 && valOfIncomeInInteger <= 37650) {
		valueOfTaxAmt = (valOfIncomeInInteger - 9275) * 0.15 + 927.5;
	  } else if (valOfIncomeInInteger > 37650 && valOfIncomeInInteger <= 91150) {
		valueOfTaxAmt = (valOfIncomeInInteger - 37650) * 0.25 + 5183.75;
	  } else if (valOfIncomeInInteger > 91150 && valOfIncomeInInteger <= 190150) {
		valueOfTaxAmt = (valOfIncomeInInteger - 91150) * 0.28 + 18558.75;
	  } else if (valOfIncomeInInteger > 190150 && valOfIncomeInInteger <= 413350) {
		valueOfTaxAmt = (valOfIncomeInInteger - 190150) * 0.33 + 46278.75;
	  } else if (valOfIncomeInInteger > 413350 && valOfIncomeInInteger <= 415050) {
		valueOfTaxAmt = (valOfIncomeInInteger - 413350) * 0.35 + 119934.75;
	  } else if (valOfIncomeInInteger > 415050) {
		valueOfTaxAmt = (valOfIncomeInInteger - 415050) * 0.396 + 120529.75;
	  }
  
	  // return tax fixed to 2 decimals
	  return valueOfTaxAmt.toFixed(2);
	}
  }
  
  // run processEntry function on DOM/page load
  window.onload = function () {
	$("calculate").onclick = processEntry;
  };