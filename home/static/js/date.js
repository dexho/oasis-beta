// const thedate = new Date();
// const today = thedate.toDateString();
// const todaytime = thedate.toTimeString();
// const time = thedate.getHours() + ":" + thedate.getMinutes();
// console.log(today);

const date = moment().format('ddd' + ', ');
const month = moment().format('MMM Do');
const lowerDate = date.toLowerCase();
const lowerMonth = month.toLowerCase();
const time = moment().format('LT');

const dateID = document.getElementById("date").innerHTML = lowerDate;
const monthID = document.getElementById("month").innerHTML = lowerMonth;
const timeID = document.getElementById("time").innerHTML = time;
