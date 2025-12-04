let songs = [
    {
        songName:'Fortnight',
        artistName:'Taylor Swift',
        url:'./music/Taylor Swift - Fortnight (feat. Post Malone).mp3',
        coverImg:'https://assets.teenvogue.com/photos/66223f9e036fb67368ccc10a/master/w_1600%2Cc_limit/The%2520Anthology_Cover.jpg',
        backImg:'https://live-production.wcms.abc-cdn.net.au/16c4f31f09755c03be4f7f45466ef722?impolicy=wcms_crop_resize&cropH=1145&cropW=2036&xPos=473&yPos=795&width=862&height=485s'
    },
    {
        songName:'Midnight Rain',
        artistName:'Taylor Swift',
        url:'./music/Taylor Swift - Midnight Rain (Official Lyric Video).mp3',
        coverImg:'https://i.scdn.co/image/ab67616d0000b273fa747621a53c8e2cc436dee0',
        backImg:'https://cdn.wallpapersafari.com/46/53/uF8T0M.jpg'
    },
    {
        songName:'Wi$h Li$t',
        artistName:'Taylor Swift',
        url:'./music/Taylor Swift - Wi$h Li$t (Lyrics).mp3',
        coverImg:'https://hips.hearstapps.com/hmg-prod/images/taylor-tiny-bubbles-68accf10c7c54.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        backImg:'https://www.harrivirkkula.com/wp-content/uploads/2025/08/ts-tloas.gif'
    },
    {
        songName:'All Night Parking Interlude',
        artistName:'Adele',
        url:'./music/Adele - All Night Parking (with Erroll Garner) Interlude (Official Lyric Video).mp3',
        coverImg:'https://upload.wikimedia.org/wikipedia/en/7/76/Adele_-_30.png',
        backImg:'https://nashuproar.org/wp-content/uploads/2021/11/adele-30.jpg'
    },
    {
        songName:'Lavender Haze',
        artistName:'Taylor Swift',
        url:'./music/Taylor Swift - Lavender Haze (Official Lyric Video) - TaylorSwiftVEVO.mp3',
        coverImg:'https://i.scdn.co/image/ab67616d0000b273fa747621a53c8e2cc436dee0',
        backImg:'https://wallpapercave.com/wp/wp13501508.jpg'
    },
    {
        songName:'The 1',
        artistName:'Taylor Swift',
        url:'./music/the 1.mp3',
        coverImg:'https://m.media-amazon.com/images/I/A1Q6XGXmIFL._UF350,350_QL50_.jpg',
        backImg:'https://wallpaperaccess.com/full/3704177.jpg'
    },
]

const allSongs = document.querySelector('.all-songs');
const cover = document.querySelector('.left')
const main = document.querySelector('main')
const playName = document.querySelector('#play-name')
const play = document.querySelector('#play')
const backward = document.querySelector('#backward')
const forward = document.querySelector('#forward')
const artist = document.querySelector('#artist')
const mainCover = document.querySelector('.main-cover')
const progressBar = document.querySelector('.progress-bar')
const progressArea = document.querySelector('.progress-area')
const current = document.querySelector('.current')
const musicDuration = document.querySelector('.duration')


let selectedSong = 0

let audio = new Audio();

function mainShit(){
    let clutter = '';
    songs.forEach(function(elem, idx){
    clutter += `<div class="song-card" id="${idx}">
                        <div class="part1">
                            <img src="${elem.coverImg}"  alt="">
                            <p>${elem.songName}</p>
                        </div>
                        <h6>3:43</h6>
                    </div>`
    });
    
    allSongs.innerHTML = clutter;

    audio.src = songs[selectedSong].url;
    cover.style.backgroundImage = `url(${songs[selectedSong].coverImg})`;
    main.style.backgroundImage = `url(${songs[selectedSong].backImg})`;
    playName.innerHTML = songs[selectedSong].songName;
    artist.innerHTML = songs[selectedSong].artistName;
    mainCover.style.backgroundImage = `url(${songs[selectedSong].coverImg})`;
}
mainShit()

let flag = 0;

allSongs.addEventListener('click', (dets)=>{
    selectedSong = dets.target.id;
    mainShit();
    audio.play();
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    flag = 1;
})


play.addEventListener('click', function (){
    if (flag === 0) {
        play.innerHTML = `<i class="ri-pause-fill"></i>`;
        audio.play();
        flag = 1
    } else{
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        audio.pause();
        flag = 0
    }
})

forward.addEventListener('click', function (){
    if (selectedSong < songs.length -1) {
        selectedSong++
        mainShit();
        audio.play();
    }
    else{ 
        forward.style.opacity = 0.2;
    }
})

backward.addEventListener('click', function (){
    if (selectedSong > 0) {
        selectedSong--
        mainShit();
        audio.play();
    }
    else{ 
        backward.style.opacity = 0.2
    }
})

audio.addEventListener('timeupdate', function (dets){
    const currentTime = dets.target.currentTime;
    const duration = dets.target.duration;
    let progressWidth = (currentTime / duration ) * 100;
    progressBar.style.width = `${progressWidth}%`;

    audio.addEventListener('loadeddata', function () {
        let audDuration = audio.duration
        let totalMin = Math.floor(audDuration / 60);
        let totalSec = Math.floor(audDuration % 60);
        if (totalSec < 0) {
            totalSec = `0${currentSec}`
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`

    });
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 0) {
        currentSec = `0${currentSec}`
    }
    current.innerText = `${currentMin}:${currentSec}`
});

progressArea.addEventListener('click', function (dets){
    let progBarWidthval = progressArea.clientWidth;
    let offSet = dets.offsetX;
    let songDuration = audio.duration;
    audio.currentTime = (offSet / progBarWidthval) * songDuration
})