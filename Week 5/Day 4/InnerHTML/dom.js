/* function displayOption(text) {
    return window.alert(text)
};

var listItem = document.getElementsByTagName("li")[0].textContent;
displayOption(listItem);

function replaceText(text) {
    var lastItem = document.querySelector("ul").lastElementChild.textContent = text;
};

replaceText("Oki"); */

function createDropdown(array, node) {
    var text = "<select>Goran se zajebava";
    for (var i = 0; i < array.length; i++) {
        if (i === 2) { text += "<option>" + array[i] + "</option>" }
        else { text += "<option>" + array[i] + "</option>" };
    };
    text += "</select>";
    node.innerHTML = text;
}
/*  var List = document.createElement("select");
 node.appendChild(List);
 for (var i = 0; i < array.length; i++) {
     var Option = document.createElement("option");
     Option.textContent = array[i];
     Option.value = array[i];
     List.appendChild(Option);
 }
}*/
var element1 = document.getElementById("firstDiv");
var element2 = document.getElementById("secondDiv");
createDropdown(["1st Option", "2nd Option", "3rd Option", "4th Option"], element1);
createDropdown(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], element2);
/*
function displaySelection(element) {
 return element.querySelector("select").value
}

var blue = document.getElementById("firstDiv");
function prikazi() {
 var textInDiv = displaySelection(blue);
var paragraf = document.querySelector("p");
var poruka = document.createTextNode(textInDiv);
blue.prepend(poruka);
} */