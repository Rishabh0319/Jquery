

$(document).ready(function () {
    console.log("Jquery is Loaded");

    $("#list").css("color", "red", "border", "1px solid red");

    // Selectors and methods

    let box3 = $("#box3");
    box3.css("border", "1px solid black");
    box3.css("border-radius", "0.5rem");
    box3.css("padding", "0.8rem");
    box3.css("background-color", "pink");

    $("#reset").css("width", "6rem");
    $("#reset").css("height", "4rem");
    $("#reset").css("border", "2px solid red");
    $("#reset").css("border-radius", "0.5rem");
    $("#reset").css("margin", "0.5rem");
    $("#reset").css("padding", "0.5rem");
    $("#reset").css("cursor", "pointer");
    $("#reset").css("cursor", "pointer");


    // mouse Events

    $("#button3").click(() => {
        $("#box3").css("background-color", "lime");
    });

    $("#button3").dblclick(() => {
        $("#box3").css("background-color", "orange");
    });

    $("#button3a").contextmenu(() => {
        $("#box3").css("background-color", "yellow");
    });

    $("#reset").mouseenter(() => {
        $("#box3").css("background-color", "pink");
    });

    $("#reset").mouseleave(() => {
        $("#box3").css("background-color", "purple");
    });


    // keyboard events

    $("body").keydown(function () {
        $(this).css("background-color", "blue");
    });

    $("body").keypress(function () {
        $(this).css("background-color", "violet");
    });

    $("body").keyup(function () {
        $(this).css("background-color", "skyblue");
    });

})
