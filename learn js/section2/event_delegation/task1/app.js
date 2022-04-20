const container = document.querySelector(".container");

container.addEventListener("click", (e)=>{
    let target = e.target;

    if(target.dataset.delete != undefined){
        target.closest(".card").remove();
    }
});