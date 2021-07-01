const task1 = () => {
    console.log(true, false)
}

// task1()

const task2 = (a) => {
    console.log(a > 0)
}

// task2(5)
// task2(0)
// task2(-4)

const task3 = (a) => {
    console.log(a % 2 === 0)
}

// task3(5)
// task3(0)
// task3(6)

const task4 = (a, b) => {
    console.log(a % b !== 0)
}

// task4(5, 3)
// task4(0, 2)
// task4(15, 3)

const task5 = (a) => {
    const end = a % 10
    console.log(end === 4 || end === 7)
}

// task5(4)
// task5(57)
// task5(75)

const task6 = (a) => {
    console.log(a % 2 === 0 && a % 10 !== 4)
}

// task6(14)
// task6(57)
// task6(42)

const task7 = (a, b) => {
    console.log(a > 0 && b > 0)
}

// task7(5, 6)
// task7(0, 3)
// task7(-1, -2)

const task8 = (a, b) => {
    console.log(a > 0 || b > 0)
}

// task8(5, 6)
// task8(0, 3)
// task8(-1, -2)

const task9 = (a, b) => {
    console.log(a * b < 0)
}

// task9(5, -6)
// task9(-5, 6)
// task9(5, 6)
// task9(-5, -6)
// task9(5, 0)

const task10 = (a, b, c) => {
    console.log(a < b && b < c)
}

// task10(5, 10, 11)
// task10(5, 11, 10)
// task10(7, 7, 7)

const task11 = (a, b, c) => {
    console.log((b > a && b < c) || (b < a && b > c))
}

// task11(5, 10, 11)
// task11(11, 10, 5)
// task11(11, 10, 10)

const task12 = (a, b) => {
    // console.log(Math.abs(a - b) > 1)
    console.log(a - b > 1 || b - a > 1)
}

// task12(20, 15)
// task12(20, 22)
// task12(10, 11)
// task12(10, 10)

const task13 = (a) => {
    console.log(a < 100 && a > 9)
}

// task13(50)
// task13(9)
// task13(100)

const task14 = (a) => {
    console.log((a < 1000 && a > 99 && a % 2 !== 0) ||
                (a < 100 && a > 9 && a % 2 === 0))
}

// task14(8)
// task14(9)
// task14(51)
// task14(52)
// task14(100)
// task14(101)
// task14(9998)
// task14(9999)

const task15 = (a) => {
    // const a1 = Math.floor(a / 1000)
    // const a2 = Math.floor((a - a1 * 1000) / 100) 
    // const a3 = Math.floor(a % 100 / 10)
    // const a4 = a % 10
    // console.log(a1 * 10 + a2 === a4 * 10 + a3)
    const a12 = Math.floor(a / 100)
    const a43 = a % 10 * 10 + Math.floor(a % 100 / 10)
    console.log(a12 === a43)
}

// task15(1001)
// task15(9999)
// task15(1233)

const task16 = (a, b, c) => {
    console.log(a + b > c && a + c > b && b + c > a)
}

// task16(1, 1, 1)
// task16(3, 4, 5)
// task16(1, 2, 3)
// task16(7, 3, 3)

const task17 = (a) => {
    console.log((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0)
}

// task17(2020)
// task17(1996)
// task17(1990)
// task17(2000)
// task17(1900)
