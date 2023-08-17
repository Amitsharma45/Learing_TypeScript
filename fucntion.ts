// file number 2

//  functiont in Typescript
//  function nameOfFunction(parameter1: type, parameter2: type): returntype{
//      // body of function
//  }

function addNum(num1:number, num2:number) :number{
    return num1 + num2;
}

console.log(addNum(1,2)); 

// function with different return type

function temp(ab:number): boolean | number{
    if(ab==0){
        return 0;
    }
    return true;
}
console.log(temp(10))

const arr = [1,2,3,'a','b','c']

arr.map((item): number => {
    console.log(item);
    return 1;
})