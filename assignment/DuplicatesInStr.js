"use strict";
let str = "programming";
let result = "";
for (let char of str) {
    if (!result.includes(char)) {
        result = result + char;
    }
}
console.log(result);
