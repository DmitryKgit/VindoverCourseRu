const task1 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

// task1(0)
// task1(1)
// task1(3)

const task2 = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}

// task2(0)
// task2(1)
// task2(3)

const task3 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(1)
    }
}

// task3(0)
// task3(1)
// task3(3)

const task4 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(n)
    }
}

// task4(0)
// task4(1)
// task4(3)

const task5 = (n) => {
    for (let i = n; i > 0; i--) {
        console.log(i)
    }
}

// task5(0)
// task5(1)
// task5(3)

const task6 = (n) => {
    for (let i = n - 1; i >= 0; i--) {
        console.log(i)
    }
}

// task6(0)
// task6(1)
// task6(3)

const task7 = (n) => {
    for (let i = 1; i <= n; i += 2) {
        console.log(i)
    }
}

// task7(0)
// task7(1)
// task7(3)
// task7(6)

const task8 = (n) => {
    for (let i = 2; i <= n; i += 2) {
        console.log(i)
    }
}

// task8(0)
// task8(1)
// task8(3)
// task8(6)

const task9 = (a, b) => {
    // for (; a <= b; a++) {
    //     console.log(a)
    // }
    for (let i = a; i <= b; i++) {
        console.log(i)
    }
}

// task9(0, 1)
// task9(5, 7)
// task9(10, 10)

const task10 = (a, b) => {
    for (b--; b > a; b--) {
        console.log(b)
    }
}

// task10(0, 1)
// task10(5, 7)
// task10(10, 15)

// отрицательное n?
const task11 = (n) => {
    // for (n--; n >= 0; n -= 2) {
    //     console.log(n)
    // }
    for (let i = n - 1; i >= 0; i -= 2) {
        console.log(i)
    }
}

// task11(1)
// task11(3)
// task11(4)

const task12 = (n) => {
    for (; n > 0; n -= 2) {
        console.log(n)
    }
}

// task12(1)
// task12(3)
// task12(4)

const task13 = (p, n) => {
    for (let i = 1; i <= n; i++) {
        console.log(p * i)
    }
}

// task13(300, 3)
// task13(199.75, 4)

const task14 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 2)
    }
    console.log('--------------------')
}

// task14(2)
// task14(5)

const task15 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3)
    }
    console.log('--------------------')
}

// task15(2)
// task15(5)

const task16 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 2 + 1)
    }
    console.log('--------------------')
}

// task16(2)
// task16(5)

const task17 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3 + 1)
    }
    console.log('--------------------')
}

// task17(2)
// task17(5)

const task18 = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i % 2)
    }
    console.log('--------------------')
}

// task18(2)
// task18(5)

const task19 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(2 - i % 3)
    }
    console.log('--------------------')
}

// task19(2)
// task19(5)

const task20 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(i % 3 * 2)
    }
    console.log('--------------------')
}

// task20(2)
// task20(5)

const task21 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(2 + i % 3 * 2)
    }
    console.log('--------------------')
}

// task21(2)
// task21(5)

const task22 = (n) => {
    // for (let i = 0; i < n; i++) {
    //     console.log(1 - i % 2 * 2)
    // }
    let x = 1
    for (let i = 0; i < n; i++) {
        console.log(x)
        x = -x
    }
    console.log('--------------------')
}

// task22(2)
// task22(5)

const task23 = (n) => {
    for (let i = 0, even = 1; i < n; i++, even = -even) {
        console.log((i % 3 + 1) * even)
    }
    console.log('--------------------')
}

// task23(2)
// task23(6)

const task24 = (n) => {
    // for (let cur = 3; n > 0; n--, cur = 10 - cur) {
    //     console.log(cur)
    // }
    let x = 3
    for (let i = 0; i < n; i++) {
        console.log(x)
        x = 10 - x
    }
    console.log('--------------------')
}

// task24(2)
// task24(5)

const task25 = (n) => {
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            console.log(i)
        }
    }
    console.log('--------------------')
}

// task25(3)
// task25(6)

const task26 = (n) => {
    for (let i = n; i > 1; i--) {
        if (i % 2 === 0 || i % 3 === 0) {
            console.log(i)
        }
    }
    console.log('--------------------')
}

// task26(5)
// task26(6)

const task27 = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log(i, 2, 3)
        }
        else if (i % 2 === 0) {
            console.log(i, 2)
        }
        else if (i % 3 === 0) {
            console.log(i, 3)
        }
        else {
            console.log(i)
        }
    }
    console.log('--------------------')
}

// task27(1, 7)
// task27(8, 15)

const task28 = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
        console.log(sum)
    }
    console.log('--------------------')
}

