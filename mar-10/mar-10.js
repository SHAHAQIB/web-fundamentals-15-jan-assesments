const startingMinutes = 05;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes<10? '0':''}${minutes}: ${seconds<10? '0':''} ${seconds}`;
    time--;
}


// const stoptimer = function() {
// const stop_btn = document.getElementById('stoptimer');
// stop_btn.addEventListener('click', stop);
// }