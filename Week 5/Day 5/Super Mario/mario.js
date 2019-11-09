var move1 = 0;
var move2 = 100;
var moveString = "";
var p = addEventListener("keydown", function (e) {
    if (e.which === 39) {
        var a = document.querySelector("#active");
        var i = document.querySelector("#inactive");
        var b1 = document.querySelector("#bg1");
        var b2 = document.querySelector("#bg2");
        a.className = "active";
        i.className = "inactive";
        if (move2 === 0) {
            move1 = 0;
            move2 = 100;
        }
        move1--;
        move2--;
        moveString1 = +move1 + "%";
        moveString2 = +move2 + "%";
        b1.style.left = moveString1;
        b2.style.left = moveString2;
    } else if (e.which === 37) {
        var a = document.querySelector("#active");
        var i = document.querySelector("#inactive");
        var b1 = document.querySelector("#bg1");
        var b2 = document.querySelector("#bg2");
        a.style.transform="scaleX(-1)";
        a.className = "active";
        i.className = "inactive";
        if (move1 === 0) {
            move1 = -100;
            move2 = 0;
        }
        move1++;
        move2++;
        moveString1 = +move1 + "%";
        moveString2 = +move2 + "%";
        b1.style.left = moveString1;
        b2.style.left = moveString2;
    }
});

var u = addEventListener("keyup", function (e) {
    if (e.which === 39) {
        var a = document.querySelector("#active");
        var i = document.querySelector("#inactive");
        i.className = "active";
        a.className = "inactive";
    }else if (e.which === 37) {
        var a = document.querySelector("#active");
        var i = document.querySelector("#inactive");
        a.style.transform="scaleX(1)";
        i.className = "active";
        a.className = "inactive";   
    }
});