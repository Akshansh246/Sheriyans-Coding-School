let btn = document.querySelector('button')
let h2 = document.querySelector('h2')
let inner = document.querySelector('.inner')

let count = 0

btn.addEventListener('click',function () {
    btn.style.pointerEvents = 'none'
    let int = setInterval(function (){
        count++;
        h2.innerHTML = count+'%'
        inner.style.width = count+'%'
        btn.style.opacity = 0.5
    },50)

    setInterval(() => {
        btn.innerHTML = 'Downloaded'
        clearInterval(int)
    }, 5000);
})