// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Adding zero to the left when necessary
function formatNumber(number) {
    return number < 10 ? "0" + number : number;
  }

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in html"
  document.getElementById("days").innerHTML = formatNumber(days);
  document.getElementById("hours").innerHTML = formatNumber(hours);
  document.getElementById("minutes").innerHTML = formatNumber(minutes);
  document.getElementById("seconds").innerHTML = formatNumber(seconds);

}, 1000);