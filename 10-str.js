const task1 = () => {
    console.log('Hello, world')
}

// task1()

const task2 = (name) => {
    console.log('Hello ' + name + '!')
}

// task2('world')
// task2('Simon')
// task2('Jerry')

const task3 = (name) => {
    console.log(`Hello, ${name}!`)
}

// task3('world')
// task3('Simon')
// task3('Jerry')

const task4 = (greeting, name) => {
    console.log(`${greeting}, ${name}!`)
}

// task4('Hello', 'world')
// task4('Hi', 'John')
// task4('Salut', 'Mr. Smith')

const task5 = (a, b) => {
    console.log(`${a} + ${b} = ${a + b}`)
}

// task5(2, 4)
// task5(5, 3)
// task5(10, 27)

const task6 = (s) => {
    console.log(s[0], s[s.length - 1])
}

// task6('Abra')
// task6('Cadabra')
// task6(' . ')

const task7 = (a, b) => {
    if (a > b) {
        [a, b] = [b, a]
    }
    console.log(a, b)
}

// task7('about', 'baobab')
// task7('about', 'Baobab')
// task7('aaaa', 'aaaA')
// task7('AAA', 'AAAAA')

const task8 = (a, b) => {
    if (a === b) {
        console.log(0)
    }
    else if (a < b) {
        console.log(-1)
    }
    else {
        console.log(1)
    }
}

// task8('Test', 'Tes')
// task8('Test', 'Test')
// task8('Test', 'test')

const task9 = (s) => {
    if (s >= 'a' && s <= 'z') {
        console.log('lower')
    }
    else if (s >= 'A' && s <= 'Z') {
        console.log('upper')
    }
    else if (s >= '0' && s <= '9') {
        console.log('digit')
    }
    else {
        console.log('other')
    }
}

// task9('x')
// task9('W')
// task9('#')
// task9('3')

const task10 = (s) => {
    let cnt = 0
    for (const letter of s) {
        if (letter === ' ') {
            cnt++
        }
    }
    console.log(cnt)
}

// task10('Count of spaces is 4')
// task10('   ')
// task10('Zero one two')
// task10('Zero')

const task11 = (s) => {
    const len = s.length > 7
    let digit = false
    let lower = false
    let upper = false
    let other = false
    for (const letter of s) {
        if (letter >= 'a' && letter <= 'z') {
            lower = true
        }
        else if (letter >= 'A' && letter <= 'Z') {
            upper = true
        }
        else if (letter >= '0' && letter <= '9') {
            digit = true
        }
        else {
            other = true
        }
    }
    console.log(len && lower && upper && digit && other)
}

// task11('strongPassw0rd')
// task11('strongPa$$word')
// task11('strongP@ssw0rd')
// task11('Pa$$123')
// task11('Pa$$1234')

const task12 = (s) => {
    console.log(Array.from(s))
}

// task12('Test')
// task12('12 34')
// task12('')

const task13 = (s) => {
    console.log(+s + 1)
}

// task13('4')
// task13('10')
// task13('321')

const task14 = (s) => {
    console.log(s.split(' '))
}

// task14('First second third')
// task14('   ')
// task14('12 34 567')

const task15 = (s) => {
    const arr = s.split(' ')
    let result = ''
    for (const item of arr) {
        result += item[0]
    }
    console.log(result)
}

// task15('abra cada bra')
// task15('super puper string')
// task15('123 456')

const task16 = (s) => {
    console.log(s.split(' ').reduce((a, b) => +b + a, 0))
}

// task16('2 2')
// task16('10 20 15')
// task16('1 11 111 1111')

const task17 = (s) => {
    let result = ''
    for (const sym of s) {
        result += sym
    }
    console.log(result)
}

// task17(['1', '2', '3', '4'])
// task17(['a', 'b', 'c'])
// task17(['a', '1', 'b', '2'])

const task18 = (a, d) => {
    let str = a[0]
    for (let i = 1; i < a.length; i++) {
        str += `${d}${a[i]}`
    }
    console.log(str)
}

// task18([], ' + ')
// task18(['1', '2', '3', '4'], ' + ')
// task18(['a', 'b', 'c'], ', ')
// task18(['a', '1', 'b', '2'], ' ')

const task19 = (a, d) => {
    console.log(a.join(d))
}

// task19([], ' + ')
// task19(['1', '2', '3', '4'], ' + ')
// task19(['a', 'b', 'c'], ', ')
// task19(['a', '1', 'b', '2'], ' ')

const task20 = (s) => {
    console.log(Array.from(s).filter(item => item < '0' || item > '9')
        .join(''))
}

// task20('Delete a11 digit7')
// task20('12-34')
// task20('No digits')

const task21 = (s) => {
    console.log(s.indexOf('sub'))
}

// task21('Substring sub is here')
// task21('sub sub substring')
// task21('First substring only')
// task21('Zero')

