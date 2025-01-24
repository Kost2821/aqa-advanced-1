/*   Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
*    Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
*     Зробіть деструктуризацію в циклі
*/

const friends = [
    {
        name: "John",
        email: "john@gmail.com",
        age: 41
    },
    {
    name: "Bill",
     email:"bill@gmail.com",
     age: 20
    }
]
//console.log(friends);

for (const {name, email, age} of friends) {
    console.log(`Friend ${name} his email is ${email} and he is ${age} years old`)
}



