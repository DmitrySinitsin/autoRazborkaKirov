const button = document.querySelector('button');
const container = document.querySelector('.container');
const checkmark = document.querySelector('svg');
const className = "animate";

for (let k = 1; k < 10; k++) {
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
    for (let i = 1; i < 7; i++) {
        let btn = document.createElement("button");
        btn.innerText = " Button # " + i;
        btn.addEventListener('click', listener(i));
        document.body.appendChild(btn);
    }
}

//нажатие на кнопку
function listener(index) {
    return function () {
        alert(index);
    }
}

//БОЛЬШАЯ галка при нажатии
button.addEventListener('click', function () {
    if (!checkmark.classList.contains(className)) {
        checkmark.classList.add(className);

        setTimeout(function () {
            checkmark.classList.remove(className);
        }, 1700);
    }
});