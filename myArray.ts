//  file numeber 3

//  Array in TypeScript
let myArray: string[] = ["Hello", "World"];  

let myArray4: Array<string> = ["Hello", "World"];

// syntax type 1
let myArray2 :number[] =[]
myArray2.push(1)
myArray2.push(2)
console.log(myArray2 )

// syntax type 2
let myArray3 :Array<number> =[]

type User = {
    name: string,
    age: number,
    email: string,
}

// syntax type 3
let Users :User[] = []

Users.push({
    name: "Amit",
    age: 23,
    email: "sharma@a.com"
})

// syntax type 4

const arr: number[][]= [[1,2,3],[4,5,6],[7,8,9]]

export {}