console.log("function declaration")

function square (width , height) {
    const rectangleArea = width * height
    return rectangleArea
}


console.log(square(5,10))

console.log("function expression")

const square2 = function (width , height) {
    const rectangleArea = width * height
    return rectangleArea
}

console.log(square2(7,5))

console.log("Arrow function")

const square3 = (width , height) => {
    const rectangleArea = width * height
    return rectangleArea
}
console.log(square3(5,2))

