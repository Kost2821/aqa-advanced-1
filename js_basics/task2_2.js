console.log("using for")
const initNumber  = 8;

for (let i=0; i<=10; i++){
    const result = initNumber * i;
    console.log(`${initNumber} x ${i} = ${result}`);
 }

console.log("using while")

const initNumber2  = 7;
let i = 0;
while (i<=10) {
    const result = initNumber2 * i;
    console.log(`${initNumber2} x ${i} = ${result}`);
    i++
}