// task28(3)
// task28(5)

const task29 = (n) => {
    let fac = 1
    for (let i = 1; i <= n; i++) {
        console.log(fac *= i)
    }
    console.log('--------------------')
}

// task29(3)
// task29(5)

const task30 = (n) => {
    const k = Math.floor(n / 2)
    for (let i = 1; i <= k; i++) {
        console.log(i, n - i)
    }
}

// task30(8)
// task30(7)

const task31 = (a, b) => {
    let cnt = 0
    while (a <= b) {
        cnt++
        a *= 3
        b *= 2
    }
    console.log(cnt)
}

// task31(1, 1)
// task31(2, 3)
// task31(3, 15)

const task32 = (a, b) => {
    const limit = a * b
    if (a <= limit) {
        console.log(a)
    }
    while (b <= limit) {
        console.log(b);
        [a, b] = [b, a + b]
    }
    console.log('-----------')
}

// task32(1, 1)
// task32(2, 3)
// task32(3, 5)

const seq = (...args) => {
    let i = 0
    return {
        hasNext() {
            return i < args.length
        },
        next() {
            if (i === args.length) {
                throw new Error('Считано больше элементов, чем есть в последовательности')
            }
            return args[i++]
        }
    }
}

// const a = seq(10, 20, 30)
// console.log(a.hasNext())
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())
// console.log(a.hasNext())

// const a = seq(10, 20, 30)
// while (a.hasNext()) {
//     console.log(a.next())
// }

const task33 = (a) => {
    while (a.hasNext()) {
        console.log(a.next())
    }
}

// task33(seq(4, 1, 2))
// task33(seq(777))
// task33(seq(-1, -2, -3))

const task34 = (a) => {
    let sum = 0
    while (a.hasNext()) {
        sum += a.next()
    }
    console.log(sum)
}

// task34(seq(4, -1, 2))
// task34(seq(777))
// task34(seq(-1, -2, -3))

const task35 = (a) => {
    let sum = 0
    let cnt = 0
    while (a.hasNext()) {
        sum += a.next()
        cnt++
    }
    console.log(sum / cnt)
}

// task35(seq(4, 2, 6))
// task35(seq(4, 3, -1))
// task35(seq(7, 1, 1, 1))

const task36 = (a) => {
    let max = a.next()
    while (a.hasNext()) {
        const cur = a.next()
        if (max < cur) {
            max = cur
        }
    }
    console.log(max)
}

// task36(seq(4, 2, 6))
// task36(seq(-4, -3))
// task36(seq(7, 1, 1))

const task37 = (a) => {
    let min = a.next()
    let iMin = 1
    let cnt = 1 // минимум определён до цикла
    while (a.hasNext()) {
        cnt++
        const cur = a.next()
        if (min > cur) {
            min = cur
            iMin = cnt
        }
    }
    console.log(iMin)
}

// task37(seq(4, 5, 1, 6))
// task37(seq(-3, -4))
// task37(seq(3, 7, 3))

const task38 = (a) => {
    let max = a.next()
    let iMax = 1
    let cnt = 1
    while (a.hasNext()) {
        cnt++
        const cur = a.next()
        if (max <= cur) {
            max = cur
            iMax = cnt
        }
    }
    console.log(iMax)
}

// task38(seq(4, 5, 1, 6))
// task38(seq(-3, -4))
// task38(seq(3, 7, 3, 7))

const task39 = (a) => {
    while (true) {
        const num = a.next()
        if (num === 0) {
            break
        }
        console.log(num)
    }
    console.log('--------------------')
}

// task39(seq(1, 2, 0, 3, 0))
// task39(seq(3, 2, 1, 0))

const task40 = (a, s) => {
    let num = a.next()
    let sum = num
    while (sum < s) {
        console.log(num)
        num = a.next()
        sum += num
    }
    console.log('--------------------')
}

// task40(seq(1, 2, 0, 3, 0), 5)
// task40(seq(3, -2, 2, 1), 4)

const task41 = (a) => {
    // let prev = a.next()
    // let cur = a.next()
    // console.log(prev)
    // while (prev !== cur) {
    //     console.log(cur);
    //     [prev, cur] = [cur, a.next()]
    // }

    let prev = a.next()
    while (true) {
        console.log(prev)
        const cur = a.next()
        if (cur === prev) {
            break
        }
        prev = cur
    }
    console.log('--------------------')
}

// task41(seq(1, 2, 0, 0, 3))
// task41(seq(3, 2, 1, 2, 2, 3))

