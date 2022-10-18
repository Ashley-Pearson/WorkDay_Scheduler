$(function () {});

var m = moment()
$("#currentDay").text(moment().format("MMM DD, YYYY"));

var now = moment().format("H A");