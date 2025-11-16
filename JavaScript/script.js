let word = prompt("Kuch bolo :")
let ycount = 0


while(word !== 'stop'){
    if (word === 'yes') {
        ycount++;
    }
    word = prompt('kuch bolo :')
}

console.log(`You said yes ${ycount} times !!`)
