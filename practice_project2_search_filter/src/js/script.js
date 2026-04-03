$(document).ready(function () {
    console.log("Jquery is loaded");

    let list = ["Apple", "Banana", "Mango", "Grapes", "Orange", "Gauva", "Papaya"];
    let searchElem = $("#search");
    let listElem = $("#list");
    let resultElem = $("#result");

    function renderUI(renderList) {
        listElem.html(""); // clear list

        if (renderList.length === 0) {
            resultElem.text("No results found");
        } else {
            resultElem.text(""); // clear message

            for (let i = 0; i < renderList.length; i++) {
                let li = `<li>${renderList[i]}</li>`;
                listElem.append(li);
            }
        }
    }

    // initial render
    renderUI(list);

    // search event
    searchElem.on("input", function () {
        let searchText = searchElem.val().toLowerCase();

        let filteredList = list.filter(function (item) {
            return item.toLowerCase().includes(searchText);
        });

        renderUI(filteredList);
    });
});