const task42 = (a) => {
    let prev = a.next()
    while (true) {
        const cur = a.next()
        if (cur === 0) {
            continue
        }
        console.log(prev)
        if (cur === prev) {
            break
        }
        prev = cur
    }
    console.log('--------------------')
}

// task42(seq(1, 2, 0, 0, 3, 3))
// task42(seq(3, 0, 2, 0, 1, 0, 1))

const task43 = (a) => {
    const max = a.next()
    let prev = -Infinity
    while (a.hasNext()) {
        const cur = a.next()
        if (cur > max) {
            continue
        }
        if (prev + cur >= max) {
            break
        }
        console.log(cur)
        prev = cur
    }
    console.log('--------------------')
}

// task43(seq(5, 2, 2, 1, 8, 4, 5, 0))
// task43(seq(10, 2, 12, 6, 17, 8, 9))

const task44 = (a) => {
    let ans = false
    while (a.hasNext()) {
        const cur = a.next()
        if (cur < 0) {
            ans = true
            break
        }
    }
    console.log(ans)
    console.log('--------------------')
}

// task44(seq(4, 5, 1, 6))
// task44(seq(-3, -4))
// task44(seq(3, 7, -3, 7))

const task45 = (a) => {
    let ans = true
    let prev = a.next()
    while (a.hasNext()) {
        const cur = a.next()
        if (cur <= prev) {
            ans = false
            break
        }
        prev = cur
    }
    console.log(ans)
}

// task45(seq(1, 4, 5, 10))
// task45(seq(3, 4, 5, 4))
// task45(seq(3, 3, 4))
// task45(seq(-3, -2, -1))

const task46 = (a) => {
    let ans = true
    let prev = a.next()
    while (a.hasNext()) {
        const cur = a.next()
        if (cur > prev) {
            ans = false
            break
        }
        prev = cur
    }
    console.log(ans)
}

// task46(seq(10, 5, 4, 1))
// task46(seq(4, 3, 2, 3))
// task46(seq(4, 3, 3))
// task46(seq(-3, -2, -1))

const task47 = (a) => {
    let prev = a.next()
    let cnt = 0
    while (a.hasNext()) {
        const cur = a.next()
        if (cur > prev) {
            cnt++
        }
        prev = cur
    }
    console.log(cnt)
}

// task47(seq(4, 7, 9))
// task47(seq(-3, -2, -4))
// task47(seq(10))

const task48 = (a) => {
    // let ans = true
    // while (a.hasNext()) {
    //     if (a.hasNext()) {
    //         a.next()
    //     }
    //     if (a.hasNext() && a.next() <= 0) {
    //         ans = false
    //         break
    //     }
    // }
    // console.log(ans)
    let even = false
    let ans = true
    while (a.hasNext()) {
        const cur = a.next()
        if (even && cur <= 0) {
            ans = false
            break
        }
        even = !even
    }
    console.log(ans)
}

// task48(seq(-4, 7, -9))
// task48(seq(-3, 2, -4, -2))
// task48(seq(10, 10))

const task49 = (a) => {
    let b = 0
    let sum = 0
    while (a.hasNext()) {
        b += a.next()
        sum += b
    }
    console.log(sum)
}

// task49(seq(2, 2, 3))
// task49(seq(3, 2, 1))
// task49(seq(1, 1, 1, 1))

const task50 = (a) => {
    let even
    let prev = Infinity
    let ans = true
    while (a.hasNext()) {
        if (a.hasNext()) {
            a.next()
        }
        if (a.hasNext()) {
            prev = even
            even = a.next()
        }
        if (even < prev) {
            ans = false
            break
        }
    }
    console.log(ans)
}

// task50(seq(-4, 7, -9))
// task50(seq(-3, 2, -4, -2))
// task50(seq(-1, 3, -2, 7, -3))
// task50(seq(-1, 3, -2, 7, -3, 5))

const task51 = (a) => {
    let even
    let prev = Infinity
    let ans = true
    while (a.hasNext()) {
        if (a.hasNext()) {
            a.next()
        }
        if (a.hasNext()) {
            prev = even
            even = a.next()
        }
        if (even > prev) {
            ans = false
            break
        }
    }
    console.log(ans)
}

// task51(seq(1, 1, 1))
// task51(seq(5, 2, 2))
// task51(seq(-1, 3, 0, 7, -3))
// task51(seq(1, 3, 0, 7, 2))

const task52 = (a) => {
    let sum = 0
    let sign = 1
    while (a.hasNext()) {
        sum += a.next() * sign
        sign = -sign
    }
    console.log(sum)
}

// task52(seq(1, -1, 1))
// task52(seq(5, 2, 2))
// task52(seq(-1, 3, 0, 7, -3))

