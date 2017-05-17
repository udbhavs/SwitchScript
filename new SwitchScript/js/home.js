window.onload = function() {

    //css and styling - MAIN HEAD
    var mainhead = document.getElementById("mainhead");
    var header = document.getElementById("header");
    var textarea = document.getElementById("textarea");
    var reports = document.getElementById("reports"); //where every console.log goes
    
    //menu options
    var home = document.getElementById("home");
    var about = document.getElementById("about");
    var run = document.getElementById("run");
    var clear = document.getElementById("clear");
    
    var menu = [home,about,run,clear];
    
    //handlers
    function mainheadHandler() {
        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.add("viewable");
            menu[i].style.left = ( (window.innerWidth/menu.length) * (i + 0.25) ) + "px";
        }
    }
    function mainheadHandler2() {
        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.remove("viewable");   
            menu[i].style.left = window.innerWidth/2;
        }      
    }
    header.addEventListener("mouseover", mainheadHandler);
    header.addEventListener("mouseout",mainheadHandler2);
    
    //"run" handler
    run.addEventListener("click", submit);
    
    //replaceAll function
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
        //return target.replace(new RegExp(search, 'g'), replacement);
    };
    
    //run the code
    function submit() {
        var value = textarea.value;
        evaluate(value, "default");
    }
    
    //console.log replacement
    function externalConsoleReport() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
            var report = document.createElement("report");
            report.innerHTML = arguments[i] + "<br>";
            reports.appendChild(report);
            }
    }
    
    //code evaluator
    function evaluate(val, choice) {
        
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
    console.log(val2);
        
    eval(val2);
    }
}