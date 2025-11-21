let h5 = document.querySelector('h5')
let addFriend = document.querySelector('#add');
let check = 0

addFriend.addEventListener('click', function () {
    if (check === 0) {
        h5.innerHTML = 'Following';
        h5.style.color = 'green';
        addFriend.innerHTML = 'Unfollow'
        check = 1;
    }else{
        h5.innerHTML = 'Singer - songwriter';
        h5.style.color = 'black';
        addFriend.innerHTML = 'Follow'
        check = 0;
    }
})
