const container = document.querySelector(".container");

container.addEventListener("click", function (e) {

    let target = e.target;

    console.dir(target);

    if (target.nodeName == "LI" && target.children[0].nodeName == "UL") {

        target.children[0].hidden = !target.children[0].hidden;

    }

})