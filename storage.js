localStorage.setItem("details",JSON.stringify({name:"anil reddy"}))
var details = JSON.parse(localStorage.getItem("details"))



const getData = async()=>{


    var data = await fetch("https://chatappserver-zop9.onrender.com/users")

    return data

}


console.log(getData())


