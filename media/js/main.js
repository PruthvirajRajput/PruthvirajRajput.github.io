
const show_nav = function()
{

let nav = document.querySelector(".nav");

nav.style.width="100%";

let menu = document.querySelector(".menu");

menu.style.transform="perspective(100px) rotateY(50deg)";




}; // end of function

const hide_nav = function()
{
let nav = document.querySelector(".nav");

nav.style.width="0%";

let menu = document.querySelector(".menu");

menu.style.transform="rotateY(0deg)";

}; // end of hide_nav function 


const print_date = function()
{

setInterval(function()
{

let year = new Date().getFullYear();

// ===========

let month = new Date().getMonth();

let day = new Date().getDay();

let td = new Date().getDate();

let hour = new Date().getHours();

let minute = new Date().getMinutes();

let second = new Date().getSeconds();

let today = "none";

switch(day)
{

case 0: today = "Sunday"; break;

case 1: today = "Monday"; break;

case 2: today = "Tuesday"; break;

case 3: today ="Wednesday"; break;

case 4: today = "Thursday"; break;

case 5: today = "Friday"; break;

case 6: today = "Saturday"; break;

} // end switch


// ==============
let copyright = document.querySelector(".footer");

copyright.innerHTML = "<h3>&copy; By Pruthviraj - " + year + "</h3>";

// ==============

let time = document.querySelector(".time");

time.innerHTML = "<h3>Time : " + hour + ":" + minute + ":" + second +"</h3>";


let date = document.querySelector(".date");

date.innerHTML = "<h3> Day : " + today + "</h3>" + "<h3> Date : " + td + " / " +month + " / " +year;




},100); // end of interval


}; // end of print date function

print_date();
