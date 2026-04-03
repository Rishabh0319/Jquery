
$(document).ready(function () {
    console.log("Jquery is loaded");

    // form events

    $("#name, #class, #country").focus(function () {
        $(this).css("background-color", "skyblue");
    });

    $("#name, #class, #country").blur(function () {
        $(this).css("background-color", "transparent");
    });

    $("#country").change(function () {
        $(this).css("background-color", "pink");
    });

    $("#name, #class, #country").select(function () {
        $(this).css("background-color", "yellow");
    });

    $("#submitform").submit(function () {
        alert("Form data Submited");
    })

});