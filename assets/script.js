// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  let today = dayjs();
  $(currentDay).text(today.format("[Today is] MMM D, YYYY HH:mm:s"));
  console.log(currentDay);

  // var timeBlock = $(".time-block");
  var saveButton = $(".saveBtn");

  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      // var block = this;
      var blockHour = parseInt($(this).attr("id"));
      // let value = blockHour.substring(5, 7);

      console.log(currentHour);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourUpdater();
  setInterval(hourUpdater, 10000);


  

  }

  // saveButton.on("click", function (event) {
  //   event.preventDefault();
  //   console.log(saveButton);
  //   var textNotes = document.getElementsByClassName("description");

  //   function saveComments() {
  //     localStorage.setItem("textNotes", JSON.stringify(textNotes));
  //     saveComments();
  //   }
  // });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
  // TODO: Add code to display the current date in the header of the page.
});
