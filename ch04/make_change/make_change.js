"use strict";



//function to get elements by id

var $ = function (id) {

    return document.getElementById(id);
    
    }
    
    //calling function to make change
    
    var make_change = function () {
    
    //taking cents entered by user
    
    var cents = parseInt($("cents").value);
    
    //checking cents
    
    if (cents < 100) {
    
    if (cents >= 25) {
    
    //if cents are greater than or equal to 25
    
    var quarters = Math.floor(cents / 25);
    
    cents = cents % 25;
    
    //display quarters in textbox
    
    $("quarters").value = quarters;
    
    $("quarters").disabled = true;//disable textbox
    
    }
    
    if (cents >= 10) {
    
    //if cents are greater than or equal to 10
    
    var dimes = Math.floor(cents / 10);
    
    cents = cents % 10;
    
    //display dimes in textbox
    
    $("dimes").value = dimes;
    
    $("dimes").disabled = true;//disable textbox
    
    }
    
    if (cents >= 5) {
    
    //if cents are greater than or equal to 5
    
    var nickels = Math.floor(cents / 5);
    
    cents = cents % 5;
    
    //display nickels in textbox
    
    $("nickels").value = nickels;
    
    $("nickels").disabled = true;//disable textbox
    
    }
    
    if (cents >= 1) {
    
    //if cents are greater than or equal to 1
    
    var pennies = cents;
    
    //display nickels in textbox
    
    $("pennies").value = pennies;
    
    $("pennies").disabled = true;//disable textbox
    
    }
    
    }
    
    else {
    
    //display alert for invalid cents
    
    alert("Enter cents between 0 to 99");
    
    }
    
    }
    
    $("calculate").addEventListener("click", make_change);