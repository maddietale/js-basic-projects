const buttons = document.querySelectorAll(".colors");
const title = document.querySelector("#colorName");
const bg = document.querySelector(".background")

buttons.forEach(element => {
    element.addEventListener("click", eventHandler);
});

function eventHandler(event) {
    let elem = event.target;
    let elemId = event.target.id;

    buttons.forEach(item => item.style.borderColor = "white")

    switch (elemId) {
        case "01":
            title.innerText = "crimson";
            bg.style.backgroundColor = "crimson";
            elem.style.borderColor = "green";
            break;
        case "02":
            title.innerText = "deeppink";
            bg.style.backgroundColor = "deeppink";
            elem.style.borderColor = "green";
            break;
        case "03":
            title.innerText = "deepskyblue";
            bg.style.backgroundColor = "deepskyblue";
            elem.style.borderColor = "green";
            break;
        case "04":
            title.innerText = "gold";
            bg.style.backgroundColor = "gold";
            elem.style.borderColor = "green";
            break;
        case "05":
            title.innerText = "lightgray";
            bg.style.backgroundColor = "lightgray";
            elem.style.borderColor = "green";
            break;
        case "06":
            title.innerText = "pink";
            bg.style.backgroundColor = "pink";
            elem.style.borderColor = "green";
            break;
        case "07":
            title.innerText = "orange";
            bg.style.backgroundColor = "orange";
            elem.style.borderColor = "green";
            break;
        case "08":
            title.innerText = "mediumturquoise";
            bg.style.backgroundColor = "mediumturquoise";
            elem.style.borderColor = "green";
            break;
        case "09":
            title.innerText = "lemonchiffon";
            bg.style.backgroundColor = "lemonchiffon";
            elem.style.borderColor = "green";
            break;
        case "10":
            title.innerText = "indigo";
            bg.style.backgroundColor = "indigo";
            elem.style.borderColor = "green";
            break;
        default:
            break;
    }
}