// set up your var
var past = $('#past');
var present =  $('#present');
var future =  $('#future');
var timeDisplay = $('#currentDay');
var saveBtn = $('.save-Btn')
var textData= $('#textInfo')
var texMes = [];

// TODO: Add code to display the current date in the header of the page.
// time display 
function displayTime() {
  var rightNow = dayjs().format('MM DD, YYYY[at] hh: mm ss a');
  timeDisplay.text(rightNow);
}



//set local storage
function getTexmes(){
  texMes = JSON.parse(localStorage.getItem("texMes"))
}

// make a for loop for all the buttons 








// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // saveButton.on('click', function () {
  //  var enter= $(this).textData().val;
  //  var time = $(this).textData().val;
  // });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
if (currentTime = hour9 ){
  hour9.removeClass('past');
  hour10.removeClass('')
}

  
  displayTime()
  setInterval(displayTime, 1000);
});