const task53 = (a) => {
    let cntPos = 0
    let cntNeg = 0
    while (a.hasNext()) {
        const cur = a.next()
        if (cur > 0) {
            cntPos++
        }
        else {
            cntNeg++
        }
    }
    console.log(cntPos, cntNeg)
}

// task53(seq(1, -1, 1))
// task53(seq(5, 2, 2))
// task53(seq(-1, 3, 0, 7, -3))

const task54 = (a) => {
    let cnt = 1
    let result = 0
    while (a.hasNext()) {
        const cur = a.next()
        if (cur % 2 === 0) {
            result = cnt
            break
        }
        cnt++
    }
    console.log(result)
}

// task54(seq(5, 2, 4))
// task54(seq(2, 6, 4, 8))
// task54(seq(7, 3, 1))

const task55 = (a) => {
    let cnt = 1
    let sum = 0
    while (a.hasNext()) {
        const cur = a.next()
        if (cur % 2 === 0) {
            sum += cnt
        }
        cnt++
    }
    console.log(sum)
}

// task55(seq(1, 2, 4))
// task55(seq(2, 6, 4, 8))
// task55(seq(7, 3, 1))

const task56 = (a) => {
    let i = 1
    let cnt = 0
    let sum = 0
    while (a.hasNext()) {
        const cur = a.next()
        if (cur % 2 !== 0) {
            cnt += i
            sum += cur
        }
        i++
    }
    console.log(cnt, sum)
}

// task56(seq(1, 2, 4))
// task56(seq(7, 3, 1))
// task56(seq(2, 6, 4, 8))

const task57 = (a) => {
    // let max2 = -Infinity
    // let max1 = a.next()
    // while (a.hasNext()) {
    //     const cur = a.next()
    //     if (cur > max2) {
    //         max2 = cur
    //         if (cur > max1) {
    //             [max1, max2] = [max2, max1]
    //         }
    //     }
    // }
    // console.log(max1, max2)
    let max1 = a.next()
    let max2 = a.next()
    if (max1 < max2) {
        [max1, max2] = [max2, max1]
    }
    while (a.hasNext()) {
        const cur = a.next()
        if (cur > max1) {
            max2 = max1
            max1 = cur
        }
        else if (cur > max2) {
            max2 = cur
        }
    }
    console.log(max1, max2)
}

// task57(seq(3, 1, 5, 2))
// task57(seq(-1, -2, -3, -4))
// task57(seq(4, 5, 3, 5))
// task57(seq(6, 4, 5))
// task57(seq(1, 6, 4, 5))

const task58 = (a) => {
    let prev = a.next()
    let cur = a.next()
    let sum = prev + cur
    while (a.hasNext()) {
        [prev, cur] = [cur, a.next()]
        const curSum = prev + cur
        if (sum < curSum) {
            sum = curSum
        }
    }
    console.log(sum)
}

// task58(seq(3, 2, 5, 1))
// task58(seq(-1, -2, -3, -4))
// task58(seq(3, 5, 4, 6))

const task59 = (a) => {
    let prev = a.next()
    let cnt = 1
    while (a.hasNext()) {
        const cur = a.next()
        if (cur === prev) {
            cnt++
        }
        else {
            console.log(cnt)
            cnt = 1
            prev = cur
        }
    }
    console.log(cnt)
    console.log('--------------')
}

// task59(seq(0, 1, 0, 1))
// task59(seq(1, 1, 1, 0))
// task59(seq(0, 0, 1, 1))

const task60 = (a) => {
    let prev = a.next()
    let cnt = 1
    while (a.hasNext()) {
        const cur = a.next()
        if (cur !== prev) {
            cnt++
        }
        prev = cur
    }
    console.log(cnt)
    console.log('--------------')
}

// task60(seq(0, 1, 0, 1))
// task60(seq(1, 1, 1, 0))
// task60(seq(0, 0, 0, 0))

const task61 = (a) => {
    let prev = a.next()
    let cur = a.next()
    let len = prev === cur ? 2 : 1 // текущая длина последовательности
    let maxLen = 1
    while (a.hasNext()) {
        // [prev, cur] = [cur, a.next()]
        prev = cur
        cur = a.next()
        if (cur === prev) {
            len++
        }
        else {
            if (maxLen < len) {
                maxLen = len
            }
            len = 1
        }
    }
    if (maxLen < len) {
        maxLen = len
    }
    console.log(maxLen)
}

// task61(seq(0, 1, 0, 1))
// task61(seq(1, 1, 1, 0))
// task61(seq(0, 0, 0, 0))

