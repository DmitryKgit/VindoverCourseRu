const mul2 = (a) => {
    return a * 2
}

// console.log(mul2(1))
// console.log(mul2(3))

const task1 = (a) => {
    console.log(mul2(mul2(a)), mul2(mul2(a)) + mul2(a))
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
    console.log(sumPair(sumPair(a, a), sumPair(b, b)), sumPair(a, -b))
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
    console.log(isEven(a) === isEven(b) && isEven(b) === isEven(c))
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
    console.log(endsWith47(a) + endsWith47(b) + endsWith47(c))
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
    if (a.length < b.length) {
        return false
    }
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
    if (offset < 0) {
        return false
    }
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

const max = (m, ...a) => {
    for (const x of a) {
        if (x > m) {
            m = x
        }
    }
    return m
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

const task15 = (f, ...args) => {
    console.log(f(...args))
}

// task15(mul2, 7)
// task15(sumPair, 4, 3)
// task15(isEven, 3)
// task15(endsWith47, 74)
// task15(abs, -22)
// task15(sign, -22)
// task15(startsWith, [1, 2, 3], [1, 2])
// task15(endsWith, [1, 2, 3], [1, 2])
// task15(sum, 1, 2, 3)
// task15(max, 3, 2, 1)

const forEach = (a, f) => {
    for (const item of a) {
        f(item)
    }
}

// forEach([4, 2, 1], (n) => {
//     console.log(n * 2)
// })
// console.log('---')
// let s = 0
// forEach([4, 2, 1], (n) => {
//     s += n
// })
// console.log(s)
// console.log('---')
// forEach([10, 20], console.log)

const task16 = (a) => {
    let cnt = 0
    forEach(a, (n) => {
        if (endsWith47(n)) {
            cnt++
        }
    })
    console.log(cnt)
}

// task16([4, 2, 5])
// task16([7, 14, 27])
// task16([17, 71, 41, 14])

const task17 = (a) => {
    let cnt = 0
    a.forEach(item => {
        if (endsWith47(item)) {
            cnt++
        }
    })
    console.log(cnt)
}

// task17([4, 2, 5])
// task17([7, 14, 27])
// task17([17, 71, 41, 14])

const find = (a, f) => {
    for (const item of a) {
        if (f(item)) {
            return item
        }
    }
}

// console.log(find([3, 5, 6, 7], isEven))
// console.log(find([22, 34, 37, 14], endsWith47))
// console.log(find([1, 2, 3], (x) => x < 0))

const task18 = (a) => {
    console.log(find(a, (n) => n % 3 === 0))
    console.log(find(a, (n) => n > 10))
}

// task18([4, 2, 5])
// task18([2, 9, 27])
// task18([17, 5, 6, 3])

const task19 = (a) => {
    console.log(a.find(item => item % 3 === 0))
    console.log(a.find(item => item > 10))
}

// task19([4, 2, 5])
// task19([2, 9, 27])
// task19([17, 5, 6, 3])

const findIndex = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        if (f(a[i])) {
            return i
        }
    }
    return -1
}

// console.log(findIndex([3, 5, 6, 7], isEven))
// console.log(findIndex([22, 34, 37, 14], endsWith47))
// console.log(findIndex([1, 2, 3], (x) => x < 0))

const task20 = (a) => {
    const x = findIndex(a, (n) => {
        return n % 3 === 0
    })
    const y = findIndex(a, (n) => {
        return n > 10
    })
    console.log(x > -1 ? a[x] : -1)
    console.log(y > -1 ? a[y] : -1)
}

// task20([4, 2, 5])
// task20([2, 9, 27])
// task20([17, 5, 6, 3])

const task21 = (a) => {
    const x = a.findIndex(item => item % 3 === 0)
    console.log(a[x] ? a[x] : -1)
    const y = a.findIndex(item => item > 10)
    console.log(a[y] ? a[y] : -1)
}

// task21([4, 2, 5])
// task21([2, 9, 27])
// task21([17, 5, 6, 3])

const map = (a, f) => {
    const arr = Array(a.length)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = f(a[i])
    }
    return arr
}

// console.log(map([4, 2, 1], mul2))
// console.log(map([4, 2, 9], isEven))
// console.log(map([4, 2, 9], (x) => x % 2))

const task22 = (a) => {
    const x = map(a, Math.abs)
    let sum = 0
    const y = map(a, (n) => {
        sum += n
        return sum
    })
    console.log(x, y)
}

// task22([1, 2, -3])
// task22([-1, 2, -3])
// task22([1, -2, 3, -4])

const task23 = (a) => {
    let sum = 0
    // console.log(a.map(item => Math.abs(item)), a.map(item => {
    console.log(a.map(Math.abs), a.map(item => {
        sum += item
        return sum
    }))
}

// task23([1, 2, -3])
// task23([-1, 2, -3])
// task23([1, -2, 3, -4])

const count = (a, f) => {
    let cnt = 0
    for (const item of a) {
        if (f(item)) {
            cnt++
        }
    }
    return cnt
}

