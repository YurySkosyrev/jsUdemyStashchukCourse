/** ЗАДАЧА 1 - Объявление переменной
 *
 * 1. Объявите переменную "myCountry" и присвойте ей значение -
 * строку с вашей страной
 *
 * 2. В дальнейшем не планируется присваивание нового значения этой переменной
 *
 * 3. Выведите значение переменной в консоль
 */
const myCountry = "Russia"

console.log(myCountry)

/** ЗАДАЧА 2 - Присваивание нового значения переменной
 *
 * 1. Объявите переменную "isStudent" без присваивания значения
 *
 * 2. Присвойте переменной "isStudent" правдивое логическое значение
 *
 * 3. Выведите значение переменной в консоль
 *
 * 4. Присвойте переменной "isStudent" ложное логическое значение
 *
 * 5. Выведите значение переменной в консоль
 */

let isStudent

isStudent = true

console.log(isStudent)

isStudent = false

console.log(isStudent)

/** ЗАДАЧА 3 - Умножение двух чисел
 *
 * 1. Объявите две переменные и присвойте им любые числа
 *
 * 2. Объявите еще одну переменную и присвойте ей результат
 * умножения двух предыдущих переменных
 *
 * 3. Выведите значение последней переменной в консоль
 */

const number1 = 2
const number2 = 3

const mult = number1*number2

console.log(mult)

/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Yury'
const mySurname = 'Skosyrev'
const myProfession = 'estimator'

const str = `My name is ${myName} ${mySurname} ans I\`m ${myProfession}`

console.log(str)

/** ЗАДАЧА 5 - Комментарии
 *
 * 1. Добавьте однострочный комментарий
 *
 * 2. Объявите любую переменную и опишите ее
 * с помощью комментария в той же строке
 *
 * 3. Создайте многострочный комментарий
 */

// This is new comment

// commentVar
const commentVar = true // true value

/** This is multiline
 *
 *  comment
 * 
 */

/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const stringVar = 'Line'
const numberVar = 3
const booleanVar = true
const nullVar = null
let undefinedVar
const objVar = {
    field : 1
}
const arrayVar = [1,2,3]

console.log(typeof(stringVar))
console.log(typeof(numberVar))
console.log(typeof(booleanVar))
console.log(typeof(nullVar))
console.log(typeof(objVar))
console.log(typeof(arrayVar))

/** ЗАДАЧА 7 - Объявление и вызов функции
 *
 * 1. Объявите функцию, использую ключевое слово "function"
 *
 * 2. Не указывайте параметры функции
 *
 * 3. Внутри функции выведите в консоль своё имя
 *
 * 4. Вызовите функцию
 */

function myFunc() {
    console.log("Yury")
}

myFunc()

/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const myFunc = function (name) {
    return `Привет, ${name}`
}

console.log(myFunc('Yury'))
console.log(myFunc('ne Yury'))