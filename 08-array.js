const A = (n) => {
    const a = Array.isArray(n) ? n : Array(n)
    const proxy = new Proxy(a, {
        get: (_, i) => {
            if (i === Symbol.iterator) {
                return a[i]
            }
            if (~~i === +i) {
                if (i < 0 || i >= a.length) {
                    throw new Error('Выход за границы массива: обращение по индексу ' + i + ' при длине ' + a.length)
                }
            }
            else if (i !== 'length') {
                throw new Error('Обращение к ' + i)
            }
            return a[i]
        },
        set: (_, i, value) => {
            if (~~i !== +i) {
                throw new Error('Невозможно записать значение в поле ' + i)
            }
            else if (i < 0 || i >= a.length) {
                throw new Error('Выход за границы массива: попытка записи по индексу ' + i + ' при длине ' + a.length)
            }
            a[i] = value
        }
    })
    return proxy
}

const task1 = (n) => {
    const a = A(n)
    for (let i = 0; i < a.length; i++) {
        a[i] = 0
    }
    console.log(a)
}

// task1(0)
// task1(1)
// task1(3)

const task2 = (n) => {
    console.log(Array(n).fill(0))
}

// task1(0)
// task1(1)
// task1(3)

const task3 = (n) => {
    console.log(n[0], n[n.length - 1])
}

// task3(A([1]))
// task3(A([2, 3]))
// task3(A([4, 5, 6, 7]))

const task4 = (n) => {
    const arr = Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = i
    }
    console.log(arr)
}

// task4(0)
// task4(1)
// task4(3)

const task5 = (n) => {
    const arr = Array(n)
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i
    }
    console.log(arr)
}

// task5(0)
// task5(1)
// task5(3)

const task6 = (n) => {
    const arr = Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = n
    }
    console.log(arr)
}

// task6(0)
// task6(1)
// task6(3)

const task7 = (n) => {
    console.log(Array(n).fill(n))
}

// task7(0)
// task7(1)
// task7(3)

const task8 = (n) => {
    const arr = Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = n - i
    }
    console.log(arr)
}

// task8(0)
// task8(1)
// task8(3)

const task9 = (n) => {
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = n - i - 1
    }
    console.log(arr)
}

// task9(0)
// task9(1)
// task9(3)

const task10 = (a) => {
    for (let i = 0; i < a.length; i++) {
        a[i] *= 2
    }
    console.log(a)
}

// task10(A([]))
// task10(A([1]))
// task10(A([-2, 0, 5]))

const task11 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        a[i] *= 2
    }
    console.log(a)
}

// task11(A([]))
// task11(A([1, 1, 1]))
// task11(A([1, 2, 2, 1]))

const task12 = (a) => {
    for (let i = 0; i < a.length; i += 2) {
        a[i] *= 2
    }
    console.log(a)
}

// task12(A([]))
// task12(A([1, 1, 1]))
// task12(A([1, 2, 2, 1]))

const task13 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            a[i] *= 2
        }
    }
    console.log(a)
}

// task13(A([]))
// task13(A([1, 1, 1]))
// task13(A([1, 2, 3, 3]))

const task14 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) {
            a[i] *= 2
        }
        else {
            a[i] /= 2
        }
    }
    console.log(a)
}

// task14(A([]))
// task14(A([1, 1, 2]))
// task14(A([2, 4, 3, 5]))

const task15 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] = 0
        }
    }
    console.log(a)
}

// task15(A([]))
// task15(A([-1, 1, 2]))
// task15(A([-1, 2, 3, -4]))

const task16 = (a) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            a[i] *= -1
        }
    }
    console.log(a)
}

// task16(A([]))
// task16(A([-1, 1, 2]))
// task16(A([-1, 2, 3, -4]))

const task17 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        console.log(a[i])
    }
    console.log('-----------------------')
}

// task17(A([1, 2, 4, 3]))
// task17(A([2, 3, 4]))
// task17(A([1, 2, 3, 4, 5, 6]))

