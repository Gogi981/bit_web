function changeBackground() {
    document.querySelector("div").classList.toggle("changed");
}

function switchOff() {
    var a = document.querySelector(".toggle");
    var b = document.querySelector(".off");
    if (a.hasAttribute("onclick")) {
        a.removeAttribute("onclick");
        b.firstChild.textContent = "Turn On"
    } else {
        a.setAttribute("onclick", "changeBackground()");
        b.firstChild.textContent = "Turn Off"
    }
}


