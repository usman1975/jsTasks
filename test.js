// task #1

const string = "Привет! Как дела?";
const string2 = "Время которое мы имеем - это деньги которые ме не имеем"



let getVowels = function (a) {
    let vowels = ['а', 'о', 'и', 'е', 'у', 'ы', 'э', 'ю', 'я'];
    let b = a.split('');

    let arr = [];
    for(let i = 0; i < b.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (b[i] == vowels[j]) {
                arr.push(b[i]);
            }
        }
    }
    return arr.join('');
}

console.log(getVowels(string2));


// task #2

const workers = [
    {"name":"John",
    "salary":500
    },
    {"name":"Mike",
    "salary":1300
    },
    {"name":"Linda",
    "salary":1500
    },
    {"name":"Tom",
    "salary":3000
    }
    ];

let getWorthyWorkers = function (arr) {
    let bigSalary = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].salary > 1000) {
            bigSalary.push(arr[i].name);
        }
    }
    return bigSalary;
}

console.log(getWorthyWorkers(workers));

//task 3

// Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла.
//     Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
//
//
    const path = "/users/download/index.html"
//
// console.log(isHtml(path))

function isHtml(a) {
    if (a[a.length-1] == 'l' && a[a.length-2] == 'm' && a[a.length-3] == 't' && a[a.length-4] == 'h' && a[a.length-5] == '.') {
        return true;
    } else {
        return false;
    }
}

console.log(isHtml(path));
console.log(isHtml(string));