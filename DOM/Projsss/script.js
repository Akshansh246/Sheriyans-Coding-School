let main = document.querySelector('main');
let btn = document.querySelector('button');

const quotes = [
    "Believe in yourself and all that you are.",
    "Success is not final, failure is not fatal.",
    "Do something today that your future self will thank you for.",
    "Dream big and dare to fail.",
    "Every moment is a fresh beginning.",
    "Turn your wounds into wisdom.",
    "What we think, we become."
];

btn.addEventListener('click', function () {
    let h1 = document.createElement('h1');
    let idx = Math.floor(Math.random() * quotes.length)
    h1.innerHTML = quotes[idx]

    let x = Math.random() * 80
    let y = Math.random() * 80
    let r = Math.floor(Math.random()*360)
    let s = Math.random()*3
    
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = r+'deg'
    h1.style.scale = s
    
    main.appendChild(h1)
})