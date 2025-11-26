document.body.addEventListener('keydown',function (dets){
    if (dets.key === 'q') {
        new Audio('./C2.mp3').play();
        document.querySelector('#c2').classList.add('active');
    }
    if (dets.key === 'w') {
        new Audio('./D2.mp3').play();
    }
    if(dets.key === 'r'){
        new Audio('./E2.mp3').play();
    }
    if(dets.key === 't'){
        new Audio('./F2.mp3').play();
    }
})

let wKeys = document.querySelectorAll('.wKey');

wKeys.forEach(function (val){
    val.addEventListener('click',function () {
        if (val.id === 'c2') {
            new Audio('./C2.mp3').play();
        }
        if (val.id === 'd2') {
            new Audio('./D2.mp3').play();
        }
        if (val.id === 'e2') {
            new Audio('./E2.mp3').play();
        }
        if (val.id === 'f2') {
            new Audio('./F2.mp3').play();
        }
    })
})
