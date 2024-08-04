const teams={
    name:'teja',
    branch:'cse',
    college:'srkr',
    team:'ast'
}

const {name,branch}=teams

console.log(name,branch)
for(let x in teams){
    console.log(x +":"+ teams[x])
}



console.log("object keys")

Object.keys(teams).forEach(val => {
    console.log(val + ":" + teams[val])
});

Object.values(teams).forEach(val => {
    console.log(val)
});

for(let [key,val] of  Object.entries(teams)){
    console.log(key +":"+ val)
}

// let foo=null
// let val=undefined
// console.log(foo=val??"unknow")