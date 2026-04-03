$(document).ready(function () {
    console.log("Jquery is Loaded...");

    let inputElem = $("#counter_input");
    let countElem = $("#char_count");
    let limitElem = $("#char_limit");
    let totalLimitElem = $("#total_limit");

    let maxLength = 50;

    // set total limit once
    totalLimitElem.text(maxLength);

    function updateUI() {
        let text = inputElem.val();
        let inputLength = text.length;

        countElem.text(inputLength);
        limitElem.text(inputLength);

        if (inputLength > maxLength) {
            limitElem.css("color", "red");
            inputElem.css("border", "1px solid red");
        } else {
            limitElem.css("color", "black");
            inputElem.css("border", "1px solid black");
        }
    }

    // call on page load
    updateUI();

    // call on input change
    inputElem.on("input", function () {
        updateUI();
    });
});