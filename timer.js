// Set timer to:
var day = 21
var month = 10

// Get today's date and time
var now = new Date();

var year = now.getFullYear();
if (now.getMonth() + 1 > month) {
  year++;
}
else if(now.getMonth() + 1 == month){
  if(now.getDate() >= day){
    year++;
  }
}

var countDownDate = new Date(year, month - 1, day);
console.log(countDownDate);
var countDownTimeStamp = countDownDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  var now = new Date();
  var nowTimeStamp = now.getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownTimeStamp - nowTimeStamp;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("d").innerHTML = days + " Days";
  document.getElementById("h").innerHTML = hours + " hours";
  document.getElementById("m").innerHTML = minutes + " minutes";
  document.getElementById("s").innerHTML = seconds + " seconds";
}, 1000);
