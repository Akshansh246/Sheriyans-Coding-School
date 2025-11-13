let age = prompt('num btao: ');

if (age === null) {
    console.error("Cancel daba diya !!")
}
else{
    if (age.trim() === '') {
        console.error("Bhaii dhang se likh le !!")
    }
    else{
        age = Number(age);
        if (isNaN(age)) {
            console.error("Number maanga tha bhaii");
        }
        else{ 
            if(age<0){
                console.error("minus m age kb se hone lgi ?");
            } 
            else if(age > 110){
                console.error("Tum zinda kese ho abhi tak ?")
            } 
            else if (age>=18) {
                console.log("Bhaii tu vote de skta haii");
            }
            else console.log("Beta tum bacche ho abhi")
        }
    }
}