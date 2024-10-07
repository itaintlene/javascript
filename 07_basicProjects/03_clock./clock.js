const clock = document.querySelector('#clock');
// const clock = document.getElementById(clock);

setInterval( function() { // set interval is used to 
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);