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
}

countDown();
// setInterval(countDown, 1000);