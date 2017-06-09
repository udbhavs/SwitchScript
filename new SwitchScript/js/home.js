//needed by other script - default config
var words = {
        
        "var" : "for",
        "for" : "var",
        "while" : "function",
        "function" : "while",
        "console.log" : "externalConsoleReport"
        
}
//needed by other script
function setObj(obj) {
    words = obj;
}

window.onload = function() {

    //css and styling - MAIN HEAD
    var mainhead = document.getElementById("mainhead");
    var header = document.getElementById("header");
    var textarea = document.getElementById("textarea");
    var reports = document.getElementById("reports"); //where every console.log goes
    
    //menu
    var run = document.getElementById("run");
    var home = document.getElementById("home");
    var clear = document.getElementById("clear");
    var about = document.getElementById("about");
    
    //menu button functions
    try {
        run.addEventListener("click", function() { evaluate(textarea.value); });
        about.addEventListener("click", function() { window.location.href = "about.html" });
        home.addEventListener("click", function() { window.location.href = "index.html" });
        clear.addEventListener("click", function() { reports.innerHTML = "";});
    }
    catch(e) {}
    
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
    
    //for making sure replacements don't collide with the actual used words
    function encode(str) {
        return str.split('').map(function(val) {
            return String.fromCharCode(val.charCodeAt(0) + 13);
        }).join('');
    }
    function decode(str) {
        return str.split('').map(function(val) {
            return String.fromCharCode(val.charCodeAt(0) - 13);
        }).join('');
    }
    
    //the function that replaces the words
    function replace(val, obj) {
        var val2 = val;
        for (key in obj) {
            val2 = val2.replaceAll(key, encode(obj[key]));
        }
        console.log(val2);
        for (key in obj) {
            val2 = val2.replaceAll(encode(obj[key]), obj[key]);
        }
        console.log(val2);
        return val2;
    }
    
    //code evaluator
    function evaluate(str) {
        str = replace(str, words);
        eval(str);
    }
}