// console.log(count([10], () => true))
// console.log(count([4, 2, 1], isEven))
// console.log(count([4, 2, 9, 74], endsWith47))
// console.log(count([-1, 2, -3, 5, 1], (x) => x > 0))

const task24 = (a) => {
    console.log(count(a, (n) => n % 2 === 0))
    console.log(count(a, n => n % 2 === 0 || n % 3 === 0))
}

// task24([2, 4, 3, 5])
// task24([6, 8, 9, 10, 11, 12])
// task24([3, 9, 27, 81])

const filter = (a, f) => {
    const arr = Array(a.length)
    let cnt = 0
    for (let i = 0; i < arr.length; i++) {
        cnt += arr[i] = f(a[i])
    }
    const res = Array(cnt)
    let idx = 0
    for (let i = 0; i < a.length; i++) {
        if (arr[i]) {
            res[idx++] = a[i]
        }
    }
    return res
}

// console.log(filter([4, 2, 1], isEven))
// console.log(filter([4, 2, 9, 74], endsWith47))
// console.log(filter([-1, 2, -3, 5, 1], (x) => x > 0))

const task25 = (a) => {
    const x = filter(a, n => !isEven(n))
    let cnt = 0
    const y = filter(a, () => cnt++ % 2 !== 0)
    console.log(x, y)
}

// task25([0, 0, 0, 0, 0])
// task25([2, 4, 3, 5])
// task25([1, 2, 3, 3, 2, 1])
// task25([2, 4, 8, 16, 32])

const task26 = (a) => {
    console.log(a.filter(item => item % 2 !== 0),
        a.filter((item, index) => index % 2 !== 0))
}

// task26([2, 4, 3, 5])
// task26([1, 2, 3, 3, 2, 1])
// task26([2, 4, 8, 16, 32])

const reduce = (a, f) => {
    let start = a[0]
    for (let i = 1; i < a.length; i++) {
        start = f(start, a[i])
    }
    return start
}

// const a = [10, 20, 30]
// const x = reduce(a, sumPair)
// console.log(a, x)
// console.log(reduce([1, 2, 5], sumPair))
// console.log(reduce([2, 3, 2], (a, b) => a * b))
// console.log(reduce([3, 5, 2, 4], (a, b) => a > b ? a : b))

const task27 = (a) => {
    console.log(reduce(a, (x, y) => x < y ? x : y))
    let cnt = 0
    console.log(reduce(a, (sum, x) => {
        return cnt++ % 2 !== 0 ? sum + x : sum
    }))
}

// task27([2, 4, 3, 5])
// task27([4, 7, 3, 3, 5, 9])
// task27([13, 8, 7, 17, 22])

// ???
const task28 = (a) => {
    console.log(a.reduce((x, y) => x < y ? x : y))
    console.log(a.reduce((sum, x, i) => {
        return i % 2 === 0 ? sum + x : sum
    }, 0))
}

// task28([2, 4, 3, 5])
// task28([4, 7, 3, 3, 5, 9])
// task28([13, 8, 7, 17, 22])

// зачем нужны замыкания?
const createCounter = () => {
    let count = 0
    return () => {
        return ++count
    }
}

// const f1 = createCounter()
// const f2 = createCounter()
// console.log(f1())
// console.log(f1())
// console.log(f2())
// console.log(f2())
// console.log(f1(), f2())

const createSummator = () => {
    let sum = 0
    return (n) => {
        sum += n
        return sum
    }
}

// const f1 = createSummator()
// const f2 = createSummator()
// console.log(f1(4))
// console.log(f1(6))
// console.log(f2(2))
// console.log(f2(9))
// console.log(f1(3), f2(7))

// не понял
const createState = (state) => {
    return [() => state, a => {
        state = a
    }]
}

// const [getValue1, setValue1] = createState(1)
// const [getValue2, setValue2] = createState(false)
// console.log(getValue1(), getValue2())
// console.log(getValue1(), getValue2())
// setValue1(2)
// console.log(getValue1(), getValue2())
// setValue2(true)
// console.log(getValue1(), getValue2())

const partial = (f, ...args) => {
    return (...args2) => {
        return f(...args, ...args2)
    }
}

// const sum2 = partial(sumPair, 2)
// console.log(sum2(4))
// console.log(sum2(7))
// const max1 = partial(max, 4, 2, 5)
// const max2 = partial(max1, 1, 3)
// console.log(max2(3, 1))
// console.log(max2(3, 6))

const task29 = (a, b = 2) => {
    console.log(a * b)
}

// task29(3, 4)
// task29(4)
// task29(0)

const factorial = (n) => {
    if (n === 1) {
        return 1
    }
    return factorial(n - 1) * n
}

// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))
// console.log(factorial(6))

const includesRecursive = (a, n, i = 0) => {
    if (i === a.length) {
        return false
    }
    if (a[i] === n) {
        return true
    }
    return includesRecursive(a, n, i + 1)
}

// console.log(includesRecursive([5, 2, 3, 1], 3))
// console.log(includesRecursive([5, 2, 3, 1], 4))
