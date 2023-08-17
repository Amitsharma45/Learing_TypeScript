"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var details = {
    name: "Amit Sharma",
    age: 23,
    role: "Software Developer",
    isMale: true
};
function getObj(_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
}
getObj({ name: "Amit", age: 23 });
