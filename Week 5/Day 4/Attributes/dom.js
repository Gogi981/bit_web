/* function Validation() {
    var abc = document.getElementByTagName("input");
    for (var i = 0; i < abc.length; i++) {
        if (abc[i].hasAttribute("required") && (abc[i].value === "")) {
            abc[i].setAttribute("border", "1px solid red")
        }
    }
} */

var element = document.querySelector("form");
var inputs = element.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required") && (inputs[i].value === "")) {
        inputs[i].style.border = "solid 1px red"
    }
}

/* Validation(); */