const timeDisplay = document.getElementById("cur_time");
const dateDisplay = document.getElementById("cur_date");
timeUpdate(); //Immediately update the time

function timeUpdate()
{
    let t = new Date();
    timeDisplay.innerHTML = t.toLocaleTimeString();
    dateDisplay.innerHTML = t.toLocaleDateString();
}

setInterval(timeUpdate, 1000); //Updates time every second