const task18 = (a) => {
    for (const item of a) {
        if (item % 2 === 0) {
            console.log(item)
        }
    }
    console.log('-----------------------')
}

// task18(A([1, 2, 4, 3]))
// task18(A([2, 3, 4]))
// task18(A([1, 2, 3, 4, 5, 6]))

const task19 = (a) => {
    for (const item of a) {
        const x = item % 10
        if (x === 4 || x === 7) {
            console.log(item)
        }
    }
    console.log('-----------------------')
}

// task19(A([41, 76, 0]))
// task19(A([2, 3, 4]))
// task19(A([4, 24, 107]))

const task20 = (a) => {
    for (const item of a) {
        if (item % 2 !== 0 && item % 3 !== 0) {
            console.log(item)
        }
    }
    console.log('-----------------------')
}

// task20(A([10, 9, 8]))
// task20(A([2, 3, 4, 5, 6]))
// task20(A([1, 5, 7, 9]))

const task21 = (a, x) => {
    let result = false
    for (const item of a) {
        if (item === x) {
            result = true
            break
        }
    }
    console.log(result)
}

// task21(A([]), 1)
// task21(A([10, 9, 9]), 9)
// task21(A([2, 3, 4, 5, 6]), 7)

const task22 = (a, x) => {
    console.log(a.includes(x))
}

// task22([], 1)
// task22([10, 9, 9], 9)
// task22([2, 3, 4, 5, 6], 7)

const task23 = (a, x) => {
    let result = -1
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            result = i
            break
        }
    }
    console.log(result)
}

// task23(A([]), 1)
// task23(A([10, 9, 9]), 9)
// task23(A([7, 3, 4, 5, 6]), 7)

const task24 = (a, x) => {
    console.log(a.indexOf(x))
}

// task24([], 1)
// task24([10, 9, 9], 9)
// task24([7, 3, 4, 5, 6], 7)

const task25 = (a, x) => {
    let result = -1
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === x) {
            result = i
            break
        }
    }
    console.log(result)
}

// task25(A([]), 1)
// task25(A([10, 9, 9]), 9)
// task25(A([7, 3, 4, 5, 6]), 7)

const task26 = (a, x) => {
    console.log(a.lastIndexOf(x))
}

// task26([], 1)
// task26([10, 9, 9], 9)
// task26([7, 3, 4, 5, 6], 7)

const task27 = (n) => {
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = i * 2
    }
    console.log(arr)
}

// task27(0)
// task27(1)
// task27(3)

const task28 = (n) => {
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = i * 2 + 1
    }
    console.log(arr)
}

// task28(0)
// task28(1)
// task28(3)

const task29 = (n) => {
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = (i + 1) * 2
    }
    console.log(arr)
}

// task29(0)
// task29(1)
// task29(3)

const task30 = (a, b) => {
    a[0] = b[b.length - 1]
    b = a
    console.log(b)
}

// const a = A([5, 6, 7])
// const b = A([5, 6, 7])
// task30(a, b)
// console.log(a, b) // не понял, почему b = [5, 6, 7]
// const c = b
// task30(b, c)
// console.log(b, c)

const task31 = (a) => {
    const arr = A(a.length)
    for (let i = 0; i < a.length; i++) {
        arr[i] = a[i] * 2
    }
    console.log(arr)
}

// task31(A([1]))
// task31(A([1, 2]))
// task31(A([5, 10, 5]))

const task32 = (a) => {
    const n = a.length
    const arr = A(n)
    let x = 1
    for (let i = 0; i < n; i++) {
        arr[i] = a[i] * x
        x = 2 - i % 2
    }
    console.log(arr)
}

// task32(A([1]))
// task32(A([1, 2, 3]))
// task32(A([1, 1, 1, 1]))

const task33 = (a) => {
    const n = a.length
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = a[i] % 2 !== 0 ? a[i] * 2 : a[i]
    }
    console.log(arr)
}

