const table = document.querySelector("#grid");

table.addEventListener("click", function (e) {
    let target = e.target;
    let tableBody = document.querySelector("#grid tbody");
    let trs = Array.from(document.querySelectorAll("#grid tbody tr"));

    if (target.dataset.type === "number") {

        trs.sort((tr1, tr2) => {
            return +tr1.children[0].textContent - +tr2.children[0].textContent;
        });

        tableBody.append(...trs);

    } else if (target.dataset.type === "string") {

        trs.sort((tr1, tr2) => {
            return tr1.children[1].textContent > tr2.children[1].textContent ? 1 : -1;
        });

        tableBody.append(...trs);

    }


})