const task22 = (s) => {
    const i = s.indexOf('sub') + 1
    console.log(s.indexOf('sub', i))
}

// task22('sub sub')
// task22('sub sub substring')
// task22('First substring only')
// task22('Zero')

const task23 = (s) => {
    console.log(s.lastIndexOf('sub'))
}

// task23('sub sub')
// task23('sub sub substring')
// task23('First substring only')
// task23('Zero')

const task24 = (s) => {
    const i = s.lastIndexOf('sub') - 1
    console.log(s.lastIndexOf('sub', i))
}

// task24('sub sub')
// task24('sub sub substring')
// task24('First substring only')
// task24('Zero')

const task25 = (s) => {
    console.log(s.split('sub').length - 1)
}

// task25('sub and sub and another sub')
// task25('sub only once')
// task25('no one')

const task26 = (s) => {
    console.log(s.slice(1, 4))
}

// task26('abcd')
// task26('Test string')
// task26('First-second')

const task27 = (s) => {
    console.log(s.slice(1, -1))
}

// task27('abcd')
// task27('Test string')
// task27('First-second')

const task28 = (s, n) => {
    console.log(s.slice(n))
}

// task28('abcd', 2)
// task28('Test string', 5)
// task28('First-second', 6)

const task29 = (s, n) => {
    console.log(s.slice(0, -n))
}

// task29('abcd', 2)
// task29('Test string', 3)
// task29('First-second', 7)

const task30 = (s) => {
    console.log(s.slice(0, Math.floor(s.length / 2)))
}

// task30('abc')
// task30('abcdefg')
// task30('1')

const task31 = (s) => {
    console.log(s.slice(Math.floor(s.length / 2)))
}

// task31('abc')
// task31('abcd')
// task31('qwert')

const task32 = (s1, n1, s2, n2) => {
    console.log(s1.slice(0, n1) + s2.slice(-n2))
}

// task32('abcd', 2, 'efgh', 2)
// task32('1 is one', 1, 'first', 2)

const task33 = (s) => {
    console.log(s.slice(s.indexOf('-') + 1, s.lastIndexOf('-')))
}

// task33('First-second-third')
// task33('1-2-3-4-5')
// task33('Only-one')

const task34 = (s) => {
    console.log(s.substr(1, 3))
}

// task34('abcd')
// task34('Test string')
// task34('First-second')

const task35 = (s) => {
    console.log(s.substr(3))
}

// task35('abcd')
// task35('Test string')
// task35('First-second')

const task36 = (s) => {
    console.log(s.substr(-3))
}

// task36('abcd')
// task36('Test string')
// task36('First-second')

const task37 = (s) => {
    console.log(s.replace('sub', 'SUB'))
}

// task37('The sub for replace')
// task37('First substring or second sub')
// task37('No one')

const task38 = (s, ss) => {
    console.log(s.replace(ss, '$' + ss))
}

// task38('$200 - 100 = 100', '100')
// task38('Pro100 string', 'string')
// task38('Prosto string', '100')

const task39 = (s, ss) => {
    console.log(s.replace(ss, ss + '...'))
}

// task39('$200 - 100 = 100', '100')
// task39('Pro100 string', 'string')
// task39('Prosto string', '100')

const task40 = (s, ss) => {
    console.log(ss.replace(s, s + s))
}

// task40('b', 'abcabc')
// task40('t', 'test')
// task40('q', '1234')

const task41 = (s, ss) => {
    console.log(s.replace(ss, ''))
}

// task41('$200 - 100 = 100', '$200 - ')
// task41('Pro100 string', '100')
// task41('Prosto string', '100')

const task42 = (s) => {
    console.log(s.toLowerCase())
    console.log(s.toUpperCase())
}

// task42('Simple String With Words')
// task42('Pro100 string')
// task42('Prosto STRING')

const task43 = (s) => {
    if (s === s.toUpperCase()) {
        console.log('upper')
    }
    else if (s === s.toLowerCase()) {
        console.log('lower')
    }
    else {
        console.log('mixed')
    }
}

// task43('ASD')
// task43('fgh')
// task43('Zxc')

const task44 = (s) => {
    const arr = s.split(' ')
    let cnt = 0
    for (const item of arr) {
        if (item[0] === item[0].toUpperCase()) {
            cnt++
        }
    }
    console.log(cnt)
}

// task44('Hello, world')
// task44('John Smith')
// task44('JohnSmith')

const task45 = (s) => {
    if (s[0] === s[0].toLowerCase()) {
        // s = s.replace(s[0], s[0].toUpperCase())
        s = s[0].toUpperCase() + s.slice(1)
    }
    console.log(s)
}

// task45('asd')
// task45('tEST')
// task45('Qwe')

const task46 = (s, n) => {
    console.log(s.padStart(n, '.'), s.padEnd(n, '.'))
}

// task46('text', 7)
// task46('long string', 3)
// task46('text', 4)

