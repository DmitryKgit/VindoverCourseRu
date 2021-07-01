const task1 = (a) => {
    if (a > 0) {
        console.log(true)
    }
}

// task1(5)
// task1(0)
// task1(-1)

const task2 = (a) => {
    if (a > 0) {
        console.log(a)
    }
    else {
        console.log(-a)
    }
}

// task2(5)
// task2(0)
// task2(-1)

const task3 = (a) => {
    console.log(a > 0 ? a : -a)
}

// task3(5)
// task3(0)
// task3(-1)

const task4 = (a) => {
    if (a > 0) {
        a++
    }
    console.log(a)
}

// task4(5)
// task4(0)
// task4(-1)

const task5 = (a) => {
    if (a > 0) {
        a++
    }
    else {
        a -= 2
    }
    console.log(a)
}

// task5(5)
// task5(0)
// task5(-1)

const task6 = (a) => {
    a += a > 0 ? 1 : -2
    console.log(a)
}

// task6(5)
// task6(0)
// task6(-1)

const task7 = (a) => {
    if (a > 0) {
        a++
    }
    else if (a < 0) {
        a -= 2
    }
    else {
        a = 10
    }
    console.log(a)
}

// task7(5)
// task7(0)
// task7(-1)

const task8 = (a, b) => {
    if (a > b) {
        console.log(1)
    }
    else if (a < b) {
        console.log(2)
    }
    else {
        console.log(0)
    }
}

// task8(20, 15)
// task8(15, 20)
// task8(10, 10)

const task9 = (a, b) => {
    // console.log(Math.abs(a - b))
    const dif = a - b
    if (dif >= 0) {
        console.log(dif)
    }
    else {
        console.log(-dif)
    }
}

// task9(20, 15)
// task9(15, 20)
// task9(10, 10)

const task10 = (r, m, s) => {
    const total = m + s
    if (r >= total) {
        console.log(3, r - total)
    }
    else if (r >= m) {
        console.log(2, r - m)
    }
    else if (r >= s) {
        console.log(1, r - s)
    }
    else {
        console.log(0, r)
    }
}

// task10(100, 30, 40)
// task10(100, 30, 70)
// task10(100, 50, 100)
// task10(100, 120, 100)
// task10(100, 120, 120)

const task11 = (a, b) => {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}

// task11(5, 6)
// task11(7, 5)
// task11(3, 3)

const task12 = (a, b) => {
    console.log(a > b ? a : b)
}

// task12(5, 6)
// task12(7, 5)
// task12(3, 3)

const task13 = (a, b, c) => {
    if (a % 2 === 0) {
        b++
        c++
    }
    if (b % 2 === 0 && c % 2 !== 0) {
        a -= 2
    }
    console.log(a, b, c)
}

// task13(4, 5, 6)
// task13(4, 3, 5)
// task13(7, 6, 5)

const task14 = (a, b, c) => {
    let cnt = 0
    if (a > 0) {
        cnt++
    }
    if (b > 0) {
        cnt++
    }
    if (c > 0) {
        cnt++
    }
    console.log(cnt)
}

// task14(4, 5, 6)
// task14(-9, 4, 7)
// task14(1, 0, -1)
// task14(-2, -1, 0)

const task15 = (a, b, c) => {
    let cnt = 0
    if (a % 2 === 0 || a % 10 === 7) {
        cnt++
    }
    if (b % 2 === 0 || b % 10 === 7) {
        cnt++
    }
    if (c % 2 === 0 || c % 10 === 7) {
        cnt++
    }
    console.log(cnt)
}

// task15(10, 17, 25)
// task15(3, 7, 9)
// task15(6, 7, 8)
// task15(11, 13, 15)

const task16 = (a, b, c) => {
    let sum = 0
    if (a % 2 === 0) {
        sum += a
    }
    if (b % 2 === 0) {
        sum += b
    }
    if (c % 2 === 0) {
        sum += c
    }
    console.log(sum)
}

// task16(4, 5, 6)
// task16(9, 4, 7)
// task16(6, 2, 7)
// task16(1, 3, 5)

const task17 = (a, b, c) => {
    let cnt = 0
    let sum = 0
    if (a % 10 === 7) {
        sum += a
        cnt++
    }
    if (b % 10 === 7) {
        sum += b
        cnt++
    }
    if (c % 10 === 7) {
        sum += c
        cnt++
    }
    console.log(cnt !== 0 ? sum / cnt : 0)
}

// task17(7, 17, 37)
// task17(7, 71, 17)
// task17(13, 27, 15)
// task17(25, 1, 73)

const task18 = (a, b, c) => {
    let max = a
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c
    }
    console.log(max)
}

// task18(5, 8, 2)
// task18(3, 6, 6)
// task18(-1, -2, -3)

const task19 = (a, b, c) => {
    let max = a
    let iMax = 1
    if (max < b) {
        max = b
        iMax = 2
    }
    if (max < c) {
        max = c
        iMax = 3
    }
    console.log(iMax, max)
}

// task19(10, 8, 3)
// task19(3, 6, 6)
// task19(-1, -2, 0)

const task20 = (a, b, c) => {
    let min = a
    let iMin = 1
    if (min >= b) {
        min = b
        iMin = 2
    }
    if (min >= c) {
        min = c
        iMin = 3
    }
    console.log(iMin)
}

// task20(2, 8, 3)
// task20(6, 6, 7)
// task20(-5, 4, -7)

const task21 = (a, b, c) => {
    let min = a
    let max = a
    if (max <= b) {
        max = b
    }
    else {
        min = b
    }
    if (max < c) {
        max = c
    }
    if (min > c) {
        min = c
    }
    console.log(max - min)
}

// task21(5, 8, 2)
// task21(3, 5, 6)
// task21(20, 5, 10)

const task22 = (a, b, c) => {
    let min = a
    let max = a
    if (max <= b) {
        max = b
    }
    else {
        min = b
    }
    if (max < c) {
        max = c
    }
    if (min > c) {
        min = c
    }
    console.log(a % 4 === 0 || b % 4 === 0 || c % 4 === 0 ? max : min)
}

// task22(3, 4, 5)
// task22(5, 6, 7)
// task22(4, 24, 14)

const task23 = (a, b) => {
    if (a > b) {
        [a, b] = [b, a]
    }
    console.log(a, b)
}

// task23(5, 7)
// task23(8, 1)
// task23(7, 7)

const task24 = (a, b, c) => {
    if (a > b) {
        [a, b] = [b, a]
    }
    if (b > c) {
        [b, c] = [c, b]
    }
    if (a > b) {
        [a, b] = [b, a]
    }
    console.log(a, b, c)
}

// task24(5, 8, 2)
// task24(3, 5, 6)
// task24(-1, -2, -3)

const task25 = (a, b, c) => {
    if (a < b) {
        [a, b] = [b, a]
    }
    if (b < c) {
        [b, c] = [c, b]
    }
    if (a < b) {
        [a, b] = [b, a]
    }
    console.log(a, b, c)
}

// task25(5, 8, 2)
// task25(3, 5, 6)
// task25(-1, -2, -3)

const task26 = (a, b, c) => {
    // (a + b + c) % 2 !== 0
    //     ? console.log(a * 2, b * 2, c * 2)
    //     : console.log(-a, -b, -c)
    const q = (a + b + c) % 2 !== 0 ? 2 : -1
    console.log(a * q, b * q, c * q)
}

// task26(1, 2, 3)
// task26(2, 3, 4)
// task26(3, 3, 3)
