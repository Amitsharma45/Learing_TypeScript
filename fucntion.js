// file number 2
//  functiont in Typescript
//  function nameOfFunction(parameter1: type, parameter2: type): returntype{
//      // body of function
//  }
function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(1, 2));
// function with different return type
function temp(ab) {
    if (ab == 0) {
        return 0;
    }
    return true;
}
console.log(temp(10));
var arr = [1, 2, 3, 'a', 'b', 'c'];
arr.map(function (item) {
    console.log(item);
    return 1;
});
