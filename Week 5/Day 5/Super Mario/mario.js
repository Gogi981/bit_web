var $marioRunning = document.querySelector("#active");
var $mario = document.querySelector("#inactive");
var $background = document.querySelector(".screen");

var backgroundPosition = 0;
var marioRunning = null;

var game = {
    bg: 0,
    marioRunning: null
};

function stopMario() {
    $marioRunning.className = "inactive";
    $mario.className = "active";

    clearInterval(marioRunning);

    marioRunning = null;
}

function runMarioRun(speed) {
    $marioRunning.className = "active";
    $mario.className = "inactive";

    marioRunning = setInterval(function () {
        backgroundPosition -= speed;
        $background.style.backgroundPositionX = backgroundPosition + "px";
    }, 100)
}

addEventListener("keydown", function (e) {
    if (e.which === 39 && !marioRunning) {
        runMarioRun(10);
    } else if (e.which === 37 && !marioRunning) {
        runMarioRun(-10);
        $marioRunning.style.transform = "scaleX(-1)";
    }
});

addEventListener("keyup", function (e) {
    if (e.which === 39 && marioRunning) {
        stopMario();
    } else if (e.which === 37 && marioRunning) {
        stopMario();
        $marioRunning.style.transform = "scaleX(1)";
    }
});