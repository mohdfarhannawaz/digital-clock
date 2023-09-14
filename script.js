const hour_el = document.getElementById("hours")
const min_el = document.getElementById("minutes")
const sec_el = document.getElementById("seconds")
const ampm_el = document.getElementById("ampm")

const update_clock = () => {
    let var_hour = new Date().getHours();
    let var_min = new Date().getMinutes();
    let var_sec = new Date().getSeconds();
    let var_ampm = "AM";

    if (var_hour > 12){
        var_hour = var_hour - 12;
        var_ampm = "PM";
    }

    var_hour = var_hour < 10 ? "0" + var_hour : var_hour;
    var_min = var_min < 10 ? "0" + var_min : var_min;
    var_sec = var_sec < 10 ? "0" + var_sec : var_sec;

    hour_el.innerText = var_hour;
    min_el.innerText = var_min;
    sec_el.innerText = var_sec;
    ampm_el.innerText = var_ampm;
    setTimeout(() => {
        update_clock()
    } , 1000)
}

update_clock()