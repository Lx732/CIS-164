"use strict";


var $ = function(id) {
    return document.getElementById(id);
    };
    var calculateTotal = function(subtotal, tax) {
    var total = subtotal + (subtotal * tax) / 100;
    total = total.toFixed(2);
    return total;
    };
    var processEntries = function() { // processEntries method to calculate total
    var subtotal = parseFloat($("subtotal").value);
    var tax = parseFloat($("tax").value);
    if (isNaN(subtotal) || isNaN(tax)) {
    alert("Both entries must be numeric");
    } else if (subtotal <= 0 || subtotal > 10000) {
    alert("Subtotal must be > 0 and < 10000");
    } else if (tax <= 0 || tax > 12 ) {
    alert("Tax Rate must be > 0 and < 12");
    } else {
    $("total").value = calculateTotal(subtotal, tax);
    $("subtotal").focus();
    }
    };
    
    var clearEntries = function(){ // clearEntries method to clear all the text field
    $("subtotal").value = "";
    $("tax").value = "";
    $("total").value = "";
    $("subtotal").focus();
    }
    
    window.onload = function() { // onload event handler
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
    $("subtotal").focus();
    };