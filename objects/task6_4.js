const person = {
    firstName: "John",
    lastName: "Doe",
    age: 41,
}

console.log(person);

person.email = "test@test.com"
delete person.age
console.log(person);