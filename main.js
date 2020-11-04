// Set up end date for countdown (getTime == Time in Milleseconds)
let launchDate = new Date("Nov 28, 2020 12:00:00").getTime();

// set up timer to tick each second
let timer = setInterval(tick, 1000);

// grab countdown element
const countdown = document.querySelector('.countdown');

function tick () {
    //get current time
    let now = new Date().getTime();

    //get the difference in time
    let t = launchDate - now;

    if (t > 0) {

        //DAYS
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //prefix any number below 10 with a "0", example: 1 = 01
        if (days < 10) { days = "0" + days; }
        
        //HOURS
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        //MINUTES
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) { minutes = "0" + minutes; }

        //SECONDS
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        if (seconds < 10) { seconds = "0" + seconds; }

        //create time string
        let time = `${days} : ${hours} : ${minutes} : ${seconds}`;

        //set time on document
        countdown.innerText = time;
    }
}
