var lastText = "";
var isTimerActive = false;

$(document).ready(function () {
    window.addEventListener("message", function(event) {
        let data = event.data;
        if (data.action == "open") {
            if (data.timer) {
                isTimerActive = true;
                $(".container").append(`<div class="container-timer"><span id="timer">${data.timer}s</span></div>`)
            }
            if (data.text) {
                $(".container").append(`<div class="container-text"><span id="text">${data.text}</span></div>`)
            }
            $(".container").css("display", "flex");
        } else if (data.action == "update") {
            if (data.text) {
                $("#text").html(data.text);
            }
            if (isTimerActive && data.timer) {
                $("#timer").html(data.timer + "s");
            }
        } else if (data.action == "close") {
            isTimerActive = false;
            $(".container").css("display", "none");
            $(".container").html("");
        }
    });
});