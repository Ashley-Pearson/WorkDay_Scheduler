$(function () {});
//Display current date
var m = moment()
$("#currentDay").text(moment().format("MMM DD, YYYY"));

var now = moment().format("H A");



$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));
    localStorage.getItem(eventTime, JSON.stringify(eventText));

    
});



