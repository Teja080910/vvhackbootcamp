// traditional or Named function
// function sum() {
//     return 20+30
// }

console.log(sum())

function sum() {
    return 20+300
}

// anonymous function
const funct=function(){
    return 2+30
}
console.log(funct())

// arrow 
const add=()=>{return 20+30}
console.log(add())

// async function
const Async=async()=>{return 20+40;}
console.log(await Async())

function Hello(mesg){
    console.log(mesg + ' '+ this?.name)
}

const per={name:'teja'}

// call method
Hello.call(per,"hello")

// apply method
Hello.apply(per,["hello","Hii"])

// bind method
const bind=Hello.bind(per)

bind("Hii")

bind("how are you")

bind("are you")