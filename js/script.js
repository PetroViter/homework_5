// task 1
let objectUser = {
    name: 'John',
    surname: 'Smith'
};
objectUser.name = 'Pete';
delete objectUser.name;
console.log(objectUser)


//task 2
//можем изменить, т.к. const не дает изменить саму переменную, а свойство переменной можно менять

const user = {
    name1: 'John'
};

user.name1 = 'Petro';

console.log(user);

// task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130}

function sumSalaries() {
    let sum = null;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}

alert( sumSalaries(salaries) );

