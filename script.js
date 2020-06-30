const btnClick = document.querySelector('.click');
const sqrt = document.querySelector('.sqrt');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
console.log(reset);
let count = 0;
let flyInterval;
function sqrtUp() {
    flyInterval = requestAnimationFrame(sqrtUp)
    count++;
    if(count < 700) {
    sqrt.style.bottom = count + 'px';
} else {
    cancelAnimationFrame(flyInterval)
}
}

let click = btnClick.addEventListener('click', () => {
    flyInterval = requestAnimationFrame(sqrtUp);
    pause.style.display = "block";
    reset.style.display = "block";
})
pause.addEventListener('click', () => {
    cancelAnimationFrame(flyInterval)
})
reset.addEventListener('click', () => {
    pause.style.display = "none";
    cancelAnimationFrame(flyInterval);
    count = 0;
    sqrt.style.bottom = count + 'px';
})