// task33(A([1]))
// task33(A([1, 3, 2]))
// task33(A([1, 1, 1, 1]))

const task34 = (a, b) => {
    const n = a.length
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = a[i] + b[i]
    }
    console.log(arr)
}

// task34(A([1, 2]), A([2, 3]))
// task34(A([1, 2, 3]), A([3, 2, 1]))
// task34(A([1, 1, 1]), A([3, 2, 1]))

const task35 = (a, b) => {
    const n = a.length
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = a[i] > b[i] ? a[i] : b[i]
    }
    console.log(arr)
}

// task35(A([1, 2]), A([2, 3]))
// task35(A([1, 2, 3]), A([3, 2, 1]))
// task35(A([1, 1, 1]), A([3, 2, 1]))

const task36 = (a, b) => {
    const n = a.length
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = Math.abs(a[i] - b[i])
    }
    console.log(arr)
}

// task36(A([1, 2]), A([2, 3]))
// task36(A([1, 2, 3]), A([3, 2, 1]))
// task36(A([1, 1, 1]), A([3, 2, 1]))

const task37 = (a) => {
    const n = a.length
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = a[i] > 0
    }
    console.log(arr)
}

// task37(A([1]))
// task37(A([1, -2, 0]))
// task37(A([0, 1, 2]))

const task38 = (x, y) => {
    const n = y - x + 1
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = x + i
    }
    console.log(arr)
}

// task38(0, 1)
// task38(5, 7)
// task38(-2, 0)

const task39 = (x, y) => {
    const n = y - x - 1
    const arr = A(n)
    for (let i = 0; i < n; i++) {
        arr[i] = y - i - 1
    }
    console.log(arr)
}

// task39(0, 1)
// task39(5, 7)
// task39(-2, 2)

const task40 = (n) => {
    const len = n * 2
    const arr = A(len)
    // for (let i = 0; i < len; i++) {
    //     arr[i] = Math.ceil((i + 1) / 2)
    // }
    let x = 1
    for (let i = 0; i < len; i += 2) {
        arr[i] = arr[i + 1] = x
        x++
    }
    console.log(arr)
}

// task40(1)
// task40(2)
// task40(3)

const task41 = (n) => {
    const arr = A(n)
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += i + 1
        arr[i] = sum
    }
    console.log(arr)
}

// task41(1)
// task41(3)
// task41(5)

const task42 = (a) => {
    // let prev = a[0]
    // let cur = a[1]
    // let maxSum = prev + cur
    // for (let i = 2; i < a.length; i++) {
    //     prev = cur
    //     cur = a[i]
    //     const sum = prev + cur
    //     if (maxSum < sum) {
    //         maxSum = sum
    //     }
    // }
    let maxSum = a[0] + a[1]
    for (let i = 2; i < a.length; i++) {
        const sum = a[i] + a[i - 1]
        maxSum = sum > maxSum ? sum : maxSum
    }
    console.log(maxSum)
}

// task42(A([2, 3]))
// task42(A([2, 1, 3, 0]))
// task42(A([2, 7, 0, 2, 9]))
// task42(A([-2, -7, 0, -2, -9]))

const task43 = (n) => {
    const arr = A(n)
    arr[0] = arr[1] = 1
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]
    }
    console.log(arr)
}

// task43(2)
// task43(5)
// task43(7)

const task44 = (a) => {
    for (let i = 1; i < a.length; i += 2) {
        [a[i - 1], a[i]] = [a[i], a[i - 1]]
    }
    console.log(a)
}

// task44(A([1, 2, 3, 4]))
// task44(A([1, 2, 2, 1, 3]))
// task44(A([1, 5, 7]))

const task45 = (a) => {
    const n = a.length
    const arr = A(n)
    arr[n - 1] = a[n - 1]
    for (let i = 1; i < n; i += 2) {
        arr[i - 1] = a[i]
        arr[i] = a[i - 1]
    }
    console.log(arr)
}

