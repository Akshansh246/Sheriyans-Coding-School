let data = [
    {
        dp:'https://images.unsplash.com/photo-1762770647310-66f492eb832f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1763197538047-d30bd2e43d25?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1760435737058-02a052a1b290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1762694248225-c089648a3bf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1763420309077-ef9b8724b291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1762967020958-6b2118ef93b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1763152496539-302ef51ef66f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
        story:"https://images.unsplash.com/photo-1763142214145-719994a5df19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:'https://images.unsplash.com/photo-1762954419322-f4fe43ece823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1763116147445-2744ef5e5567?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D'
    },
]

let stories = document.querySelector('#stories')

let clutter = '';

data.forEach(function (elem, idx){
    clutter += `<div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
})

stories.innerHTML = clutter

let fullSrc = document.querySelector('#full-screen')

stories.addEventListener('click', function (dets){
    fullSrc.style.display = 'block'
    fullSrc.style.backgroundImage = `url(${data[dets.target.id].story})`

    setTimeout(function(){
        fullSrc.style.display = 'none'
    },3000)
})