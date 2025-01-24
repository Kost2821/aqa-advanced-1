const devide = (numerator, denominator) => {
    try {

        if (denominator === 0) {
            throw new Error("Denominator should be more than 0")
        }
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error("Both arguments should be a number");
        }
     const square = numerator / denominator
        return square
    } catch (e) {
        console.log("Error has happened", e.message)
    } finally {
        console.log("Work finished")
    }
}

//const res1 = devide(24,0)
console.log (devide(24,0))
console.log (devide(0,24))
console.log (devide('24sd',0))
console.log (devide('24sd',4))
console.log (devide(50,5))