// task45(A([1, 2]))
// task45(A([1, 2, 3]))
// task45(A([10, 5, 1, 0]))

const task46 = (a) => {
    const n = a.length
    const arr = A(n)
    arr[0] = a[0]
    for (let i = 1; i < n; i++) {
        arr[i] = a[i] + arr[i - 1]
    }
    console.log(arr)
}

// task46(A([1, 1, 1]))
// task46(A([2, 2, 2]))
// task46(A([10, 5, 1, 0]))

const task47 = (a) => {
    for (let i = 0, j = a.length - 1; i < j; i++, j--) {
        [a[i], a[j]] = [a[j], a[i]]
    }
    console.log(a)
}

// task47(A([1]))
// task47(A([10, 20, 15]))
// task47(A([5, 3, 7, 4]))

const task48 = (a) => {
    console.log(a.reverse())
}

// task48([1])
// task48([10, 20, 15])
// task48([5, 3, 7, 4])

const task49 = (a) => {
    const arr = A(a.length)
    for (let i = 0, j = a.length - 1; i < a.length; i++, j--) {
        arr[i] = a[j]
    }
    console.log(arr)
}

// task49(A([1]))
// task49(A([1, 0, 2]))
// task49(A([9, 7, 4]))

const task50 = (a) => {
    for (let i = 0, j = a.length / 2; j < a.length; i++, j++) {
        [a[i], a[j]] = [a[j], a[i]]
    }
    console.log(a)
}

// task50(A([1, 2]))
// task50(A([1, 2, 3, 4]))
// task50(A([1, 2, 3, 3, 2, 1]))

const task51 = (a) => {
    let sum = a[0]
    let max = a[0]
    for (let i = 1; i < a.length; i++) {
        sum += a[i]
        if (max < sum) {
            max = sum
        }
    }
    console.log(max)
}

// task51(A([2, 3]))
// task51(A([-1, -2, -3]))
// task51(A([2, 3, -1, 0]))
// task51(A([2, 3, -1, 0, 2]))

const task52 = (a) => {
    const arr = A(Array(6).fill(0))
    for (const x of a) {
        arr[x]++
    }
    console.log(arr)
}

// task52(A([]))
// task52(A([0, 0, 0, 2, 3, 3]))
// task52(A([5, 2, 4, 3, 1, 0]))

const task53 = (a) => {
    const buf = a[a.length - 1]
    for (let i = a.length - 1; i > 0; i--) {
        a[i] = a[i - 1]
    }
    a[0] = buf
    console.log(a)
}

// task53(A([1, 2, 3]))
// task53(A([4, 1, 2, 3]))
// task53(A([3, 4, 1, 2]))

const task54 = (a) => {
    const buf = a[0]
    for (let i = 0; i < a.length - 1; i++) {
        a[i] = a[i + 1]
    }
    a[a.length - 1] = buf
    console.log(a)
}

// task54(A([1, 2, 3]))
// task54(A([4, 1, 2, 3]))
// task54(A([3, 4, 1, 2]))

const task55 = (a) => {
    for (let i = 0; i < a.length - 1; i++) {
        a[i] = a[i] > a[i + 1] ? 0 : a[i]
    }
    console.log(a)
}

// task55(A([1, 2]))
// task55(A([3, 2, 1]))
// task55(A([1, 2, 1, 2]))

const task56 = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        a[i] = a[i] > a[i - 1] ? 0 : a[i]
    }
    console.log(a)
}

// task56(A([1, 2, 3, 4])) 0 1  1 3  2 5  3 7
// task56(A([3, 2, 1, 0]))
// task56(A([1, 3, 2, 4]))

const task57 = (a) => {
    const arr = A(Math.floor(a.length / 2))
    for (let i = 0; i < arr.length; i++) {
        arr[i] = a[i + i + 1]
    }
    console.log(arr)
}

