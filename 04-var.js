const task1 = (a) => {
    const [x, y] = [Math.floor(a / 10), a % 10]
    console.log(x + y, x * y)
}

// task1(38)
// task1(12)

const task2 = (a) => {
    console.log(++a)
    console.log(--a)
}

// task2(5)
// task2(12)

const task3 = (a, b) => {
    console.log(++a, --b)
    console.log(a, b)
    console.log(a++, b--)
    console.log(a, b)
}

// task3(5, 5)
// task3(10, 20)

const task4 = (a, b) => {
    console.log(a += 2, b -= a)
}

// task4(5, 9)
// task4(-1, 0)
// task4(-4, -6)

const task5 = (a, b) => {
    console.log(a /= 2, b *= a)
}

// task5(5, 9)
// task5(-1, 0)
// task5(-4, -6)

const task6 = (a, b) => {
    console.log(a %= 3, b **= a)
}

// task6(5, 9)
// task6(1, 7)
// task6(6, 10)

const task7 = (a, b) => {
    const c = (a * a + b * b) ** 0.5
    console.log(c, a + b + c)
}

// task7(3, 4)
// task7(5, 7)

const task8 = (a, b) => {
    a += b
    b = a - b
    a -= b
    console.log(a, b)
}

// task8(5, 7)
// task8(-5, 3)

const task9 = (a, b) => {
    const buf = a
    a = b
    b = buf
    console.log(a, b)
}

// task9(5, 7)
// task9(-5, 3)

const task10 = (a, b) => {
    [a, b] = [b, a]
    console.log(a, b)
}

// task10(5, 7)
// task10(-5, 3)

const task11 = (a, b, c) => {
    const buf = a
    a = b
    b = c
    c = buf
    console.log(a, b, c)
}

// task11(1, 4, 7)
// task11(10, 15, 20)

const task12 = (a, b, c) => {
    [a, b, c] = [b, c, a]
    console.log(a, b, c)
}

// task12(1, 4, 7)
// task12(10, 15, 20)

const task13 = (a) => {
    console.log(a *= a)
    console.log(a *= a)
    console.log(a *= a)
}

task13(1)
task13(2)
task13(10)
