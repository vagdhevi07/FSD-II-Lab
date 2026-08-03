let str: string = "programming";
let result: string = "";

for (let char of str) {
    if (!result.includes(char)) {
        result = result + char;
    }
}

console.log(result);