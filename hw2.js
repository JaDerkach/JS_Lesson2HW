// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr=[
    100, "name", "book","page","username", 323.14, -0.33, 42100, `okten`, `Lesson`
]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// ================================================================================

let descriptionBooks = {

    title: 'sun',
    pageCount: 300,
    genre: `action`,
    authors: {name: `vasia`, age: 85}
}
console.log(descriptionBooks)

// -------------------------------------------------------------------------------

let users=[
    { name:'iaroslav' ,username: 'jarek',password:'21'},
    { name:'vasia' ,username: 'vassul',password:'13'},
    { name:'ivan' ,username: 'vanja',password:'22'},
    { name:'katja' ,username: 'ket',password:'145'},
    { name:'orest' ,username: 'orest01',password:'1254'},
    { name:'pelup' ,username: 'pelup5',password:'333'},
    { name:'max' ,username: 'max12',password:'021'},
    { name:'oleg' ,username: 'oleg25',password:'54'},
    { name:'tomara' ,username: 'toma',password:'458'},
    { name:'petro' ,username: 'petya01',password:'1578'},
]
console.log(users [0].password)
console.log(users [1].password)
console.log(users [2].password)
console.log(users [3].password)
console.log(users [4].password)
console.log(users [5].password)
console.log(users [6].password)
console.log(users [7].password)
console.log(users [8].password)
console.log(users [9].password)

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=+prompt('123')
if (x===1) {
    console.log(true);
}else if (x===-3) {
    console.log(true);
} else if (x===0) {
    console.log(false);
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).





// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).



// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.



// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.



//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// ----------------------------------------------------------------------------------------





