const taskbar = document.querySelector('#taskbar');

document.addEventListener('mousemove', function(dets){
    if (window.innerHeight - dets.clientY <= 5) {
        taskbar.classList.add('show')
    }
})

taskbar.addEventListener('mouseleave', function (){
    setTimeout(function(){
        taskbar.classList.remove('show')
    }, 500)
})

const pinned = [
    {
        img:'https://static.vecteezy.com/system/resources/previews/060/587/624/non_2x/microsoft-store-icon-logo-symbol-free-png.png',
        naam:'Microsoft Store'
    },
    {
        img:'./icons/whatsapp-vector-logo-icon-logotype-vector-social-media_901408-406.png',
        naam:'Whatsapp'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png',
        naam:'Instagram'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c9/Windows_Notepad_icon.png',
        naam:'Notepad'
    },
    {
        img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cc61f89-aa16-4ec1-86ad-8b18cacef76a/dgv3zid-55a0deeb-dd46-4863-87b3-9bb96e3dc5b8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yY2M2MWY4OS1hYTE2LTRlYzEtODZhZC04YjE4Y2FjZWY3NmEvZGd2M3ppZC01NWEwZGVlYi1kZDQ2LTQ4NjMtODdiMy05YmI5NmUzZGM1YjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GOaEuMMhlhvznLkcZrFC1ixfWs1GsRrVBkpJpyPObik',
        naam:'This PC'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
        naam:'VS Code'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
        naam:'Youtube'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
        naam:'Pinterest'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png',
        naam:'Google Chrome'
    },
    {
        img:'https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png',
        naam:'Google Classroom'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwNwDUq_S0U6wDzS60c45kVK5zpxF-03wsQ&s',
        naam:'Vercel'
    },
    {
        img:'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/brave-browser-icon.png',
        naam:'Brave'
    },
]

const tray = document.querySelector('.tray')

let clutter = ''

pinned.forEach(function(val){
    clutter += `<div class="elem">
                    <img src="${val.img}" alt="">
                    <p>${val.naam}</p>
                </div>`
})

tray.innerHTML = clutter;


const startMenu = document.querySelector('#start-menu');
const startBtn = document.querySelector('#start-btn');

startBtn.addEventListener('click', function(){
    startMenu.classList.add('show')
})

document.addEventListener('click', function(e){
    if(!startMenu.contains(e.target) && !startBtn.contains(e.target)){
        startMenu.classList.remove('show')
        taskbar.classList.remove('show')
    }
})


startMenu.addEventListener('mousemove',function () {
    taskbar.classList.add('show')
})

let flag = 0

document.addEventListener('keydown',function(dets){
    if (dets.key === 'Meta' && flag === 0) {
        startMenu.classList.add('show')
        taskbar.classList.add('show')
        flag = 1;
    }
    else{
        startMenu.classList.remove('show')
        taskbar.classList.remove('show')
        flag = 0;
    }
})

const main = document.querySelector('main')
const optionsBox = document.querySelector('.options-box')

main.addEventListener('dblclick',function(dets){
    if(window.innerHeight/2 > dets.y){
        optionsBox.style.top = dets.y + 'px';
        optionsBox.style.left = dets.x + 'px';
        optionsBox.style.transform = 'translateY(0%)'
        optionsBox.classList.add('show')
    }
    else{
        optionsBox.style.transform = 'translateY(-100%)'
        optionsBox.style.top = dets.y + 'px';
        optionsBox.style.left = dets.x + 'px';
        optionsBox.classList.add('show')
    }
})

document.addEventListener('click', function(e){
    if(!optionsBox.contains(e.target)){
        optionsBox.classList.remove('show')
    }
})