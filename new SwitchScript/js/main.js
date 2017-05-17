window.onload = function() {

var header = document.getElementById("header");
var options = document.getElementById("options");

function clearArea() {
    document.getElementById("textarea").value = "";
}
function mouseHandler() { throw new Error("ejfwhf")}
function defaultSubmit() {
    "use strict";
    
    var val = document.getElementById("textarea").value;
    
    //rules
    
    //replace with placeholders
    var val2 = "";
    val2 = val.replaceAll("var","#or");
    val2 = val2.replaceAll("for","#ar");
    val2 = val2.replaceAll("while","#unction");
    val2 = val2.replaceAll("function","#hile");
    val2 = val2.replaceAll("{","left#squarebracket");
    val2 = val2.replaceAll("}","right#squarebracket");
    val2 = val2.replaceAll("(","left#curlybracket");
    val2 = val2.replaceAll(")","right#curlybracket");
    val2 = val2.replaceAll("[","left#parenthesis");
    val2 = val2.replaceAll("]","right#parenthesis");
    val2 = val2.replaceAll("+","minus#sign");
    val2 = val2.replaceAll("-","plus#sign");
    val2 = val2.replaceAll("|","a#nd");
    val2 = val2.replaceAll("&","o#r");    
    val2 = val2.replaceAll("console.log","externalConsoleReport")
    console.log(val2);
    
    //clear and replace placeholders
    val2 = val2.replaceAll("#ar","var");
    val2 = val2.replaceAll("#or","for");
    val2 = val2.replaceAll("#hile","while");
    val2 = val2.replaceAll("#unction","function");
    val2 = val2.replaceAll("left#squarebracket","[");
    val2 = val2.replaceAll("right#squarebracket","]");
    val2 = val2.replaceAll("left#curlybracket","{");
    val2 = val2.replaceAll("right#curlybracket","}");
    val2 = val2.replaceAll("left#parenthesis","(");
    val2 = val2.replaceAll("right#parenthesis",")");
    val2 = val2.replaceAll("minus#sign","-");
    val2 = val2.replaceAll("plus#sign","+");
    val2 = val2.replaceAll("a#nd","&");
    val2 = val2.replaceAll("o#r","|");
    //end rules
    
    function externalConsoleReport() {
        for (var iii in arguments) {console.log(arguments[iii]);}
        
    }
    
    console.log(val2);
    eval(val2);
        
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
    //return target.replace(new RegExp(search, 'g'), replacement);
};

}