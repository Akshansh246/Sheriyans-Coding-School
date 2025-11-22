let main = document.querySelector('main')
let crsr = document.querySelector('.cursor')

main.addEventListener('mousemove', function (val){
    console.log(val)
    crsr.style.top = val.y+'px'
    crsr.style.left = val.x+'px'
})