// task57(A([1]))
// task57(A([1, 3, 2]))
// task57(A([1, 2, 1, 3]))

const task58 = (a, m, n) => {
    const arr = A(n - m + 1)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = a[m + i - 1]
    }
    console.log(arr)
}

// task58(A([5, 4, 3]), 2, 3)
// task58(A([5, 6, 7, 8]), 1, 3)
// task58(A([9, 8, 7, 1, 2, 3]), 3, 5)

const task59 = (a, m, n) => {
    console.log(a.slice(m - 1, n))
}

// task59([5, 4, 3], 2, 3)
// task59([5, 6, 7, 8], 1, 3)
// task59([9, 8, 7, 1, 2, 3], 3, 5)

const task60 = (a, n) => {
    const arr = A(a.length * n)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = a[i % a.length]
    }
    console.log(arr)
}

// task60(A([1]), 3)
// task60(A([1, 2]), 2)
// task60(A([9, 8]), 3)

const task61 = (a, x) => {
    const arr = A(a.length + 1)
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = a[i]
    }
    arr[arr.length - 1] = x
    console.log(arr)
}

// task61(A([1]), 3)
// task61(A([1, 2]), 2)
// task61(A([9, 8, 7, 6]), 5)

const task62 = (a, x) => {
    const arr = A(a.length + 1)
    for (let i = 1; i < arr.length; i++) {
        arr[i] = a[i - 1]
    }
    arr[0] = x
    console.log(arr)
}

// task62(A([1]), 3)
// task62(A([1, 2]), 2)
// task62(A([9, 8, 7, 6]), 5)

const task63 = (a, n) => {
    const arr = A(a.length - 1)
    let offset = 0
    for (let i = 0; i < arr.length; i++) {
        if (i === n) {
            offset = 1
        }
        arr[i] = a[i + offset]
    }
    console.log(arr)
}

// task63(A([1]), 0)
// task63(A([1, 2, 3]), 2)
// task63(A([9, 8, 7, 6]), 1)

const task64 = (a, b) => {
    const arr = A(a.length + b.length)
    for (let i = 0; i < arr.length; i++) {
        if (i < a.length) {
            arr[i] = a[i]
        }
        else {
            arr[i] = b[i - a.length]
        }
    }
    console.log(arr)
}

// task64(A([1]), A([2]))
// task64(A([1, 2]), A([3]))
// task64(A([9, 8]), A([9, 8, 7]))

const task65 = (a, b) => {
    const arr = a.concat(b)
    console.log(arr)
}

// task65([1], [2])
// task65([1, 2], [3])
// task65([9, 8], [9, 8, 7])

const task66 = (a) => {
    // const buf = a[0]
    // for (let i = 1; i < a.length; i++) {
    //     if (a[i] >= buf) {
    //         a[i - 1] = buf
    //         continue
    //     }
    //     a[i - 1] = a[i]
    // }
    // a[a.length - 1] = buf > a[a.length - 1] ? buf : a[a.length - 1]
    // console.log(a)
    const buf = a[0]
    let i = 1
    while (i < a.length && a[i] < buf) {
        a[i - 1] = a[i]
        i++
    }
    a[i - 1] = buf
    console.log(a)
}

// task66(A([3, 1, 2, 4]))
// task66(A([2, 1, 1, 2, 2]))
// task66(A([6, 2, 3, 4, 5]))

const task67 = (a) => {
    const buf = a[a.length - 1]
    for (let i = a.length - 1; i > 0; i--) {
        if (a[i - 1] >= buf) {
            a[i] = buf
            break
        }
        a[i] = a[i - 1]
    }
    if (a[0] < buf) {
        a[0] = buf
    }
    console.log(a)
}

// task67(A([5, 4, 2, 3]))
// task67(A([2, 2, 1, 1, 2]))
// task67(A([5, 4, 3, 2, 6]))
// task67(A([5, 4, 3, 2, 5]))

