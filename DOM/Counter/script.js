let h1 = document.querySelector('h1');
let inc = document.querySelector('#inc');
let dec = document.querySelector('#dec');
let counter = 0;

inc.addEventListener('click', function (){
    counter++;
    h1.innerHTML = counter;
})

dec.addEventListener('click', function (){
    counter--;
    h1.innerHTML = counter;
})