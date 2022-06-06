const imgCatEl = document.querySelector('.img-1');
const container = document.querySelector('.container');
const leftS = document.querySelector('.left');
const rightS = document.querySelector('.right');
let recT = container.getBoundingClientRect()
let recElT = imgCatEl.getBoundingClientRect();
let posX = recElT.left - recT.left;
let direction = true;
rightS.classList.remove('hide');

imgCatEl.addEventListener('mousemove', (el) => {

    let rec = container.getBoundingClientRect()
    let recEl = imgCatEl.getBoundingClientRect();

    if ((rec.right - recEl.right) > 5) {
        imgCatEl.style.left = move(recEl.left, direction);
    } else {
        direction = !direction;
        imgCatEl.style.left = move(posX, direction);
        leftS.classList.remove('hide');
        rightS.classList.add("hide");
    }
    if ((recEl.left - rec.left) > 15) {
        imgCatEl.style.left = move(recEl.left, direction);
    } else {
        direction = !direction;
        imgCatEl.style.left = move(posX, direction);
        leftS.classList.add("hide");
        rightS.classList.remove("hide");
    }
});

function move(left, direction) {

    if (direction) {
        return (left + 10 + 'px');
    } else {
        return (left - 10 + 'px');
    }
}

const imgCatEl2 = document.querySelector('.img-2');
const container2 = document.querySelector('.container-2');
let recT2 = container2.getBoundingClientRect()
let recElT2 = imgCatEl2.getBoundingClientRect();
let direction2 = true;
let start = true;

imgCatEl2.addEventListener('click', (el) => {

    direction2 = !direction2;
    let timer = setInterval(function () {
        let rec2 = container2.getBoundingClientRect()
        let recEl2 = imgCatEl2.getBoundingClientRect();
        if ((rec2.right - recEl2.right) < 5) {
            direction2 = !direction2;
        }
        if ((recEl2.left - rec2.left) < 5) {
            direction2 = !direction2;
        }
        imgCatEl2.style.left = move(recEl2.left, direction2);
    }, 250)

});