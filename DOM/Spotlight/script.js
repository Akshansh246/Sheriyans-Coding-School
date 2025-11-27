const overlay = document.querySelector('.overlay');

document.body.addEventListener('mousemove', (e)=>{
    overlay.style.setProperty('--x', e.clientX + 'px')
    overlay.style.setProperty('--y', e.clientY + 'px')
})