var a = document.querySelector(".field");
var event1 = a.addEventListener("click", movePlayer);
var b = document.querySelector("img");
function movePlayer(event) {
    var x = event.clientX;
    var y = event.clientY;
    b.style.top = (y - 50) + "px";
    b.style.left = (x - 50) + "px";
};

function stop() {
a.removeEventListener("click",movePlayer);
}
