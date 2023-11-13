function colorBasedOnText() {
    var table = document.getElementById("Table");
    var cells = table.getElementsByTagName("td");

    for (var i = 0; i < cells.length; i++) {
      var text = cells[i].textContent || cells[i].innerText;

      // You can customize the conditions to match specific text and set colors accordingly
      if (text === "MTH231") {
        cells[i].style.backgroundColor = "#e4fff6";
      } else if (text === "ME212") {
        cells[i].style.backgroundColor = "#e3ffd7";
      } else if (text === "ME211") {
        cells[i].style.backgroundColor = "#ddc2ff";
      }else if (text === "ME213") {
        cells[i].style.backgroundColor = "#cdd3ff";
      }else if (text === "HUM251") {
        cells[i].style.backgroundColor = "#ffdcf1";
      }else if (text === "ME216") {
        cells[i].style.backgroundColor = "#fff4f1";
      }else if (text === "ME217") {
        cells[i].style.backgroundColor = "	#df9152";
      }else if (text === "ME215") {
        cells[i].style.backgroundColor = "#e5af9e";
      }else if (text === "ME214") {
        cells[i].style.backgroundColor = "	#84cdee";
      }
      // Add more conditions for other text values/colors as needed
    }
  }

  // Call the function to apply colors based on text when the page loads
  colorBasedOnText();
var profile = document.getElementById("stdp");
var navbar = document.getElementById("navbar");


profile.addEventListener("click", function(){
  navbar.style.display="none";
});

var goback = document.getElementById("goback");
var timetable = document.getElementById("timetable");

goback.addEventListener("click", function(){
  timetable.scrollIntoView();
  navbar.style.display="block";
});
   
document.getElementById("logoutbtn").addEventListener("click", function(){
  window.location.href = "index.html";
})

var alert = document.getElementsByClassName("no");
no.addEventListener("click", function(){
  window.alert("NOT AVAILABLE");
})

