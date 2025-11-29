const para = document.querySelector('p');
const text = para.innerText;

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let iteration = 0;

para.addEventListener('mouseenter', () => {
    setInterval(()=>{
        const str = text.split('').map((char, idx)=>{
            if (idx < iteration) {
                return char
            }
            return alpha.split('')[Math.floor(Math.random()*53)]
        }).join('')
        para.innerText = str;
        iteration += 0.2;
    },30);
})