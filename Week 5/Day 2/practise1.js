'use strict'

function dataToStore(a, b) {
    window.localStorage.setItem(a, b);
};


function readName(a) {
    if (window.localStorage.length === 0) { console.log("There is no data") } else {
        console.log(window.localStorage.getItem(a));
    }
};

function clearName(a) {
    window.localStorage.removeItem(a);
}
readName("name");
readName("name2");
dataToStore("name", "Ivana");
dataToStore("name2", "goran");
readName("name");
readName("name2");
clearName("name2");

/* function tab() {
    var strana = window.open("http://www.google.com");

    setTimeout(function() {
        strana.close()
    }, 2000);
}

var a = setInterval(tab, 5000); */


function greet() {
    window.alert("Hello!");
}

function question() {
    return window.prompt("What is your name?");
}


function sure(a) {
    if (window.confirm("We will submit this answer now!" + a)) { return window.alert("Success!") }
}

greet();
sure(question());