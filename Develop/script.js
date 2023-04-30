// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $(".saveBtn").click(function(){
    let textArea = $(this).siblings("textarea")[0]
    let textGrab = $(textArea).val()  
    let date = dayjs().date();
    let hour = $(this).parent().attr("id").split("-")[1];
    let month = dayjs().month();
    let year = dayjs().year();
    let localStorageKey = hour+"-"+date+"-"+month+"-"+year
    localStorage.setItem(localStorageKey,textGrab)
  });


  // TODO: Add code to apply the past, present, or future class to each time
  let timeOfDay = dayjs().hour();
  for (let i=0;i<24;i++){
    let targetId = "hour-"+i;  
    let blockDiv = $("#"+targetId);
    blockDiv.removeClass("past")
    blockDiv.removeClass("present")
    blockDiv.removeClass("future")
    if (i<timeOfDay){
      blockDiv.addClass("past")
    } else if (i==timeOfDay){
      blockDiv.addClass("present")
    } else {
      blockDiv.addClass("future")
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
//LOOP24hoursseedatafromlocalstorageanthenpopulateit --> RUN 

  for(let i=0;i<24;i++){
    let date = dayjs().date();
    let month = dayjs().month();
    let year = dayjs().year();
    let localStorageKey = i+"-"+date+"-"+month+"-"+year
    if(localStorage.getItem(localStorageKey)!=null){  
      $("#hour-"+i).children("textarea")[0].val(localStorage.getItem(localStorageKey))   
    }
  }



  // TODO: Add code to display the current date in the header of the page.
  let dateParagraph = $("#currentDay");
  dateParagraph.text(dayjs().format("ddd | MMM | DD | YYYY"))

});


