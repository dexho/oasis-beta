// var hour = new Date().getHours();


// if (hour < 6 || hour > 20) {
//     //night scheme from 9 PM to 5 AM
//     gradient = "linear-gradient(-15deg, #141414 0%, #626F9E 100%)";
//     document.getElementById("dash-wrapper").style.background = gradient;
//     document.getElementById("island-night").style.opacity = 0.80;
//     document.getElementById("island-day").style.opacity = 0;
//     document.getElementById("date").style.color = "#768A9D";
//     document.getElementById("month").style.color = "#768A9D";
//     document.getElementById("date").style.opacity = 0.5;
//     document.getElementById("month").style.opacity = 0.3;
//     document.getElementById("location").style.opacity = 0.6;
//     // document.getElementById("semicircle").style.backgroundColor = "#141414";
// } else if (hour == 7 || hour == 19) {
//     //golden hour, sunrise/sunset, at 7 AM and 7 PM
//     gradient = "linear-gradient(-15deg, #0e1c26 0%, #a4c6b8 100%)";
//     document.getElementById("dash-wrapper").style.background = gradient;
//     document.getElementById("island-night").style.opacity = 0.20;
//     document.getElementById("island-day").style.opacity = 1;
//     document.getElementById("date").style.color = "#768A9D";
//     document.getElementById("month").style.color = "#768A9D";
//     document.getElementById("date").style.opacity = 0.6;
//     document.getElementById("month").style.opacity = 0.3;
//     document.getElementById("location").style.opacity = 0.5;

// } else if (hour == 6 || hour == 20) {
//     //blue hour, before sunrise/after sunset, at 6 AM and 8 PM
//     gradient = "linear-gradient(-15deg, #132535 15%, #ccb3d1 100%)";
//     document.getElementById("dash-wrapper").style.background = gradient;
//     document.getElementById("island-night").style.opacity = 0.6;
//     document.getElementById("island-day").style.opacity = 0.7;
//     document.getElementById("date").style.color = "#768A9D";
//     document.getElementById("month").style.color = "#768A9D";
//     document.getElementById("date").style.opacity = 0.8;
//     document.getElementById("month").style.opacity = 0.5;
//     document.getElementById("location").style.opacity = 0.6;
// }


gradient = "linear-gradient(-15deg, #000000 0%, #FFFFFF 100%)";
document.getElementById("dash-wrapper").style.background = gradient;