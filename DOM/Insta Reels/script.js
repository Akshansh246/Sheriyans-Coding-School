const reels = [
  {
    isMuted: false,
    username: "astro.nyx",
    userProfilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    video: "./reels/reel1.mp4",
    isLiked: false,
    likeCount: 12800,
    commentCount: 340,
    shareCount: 90,
    isFollowed: false,
    caption: "Chasing cosmic vibes ✨🌌"
  },
  {
    isMuted: false,
    username: "urban.vibes",
    userProfilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    video: "./reels/reel2.mp4",
    isLiked: true,
    likeCount: 9820,
    commentCount: 220,
    shareCount: 45,
    isFollowed: true,
    caption: "City lights & late nights 🏙️"
  },
  {
    isMuted: false,
    username: "echo.wave",
    userProfilePic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    video: "./reels/reel3.mp4",
    isLiked: false,
    likeCount: 21500,
    commentCount: 780,
    shareCount: 140,
    isFollowed: false,
    caption: "Vibes louder than words 🎧"
  },
  {
    isMuted: false,
    username: "pixel.pulse",
    userProfilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    video: "./reels/reel4.mp4",
    isLiked: true,
    likeCount: 30400,
    commentCount: 960,
    shareCount: 300,
    isFollowed: true,
    caption: "Every frame tells a story 🎥✨"
  },
  {
    isMuted: false,
    username: "midnight.runner",
    userProfilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    video: "./reels/reel5.mp4",
    isLiked: false,
    likeCount: 7600,
    commentCount: 180,
    shareCount: 36,
    isFollowed: false,
    caption: "Running through thoughts & streets 🌃"
  },
  {
    isMuted: false,
    username: "sunset.mirage",
    userProfilePic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    video: "./reels/reel6.mp4",
    isLiked: true,
    likeCount: 18400,
    commentCount: 420,
    shareCount: 85,
    isFollowed: true,
    caption: "Sunsets hit different when you're healing 🌅"
  },
  {
    isMuted: false,
    username: "wander.soul",
    userProfilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    video: "./reels/reel7.mp4",
    isLiked: false,
    likeCount: 12900,
    commentCount: 310,
    shareCount: 60,
    isFollowed: false,
    caption: "Lost in places that feel like home 🌍✨"
  },
  {
    isMuted: false,
    username: "code.crafter",
    userProfilePic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    video: "./reels/reel8.mp4",
    isLiked: true,
    likeCount: 5400,
    commentCount: 150,
    shareCount: 20,
    isFollowed: true,
    caption: "Turning caffeine into code ☕💻"
  },
  {
    isMuted: false,
    username: "neon.shinobi",
    userProfilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    video: "./reels/reel9.mp4",
    isLiked: false,
    likeCount: 16400,
    commentCount: 510,
    shareCount: 120,
    isFollowed: false,
    caption: "Silent moves. Loud energy. ⚡🗡️"
  },
  {
    isMuted: false,
    username: "vintage.echo",
    userProfilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    video: "./reels/reel10.mp4",
    isLiked: true,
    likeCount: 23100,
    commentCount: 690,
    shareCount: 210,
    isFollowed: false,
    caption: "Old soul. Modern world 🎞️✨"
  }
];

let allReels = document.querySelector('.all-reels')

function addData() {
    let buffer = ''

    reels.forEach(function (val, idx){
        buffer += `<div class="reel">
                    <div class="sound" id=${idx}>
                        ${val.isMuted?'<i class="ri-volume-up-line"></i>':'<i class="ri-volume-mute-line"></i>'}
                    </div>
                    <video src=${val.video} autoplay loop ${val.isMuted?'':'muted'} class="main-img"></video>
                    <div class="bottom">
                        <div class="details">
                            <img src=${val.userProfilePic} alt="">
                            <h3>${val.username} </h3>
                            <button class='follow' id=${idx}>${val.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <div class="caption">
                            <h2>${val.caption}</h2>
                        </div>
                    </div>
                    <aside class="side">
                        <div class="like" id=${idx}>
                            ${val.isLiked?'<i class="ri-heart-3-fill" id="love"></i>':'<i class="ri-heart-3-line"></i>'}
                            <p>${val.likeCount}</p>
                        </div>
                        <div class="comment">
                            <i class="ri-chat-3-line"></i>
                            <p>${val.commentCount} </p>
                        </div>
                        <div class="share">
                            <i class="ri-send-plane-line"></i>
                            <p>${val.shareCount} </p>
                        </div>
                        <div class="options">
                            <i class="ri-more-2-fill"></i>
                        </div>
                    </aside>
                </div>`
    });

    allReels.innerHTML = buffer
}   

addData()

allReels.addEventListener('click',function (dets){
    if(dets.target.className === 'like'){
        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
        }
        else{
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        }
        addData()
    }

    if(dets.target.className === 'follow'){
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true
        }
        else{
            reels[dets.target.id].isFollowed = false
        }
        addData()
    }

    if (dets.target.className === 'sound') {
        if (!reels[dets.target.id].isMuted) {
            reels[dets.target.id].isMuted = true
        }
        else{
            reels[dets.target.id].isMuted = false
        }
        addData()
    }
    allReels.addEventListener('scroll',function(dts){
        console.log(dts)
    })
})


let main = document.querySelector('main')
let crsr = document.querySelector('.cursor')

main.addEventListener('mousemove', function(dets){
    crsr.style.top = dets.y+'px';
    crsr.style.left = dets.x+'px';
})