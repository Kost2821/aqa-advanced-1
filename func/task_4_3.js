
const minusCounter = (num)=> {
    console.log(num)
    if (num <= 0) {
    return
    }
    minusCounter(num - 1)
}
minusCounter(5)


