const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) { // using onclick event listener
    // console.log(event); 
    // console.log(event.target); // from where is the event running from

    if (event.target.id === 'purple') {
      body.style.backgroundColor = "#d5d8ff";
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = "#d5e9ff";
    } else if (event.target.id === 'peach') {
      body.style.backgroundColor = "#ffdede";
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = "#fdfbd3";
    }

  });
});
