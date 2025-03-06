const daysEl = document.getElementById('days'
);
const hoursEl = document.getElementById('hours'
);
const minsEl = document.getElementById('minutes'
);
const secEl = document.getElementById('seconds'
);


const newYears = "1 jan 2026";

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds =  Math.floor((newYearsDate - currentDate) / 1000);

    const hours =  Math.floor((totalSeconds % (3600 * 24)) / 3600);

    const minutes =  Math.floor((totalSeconds % (3600 )) / 60);

    const days = Math.floor((totalSeconds / (3600 * 24)));
    const seconds = Math.floor((totalSeconds % 60));

    console.log(  days, hours, minutes, seconds);

    daysEl.textContent = String(days).padStart(2,0);
    hoursEl.textContent = String(hours).padStart(2,0);;
    minsEl.textContent = String(minutes).padStart(2,0);;
    secEl.textContent = String(seconds).padStart(2,0);;
}

setInterval(countDown, 1000);