const task68 = (a) => {
    // let start = 0
    // for (let i = 0; i < a.length && a[i] === 0; i++) {
    //     start++
    // }
    // let end = a.length - 1
    // for (let i = a.length - 1; i > start && a[i] === 0; i--) {
    //     end--
    // }
    // const arr = A(end - start + 1)
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = a[i + start]
    // }
    // console.log(arr, start, end)
    let from = 0
    while (from < a.length && a[from] === 0) {
        from++
    }
    let to = a.length - 1
    while (to >= from && a[to] === 0) {
        to--
    }
    const arr = A(to - from + 1)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = a[i + from]
    }
    console.log(arr)
}

// task68(A([0, 0, 1, 2, 0]))
// task68(A([2, 3]))
// task68(A([0, 0, 0, 0]))
// task68(A([0, 0, 1, 0, 0, 1, 0, 0])) // [1, 0, 0, 1]

const task69 = (a, b, n, m) => {
    const arr = A(n + b.length + a.length - m)
    const offset = arr.length - a.length
    let bLen = b.length
    for (let i = 0; i < arr.length; i++) {
        if (i < n) { // заполняем 1 часть arr до замены
            arr[i] = a[i]
        }
        else if (bLen > 0) { // заполняем вставляемый массив
            arr[i] = b[i - n]
            bLen--
        }
        else { // заполняем кусок после вставки массива
            arr[i] = a[i - offset]
        }
    }
    console.log(arr)
}

// task69(A([4, 5, 6, 7, 8]), A([9, 10]), 1, 4)
// task69(A([2, 3]), A([]), 1, 2)
// task69(A([1, 2, 3, 4]), A([5]), 1, 1)

const task70 = (a, b, n, m) => {
    const c = Array.from(a)
    c.splice(n, m - n, ...b)
    console.log(c)
}

// task70([4, 5, 6, 7, 8], [9, 10], 1, 4)
// task70([2, 3], [], 1, 2)
// task70([1, 2, 3, 4], [5], 1, 1)

const task71 = (a, m, n) => {
    const c = A(Math.ceil((a.length - m + 1) / n))
    let idx = 0
    for (let i = m - 1; i < a.length; i += n) {
        c[idx] = a[i]
        idx++
    }
    console.log(c)
}

// task71(A([5, 4, 3]), 1, 1)
// task71(A([5, 6, 7, 8]), 1, 2)
// task71(A([9, 8, 7, 1, 2, 3]), 2, 3)

// bad (для чего исходные массивы упорядочены?)
const task72 = (a, b) => {
    // const arr = a.concat(b)
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] > arr[j]) {
    //             [arr[i], arr[j]] = [arr[j], arr[i]]
    //         }
    //     }
    // }
    const arr = A(a.length + b.length)
    let left = 0
    let right = 0
    let i = 0
    while (left < a.length && right < b.length) {
        if (a[left] < b[right]) {
            arr[i] = a[left]
            left++
        }
        else {
            arr[i] = b[right]
            right++
        }
        i++
    }
    while (left < a.length) {
        arr[i] = a[left]
        i++
        left++
    }
    while (right < b.length) {
        arr[i] = b[right]
        i++
        right++
    }
    console.log(arr)
}

// task72([4, 7, 9], [3, 5])
// task72([2, 3], [1, 2, 4])
// task72([1, 3, 5], [2, 4, 6])

const task73 = (a) => {
    const [x, y] = a
    console.log(x * y)
}

// task73(A([5, 3]))
// task73(A([2, 6]))

const task74 = (a) => {
    const [x = 1, y = 2] = a
    console.log(x * y)
}

// task74(A([10, 20]))
// task74(A([20]))
// task74(A([undefined, 30]))
// task74(A([, 30]))
// task74(A([]))

const task75 = (a) => {
    const [[x1, y1], [x2, y2]] = a
    console.log(x1, y1, x2, y2)
}

