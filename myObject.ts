const details = {
    name:"Amit Sharma",
    age: 23,
    role: "Software Developer",
    isMale : true
}

function getObj({name,age}:{name:string, age:number}){
    console.log(name, age)
}

getObj({name:"Amit", age:23})

export {} 