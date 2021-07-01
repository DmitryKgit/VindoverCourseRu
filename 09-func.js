const mul2 = (a) => {
    return a * 2
}

// console.log(mul2(1))
// console.log(mul2(3))

const task1 = (a) => {
    console.log(mul2(a) * 2, mul2(a) * 3)
}

// task1(2)
// task1(-1)
// task1(5)

const sumPair = (a, b) => {
    return a + b
}

// console.log(sumPair(1, 2))
// console.log(sumPair(5, -3))

const task2 = (a, b) => {
    console.log(sumPair(a + a, b + b), sumPair(a, -b))
}

// task2(5, 3)
// task2(10, 20)

const isEven = (a) => {
    return a % 2 === 0
}

// console.log(isEven(5))
// console.log(isEven(6))

const task3 = (a, b, c) => {
    console.log(isEven(a) && isEven(b) && isEven(c))
    console.log(!isEven(a) || !isEven(b) || !isEven(c))
    console.log((isEven(a) && isEven(b) && isEven(c)) || (!isEven(a) && !isEven(b) && !isEven(c)))
    console.log('------------------------------')
}

// task3(5, 3, 7)
// task3(4, 2, 6)
// task3(5, 1, 2)

const endsWith47 = (a) => {
    a %= 10
    return a === 4 || a === 7
}

// console.log(endsWith47(7))
// console.log(endsWith47(14))
// console.log(endsWith47(21))
// console.log(endsWith47(70))
// console.log(endsWith47(27))
// console.log(endsWith47(304))

const task4 = (a, b, c) => {
    console.log((+endsWith47(a)) + (+endsWith47(b)) + (+endsWith47(c)))
    console.log(endsWith47(a) && endsWith47(b) && !endsWith47(c))
}

// task4(5, 3, 7)
// task4(14, 17, 5)
// task4(4, 804, 77)

const abs = (a) => {
    return a < 0 ? -a : a === 0 ? 0 : a
}

// console.log(abs(10))
// console.log(abs(-14))
// console.log(abs(-0))
// console.log(abs(0))

const sign = (a) => {
    if (a < 0) {
        return -1
    }
    if (a === 0) {
        return 0
    }
    return 1
}

// console.log(sign(10))
// console.log(sign(-14))
// console.log(sign(-0))
// console.log(sign(0))

const arraysEqual = (a, b) => {
    if (a.length !== b.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
}

// console.log(arraysEqual([1, 2, 3], [1, 2, 3]))
// console.log(arraysEqual([3, 2, 1], [1, 2, 3]))
// console.log(arraysEqual([1, 2, 3], [1, 2]))
// console.log(arraysEqual([1, 2], [1, 2, 3]))

const startsWith = (a, b) => {
    for (let i = 0; i < b.length; i++) {
        if (b[i] !== a[i]) {
            return false
        }
    }
    return true
}

// console.log(startsWith([1, 2, 3], [1, 2, 3]))
// console.log(startsWith([1, 2, 3], [1, 2]))
// console.log(startsWith([1, 2, 3], []))
// console.log(startsWith([1, 2, 3], [2, 3]))
// console.log(startsWith([1, 2, 3], [1, 3]))
// console.log(startsWith([1, 2, 3], [1, 2, 3, 4]))

const endsWith = (a, b) => {
    const offset = a.length - b.length
    for (let i = b.length - 1; i >= 0; i--) {
        // console.log(b[i], a[i + offset])
        if (b[i] !== a[i + offset]) {
            return false
        }
    }
    return true
}

// console.log(endsWith([1, 2, 3], [1, 2, 3]))
// console.log(endsWith([1, 2, 3], [1, 2]))
// console.log(endsWith([1, 2, 3], []))
// console.log(endsWith([0, 1, 2, 3], [2, 3]))
// console.log(endsWith([1, 2, 3], [1, 3]))
// console.log(endsWith([1, 2, 3], [1, 2, 3, 4]))

// console.log(sumPair(...[1, 2]))
// console.log(sumPair(...[3, 4]))

const task11 = (a) => {
    for (const item of a) {
        console.log(sumPair(...item))
    }
}

// task11([[1, 2]])
// task11([[3, 4], [5, 6]])
// task11([[7, 6], [5, 4], [3, 2]])

const sum = (...a) => {
    let sum = 0
    for (const item of a) {
        sum += item
    }
    return sum
}

// console.log(sum())
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(2, 1, 3))

const task12 = (a) => {
    console.log(sum(...a))
}

// task12([4, 2, 5])
// task12([7, 2, 3])
// task12([-1])

const max = (...a) => {
    return Math.max(...a)
}

// console.log(max(1))
// console.log(max(1, 2))
// console.log(max(2, 1))
// console.log(max(2, 1, 3))
// console.log(max(2, 3, 1))
// console.log(max(-2, -3, -1))

const task13 = (a) => {
    console.log(max(...a))
}

// task13([4, 2, 5])
// task13([7, 2, 3])
// task13([-1])

const task14 = (f, args) => {
    console.log(f(...args))
}

// task14(mul2, [7])
// task14(sumPair, [4, 3])
// task14(isEven, [3])
// task14(endsWith47, [74])
// task14(abs, [-22])
// task14(sign, [-22])
// task14(startsWith, [[1, 2, 3], [1, 2]])
// task14(endsWith, [[1, 2, 3], [1, 2]])
// task14(sum, [1, 2, 3])
// task14(max, [3, 2, 1])
