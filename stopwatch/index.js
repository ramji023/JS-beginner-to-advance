const watch = document.getElementById('stopwatch')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const end = document.getElementById('reset')
let time = 0;
let timerId


const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};


const watchStart = () => {
    timerId = setInterval(() => {
        console.log(time)
        time++
        watch.textContent = formatTime(time)
    }, 10)
    start.disabled = true;
    stop.disabled = false;
}

const watchStop = () => {
    clearInterval(timerId)
}

const watchReset = () => {
    clearInterval(timerId)
    time = 0;
    watch.textContent = '00:00'
}

start.addEventListener('click', watchStart)
stop.addEventListener('click', watchStop)
end.addEventListener('click',watchReset)