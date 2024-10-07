const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value) // parseInt converts string to integer
    const weight = parseInt(document.querySelector('#weight').value) // .value returns the value from form input
    const result = document.querySelector('result')

    if(height==='' || height <=0 || isNaN(height)){
      console.log(`${height} is not a valid height`)
    }
    else if(weight==='' || weight <=0 || isNaN(weight)){
      console.log(`${weight} is not a valid weight`)
    }
    else{
      results.innerHTML = ((weight*10000)/(height*height)).toFixed(2);
    }
})