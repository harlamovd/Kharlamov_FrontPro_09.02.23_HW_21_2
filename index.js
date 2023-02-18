let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]

const myArr = [1,2,0,4,5,6,7,8,9,9];

/*
написати функцію mapping(array, callback), яка буде створювати новий масив на умові функції callback,
в не залежності який буде масив, та які будуть пекретворення чи умови в функції колбек.
*/
// № 1
function mapping (array, callback) {
    const resArr = [];
    for (let i = 0; i < array.length; i++) {
        resArr.push(callback(array[i], i, array));
    }
    return resArr;
}
// три колбек функцыи для примера работы
function CallAddLength (item, _, arr) {
    return item + arr.length;
}
function CallAddStrIndex (item, index) {
    return item + ` - index #${index} `;
}
function CallSelectionNames (item) {
    return item.name;
}

// тут я проверяю как работает стрелочная функцыя при вызове.
const call = mapping(myArr,item => item.toString())

console.log('# 1 : ' + mapping(myArr,CallAddLength));
console.log('# 1 : ' + mapping(myArr,CallAddStrIndex));
console.log('# 1 : ' + call);
console.log('# 1 : ' + mapping(users,CallSelectionNames));




        //    додатково...  № 2

// сделал по документацииб вроде все предусмотрелб может что-то упустил
const arrRed = [1,2,3,"45",4,5];
function  myReduce(array, callback, initialValue) {
    if (array.length === 0 && !initialValue || typeof callback !== "function") {
        return 'Error'
    }
    let accumulator;
    let iter = 0;
    if (initialValue) {
        accumulator = initialValue;
    } else {
        accumulator = array[0];
        iter = 1;
    }
    for (let i = iter; i <array.length; i++) {
        let resCall = callback(accumulator, array[i], i, array);
        if (resCall){
            accumulator = resCall;   // проверяет на пустой или неправельный елемент массива перед записью чято бы
        } else {                      // его пропустить и не испортить весь результат. в документации емть такое
            continue
            }
    }
    return accumulator;
}

// тут проверял что бы был один результат.
console.log('# 2 : ' + myReduce(arrRed, (accum, item) => accum + item, 3));
console.log('# 2 : ' + arrRed.reduce((accum, item) => accum + item, 3))





           //додатково...  № 2
//Array.prototype.copyWithin()
const arrThree = [0,0,0,0,1,2,3,0,0];
console.log(arrThree.copyWithin(0,4, 7)); // мутабельный

//Array.prototype.concat(
const arrConcat = myArr.concat(arrThree); // не мутабельный

//Array.prototype.entries()  // не мутабельный
let a = users.entries();
for (el of users) {
    console.log(a.next().value);
}

//Array.prototype.every()
console.log(users.every((el) => typeof el.name === "string")); // не мутабельный

//Array.prototype.fill()
let arrFill = arrThree.fill('**',2,4)  // мутабельный
console.log(arrFill);

//Array.prototype.filter()
let arrFilter = users.filter(el => el.index > 2 && el.index < 5); // не мутабельный
console.log(arrFilter);

//  ниже указаные методы я проверял и работал с ними, но просто не оставляю все проверки так как захломилось все.
// я поделил на два списка = мутабельные и нет

//Array.prototype.find()
//Array.prototype.findIndex()
//Array.prototype.findLast()
//Array.prototype.findLastIndex()
//Array.prototype.flat()
//Array.prototype.flatMap()
//Array.prototype.forEach()
//Array.from()
//Array.prototype.includes()
//Array.prototype.indexOf()
//Array.isArray()
//Array.prototype.join()                         // // не мутабельные
//Array.prototype.keys()
//Array.prototype.lastIndexOf()
//Array.prototype.map()
//Array.of()
//Array.prototype.reduce()
//Array.prototype.reduceRight()
//Array.prototype.slice()
//Array.prototype.some()
//Array.prototype.toLocaleString()
//Array.prototype.toString()
//Array.prototype.values()

//___________________

//Array.prototype.pop()
//Array.prototype.push()                                //  мутабельные
//Array.prototype.reverse()
//Array.prototype.shift()
//Array.prototype.sort()
//Array.prototype.splice()
//Array.prototype.unshift()

