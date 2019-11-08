document.getElementById("sendMessage").onclick = function () {
    var select = document.querySelector(".textSend");
    var text = select.value;
    select.value = "";
    var newline = document.createElement("p");
    var lineelem = document.createElement("span");
    lineelem.textContent = text;
    lineelem.style.backgroundColor = "aliceblue";
    newline.appendChild(lineelem);
    document.querySelector(".messageBox").appendChild(newline);
}