const task47 = (h, m) => {
    h = String(h)
    m = String(m)
    console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}`)
}

// task47(8, 0)
// task47(13, 5)
// task47(9, 30)
// task47(22, 45)

const task48 = (s, n) => {
    console.log(s.length < n ? s.padEnd(n, '.') : s.slice(0, n))
}

// task48('abc', 6)
// task48('abcdef', 4)
// task48('abc', 3)

const task49 = (s) => {
    console.log(s.trim() + '.')
    console.log(s.trimStart() + '.')
    console.log(s.trimEnd() + '.')
}

// task49('   login   ')
// task49('   pass   word')
// task49('admin ')

const task50 = (s) => {
    console.log(s.trim() === 'admin')
}

// task50(' admin')
// task50('admin ')
// task50('admin')
// task50(' a d m i n ')

const task51 = (s) => {
    console.log(s.startsWith('Ab'))
    console.log(s.endsWith('ing'))
    console.log(s.includes('so'))
    console.log('-'.repeat(5))
}

// task51('Absolute')
// task51('String')
// task51('so, Ab is not in the begining')

const task52 = (s, start, end, inc) => {
    const arr = s.split(' ')
    let cnt1 = 0
    let cnt2 = 0
    let cnt3 = 0
    for (const item of arr) {
        if (item.startsWith(start)) {
            cnt1++
        }
        if (item.endsWith(end)) {
            cnt2++
        }
        if (item.includes(inc)) {
            cnt3++
        }
    }
    console.log(cnt1, cnt2, cnt3)
}

// task52('abc abb bca', 'a', 'b', 'c')
// task52('Abra cada bra Abra', 'ra', 'ra', 'ad')
// task52('some text with some words', 'w', 'some', 't')

const task53 = (v, p) => {
    // const result = v + p
    if (v === p) {
        console.log('ничья')
    }
    // else if (result === 'kn' || result === 'bk' || result === 'nb') {
    else if (['kn', 'bk', 'nb'].includes(v + p)) {
        console.log('Вася')
    }
    else {
        console.log('Петя')
    }
}

// task53('k', 'n')
// task53('b', 'n')
// task53('b', 'k')
// task53('n', 'n')

const task54 = (s) => {
    const arr = s.split(' ')
    if (arr.includes('class')) {
        console.log(s)
    }
    else {
        arr.push('class')
        console.log(arr.join(' ').trim())
    }
    // if (s.includes(' class ') || (s.startsWith('class ')) ||
    //     s.endsWith(' class') || s === 'class') {
    //     console.log(s)
    // }
    // else {
    //     console.log((s + ' class').trim())
    // }
    // что быстрее??
}

// task54('cclass classs')
// task54('class')
// task54('')

const task55 = (s) => {
    console.log(s.split(' ').filter(item => item !== 'class').join(' '))
}

// task55('cclass classs')
// task55('class')
// task55('class test class')

const task56 = (s) => {
    // const arr = s.split('.')
    // const ex = arr[arr.length - 1]
    // arr.pop()
    // console.log(ex, arr.join('.'))
    const idxDot = s.lastIndexOf('.')
    const idxSlash = s.lastIndexOf('/')
    console.log(s.slice(idxDot + 1), s.slice(idxSlash + 1, idxDot))
}

// task56('/var/www/index.html')
// task56('/var/log/log.01.tar.gz')
// task56('Zadachi na stroki.js')

const task57 = (s) => {
    console.log(s.charCodeAt(0))
}

// task57('a')
// task57('c')
// task57('A')
// task57('Z')
// task57('0')
// task57('9')

const task58 = (n) => {
    console.log(String.fromCharCode(n))
}

// task58(97)
// task58(99)
// task58(65)
// task58(90)
// task58(48)
// task58(57)

const task59 = (s) => {
    console.log(String.fromCharCode(s.charCodeAt(0) - 1),
        String.fromCharCode(s.charCodeAt(0) + 1))
}

// task59('b')
// task59('Ю')
// task59('N')
// task59('3')

const task60 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(String.fromCharCode(97 + i))
    }
}

// task60(1)
// task60(3)

const task61 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(String.fromCharCode(90 - i))
    }
}

// task61(1)
// task61(3)

const task62 = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(String.fromCharCode(65 + i) +
        String.fromCharCode(65 + i + 1))
    }
}

// task62(1)
// task62(3)

const task63 = (a, b) => {
    // const aCode = a.charCodeAt(0)
    // const bCode = b.charCodeAt(0)
    // const n = Math.floor(bCode - aCode) / 2
    // for (let i = 0; i < n; i++) {
    //     console.log(String.fromCharCode(aCode + i),
    //         String.fromCharCode(bCode - i))
    // }
    a = a.charCodeAt(0)
    b = b.charCodeAt(0)
    while (a < b) {
        console.log(String.fromCharCode(a), String.fromCharCode(b))
        a++
        b--
    }
    console.log('--------------')
}

// task63('a', 'c')
// task63('b', 'e')
// task63('d', 'i')
