
const minusCounter = (num)=> {
    console.log(num)
    if (num <= 0) {
    return
    }
    minusCounter(num - 1)
}
minusCounter(5)
 // or

const minusCounter2 = (num)=> {
    console.log(num)
    if (num > 0) {
        return minusCounter2(num - 1)
    }
    else
        return console.log("That's all")

}
minusCounter2(6)

