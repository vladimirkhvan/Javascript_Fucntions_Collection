window.onload = function () {

    let list = {
        value: 1,
        next: {
        value: 2,
        next: {
            value: 3,
            next: {
            value: 4,
            next: null
            }
        }
        }
    };

    console.log(printList(list));
    console.log(printListForLoop(list));

}