// task75(A([A([5, 3]), A([2, 4])]))
// task75(A([A([1, 4]), A([5, 7])]))

const task76 = (a) => {
    const [[x1, y1], [x2, y2]] = [a[0], a[a.length - 1]]
    console.log(x1, y1, x2, y2)
}

// task76(A([A([5, 3])]))
// task76(A([A([5, 3]), A([2, 4])]))
// task76(A([A([1, 4]), A([1, -1]), A([5, 7])]))

const task77 = (a) => {
    const [x, ...y] = a
    console.log(x, y)
}

// task77(A([1]))
// task77(A([2, 5, 6]))
// task77(A([4, 5, 8, 9]))

const task78 = (a) => {
    const [x, y, ...z] = a
    console.log(x, y, z)
}

// task78(A([1, 2]))
// task78(A([2, 5, 6]))
// task78(A([4, 5, 8, 9]))

const task79 = (a) => {
    const [[x1, ...y1], [x2, ...y2]] = [a[0], a[a.length - 1]]
    console.log(x1, y1, x2, y2)
}

// task79(A([A([1])]))
// task79(A([A([2, 5, 6]), A([7, 3, 9])]))
// task79(A([A([4]), A([]), A([8]), A([9, 2])]))

const task80 = (a) => {
    for (const [x, y] of a) {
        console.log(x + y)
    }
    console.log('-----------------')
}

// task80(A([A([2, 5])]))
// task80(A([A([1, 2]), A([3, 4])]))
// task80(A([A([5, 1]), A([7, 8]), A([5, 5])]))

const task81 = (a) => {
    let minS = a[0][0] * a[0][1]
    for (const [x, y] of a) {
        minS = x * y < minS ? x * y : minS
    }
    console.log(minS)
}

// task81(A([A([5, 4])]))
// task81(A([A([3, 3]), A([2, 2]), A([4, 5])]))
// task81(A([A([1, 3]), A([3, 1]), A([2, 1])]))

const task82 = (a) => {
    let maxP = (a[0][0] + a[0][1]) * 2
    for (const [x, y] of a) {
        maxP = (x + y) * 2 > maxP ? (x + y) * 2 : maxP
    }
    console.log(maxP)
}

// task82(A([A([5, 3])]))
// task82(A([A([1, 3]), A([3, 1]), A([2, 1])]))
// task82(A([A([5, 5]), A([3, 4]), A([4, 4])]))

const task83 = ([a, b], [c, ...d]) => {
    console.log(a, b, c, d)
}

// task83(A([1, 2]), A([3, 4, 5]))
// task83(A([1, 2, 3]), A([4]))

const task84 = (a, x) => {
    console.log([...a, x])
}

// task84(A([]), 7)
// task84(A([1, 2]), 3)
// task84(A([4, 5, 6]), 10)

const task85 = (a, x) => {
    console.log([x, ...a])
}

// task85(A([]), 7)
// task85(A([1, 2]), 3)
// task85(A([4, 5, 6]), 10)

const task86 = (a, b) => {
    console.log([...a, ...b])
}

// task86(A([1]), A([2]))
// task86(A([1, 2]), A([3]))
// task86(A([9, 8]), A([9, 8, 7]))

const task87 = (a, b, x) => {
    console.log([...a, x, ...b])
}

// task87(A([]), A([]), 7)
// task87(A([1]), A([5]), 3)
// task87(A([1, 2]), A([2, 1]), 3)

const task88 = (a, n) => {
    a.push(n)
    console.log(a)
}

// task88([], 7)
// task88([1, 3], 2)

const task89 = (a) => {
    console.log(a.pop(), a)
}

// task89([7])
// task89([1, 3, 2])

const task90 = (a) => {
    console.log(a.shift(), a)
}

// task90([7])
// task90([1, 3, 2])

const task91 = (a, n) => {
    a.unshift(n)
    console.log(a)
}

// task91([], 7)
// task91([1, 3], 2)