const task62 = (a) => {
    let prev = a.next()
    let sum = 0
    let result = 0
    let cnt = 2
    while (a.hasNext()) {
        const cur = a.next()
        sum += prev
        if (cur !== sum) {
            result = cnt
            break
        }
        prev = cur
        cnt++
    }
    console.log(result)
}

// task62(seq(3, 3, 6, 12))
// task62(seq(0, 0, 0, 0))
// task62(seq(1, 1, 1, 1))

const task63 = (a) => {
    let prev = a.next()
    let cur = a.next()
    let result = 0
    let cnt = 3
    while (a.hasNext()) {
        const sum = cur + prev;
        [prev, cur] = [cur, a.next()]
        if (cur !== sum) {
            result = cnt
            break
        }
        cnt++
    }
    console.log(result)
}

// task63(seq(1, 1, 2, 3, 5))
// task63(seq(5, 6, 11, 17, 18))
// task63(seq(1, 1, 1, 1))

const task64 = (a) => {
    let sum = 0
    let sign = 1
    while (a.hasNext()) {
        const cur = a.next()
        sum += cur * sign
        sign = -sign
    }
    console.log(sum === 0)
}

task64(seq(1, 1, 2, 7, 5))
task64(seq(2, 3, 2, 3, 2))
task64(seq(1, 1, 1, 1, 1))

const task65 = (a, k) => { // !!!
    let i = 0
    let aK = 1
    while (a.hasNext()) {
        const cur = a.next()
        if (cur < aK) {
            break
        }
        i++
        if (i === k) {
            aK = cur
        }
    }
    console.log(i)
}

// task65(seq(10, 9, 8, 7, 7, 7, 5, 5), 5)
// task65(seq(3, 2, 1, 0, 0), 5)
// task65(seq(0, 0, 0, 0), 2)

const task66 = (a) => {
    let i = 1
    let len = 1 // длина текущей серии
    let maxLen = 1 // максимальная длина последовательности
    let iMaxLen = 1 // индекс начала самой длинной последовательности
    let iLen = 1 // индекс начала текущей последовательности
    let prev = a.next()
    while (a.hasNext()) {
        const cur = a.next()
        i++
        if (cur === prev) { // последовательность продолжается
            len++
            if (maxLen < len) {
                maxLen = len
                iMaxLen = iLen
            }
        }
        else { // последовательность закончилась
            len = 1
            iLen = i
        }
        prev = cur
    }
    console.log(iMaxLen)
}

// task66(seq(0, 1, 0, 1))
// task66(seq(0, 1, 1, 1))
// task66(seq(1, 0, 1, 1))

const task67 = (a) => {
    let i = 1
    let len = 1 // длина текущей серии
    let maxLen = 1 // максимальная длина последовательности
    let iMaxLen = 1 // индекс начала самой длинной последовательности
    let iLen = 1 // индекс начала текущей последовательности
    let prev = a.next()
    while (a.hasNext()) {
        const cur = a.next()
        i++
        if (cur === prev) { // последовательность продолжается
            len++
            if (maxLen <= len) {
                maxLen = len
                iMaxLen = iLen
            }
        }
        else { // последовательность закончилась
            len = 1
            iLen = i
        }
        prev = cur
    }
    if (maxLen <= len) { // проверка последнего числа
        maxLen = len
        iMaxLen = iLen
    }
    console.log(iMaxLen)
}

// task67(seq(0, 1, 0, 1))
// task67(seq(0, 1, 1, 1))
// task67(seq(1, 0, 1, 1))
// task67(seq(1, 1, 1, 0))

const task68 = (p, n) => {
    for (let i = 1; i <= n; i++) {
        console.log(p * i / 10)
    }
}

// task68(300, 3)
// task68(199.75, 4)

const task69 = (p, n) => {
    for (let i = 0; i < n; i++) {
        const step = 1.2 + 0.2 * i
        console.log(Math.round(p * step * 10) / 10)
    }
}

// task69(100, 3)
// task69(149.5, 4)

const task70 = (n) => {
    let num = 4
    let mult = 0
    for (let i = 0; i < n; i++) {
        console.log(mult + num)
        num = 11 - num
        mult += i % 2 !== 0 ? 10 : 0
    }
    console.log('-----------------')
}

// task70(1)
// task70(2)
// task70(4)
// task70(5)

const task71 = (n) => {
    let num = 4
    let mult = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        console.log(sum += mult + num)
        num = 11 - num
        mult += i % 2 !== 0 ? 10 : 0
    }
    console.log('-----------------')
}

// task71(1)
// task71(2)
// task71(4)
