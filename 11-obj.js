const task1 = (a) => {
    console.log(a.name, a.age)
}

// task1({ name: 'Vasya', age: 20 })
// task1({ age: 30, name: 'Petya' })
// task1({})

const task2 = (a) => {
    console.log(a['n a m e'], a['a g e'])
}

// task2({ 'n a m e': 'Vasya', 'a g e': 20 })
// task2({ 'a g e': 30, 'n a m e': 'Petya' })
// task2({})

const task3 = (a, k1, k2) => {
    console.log(a[k1], a[k2])
}

// task3({ name: 'Vasya', age: 20 }, 'name', 'age')
// task3({ a: 10, b: 20, c: 30 }, 'c', 'b')
// task3({}, 'k1', 'k2')

const task4 = (a) => {
    console.log(Object.keys(a))
}

// task4({ name: 'Vasya', age: 20 })
// task4({ a: 10, b: 20, c: 30 })
// task4({})

const task5 = (a) => {
    console.log(Object.values(a))
}

// task5({ name: 'Vasya', age: 20 })
// task5({ a: 10, b: 20, c: 30 })
// task5({})

const task6 = (a) => {
    console.log(Object.entries(a))
}

// task6({ name: 'Vasya', age: 20 })
// task6({ a: 10, b: 20, c: 30 })
// task6({})

const task7 = (s) => {
    const obj = {}
    for (const item of s) {
        obj[item] = item
    }
    console.log(Object.keys(obj))
}

// task7('')
// task7('abc')
// task7('test')

const task8 = (a) => {
    for (const key in a) {
        console.log(key, a[key])
    }
}

// task8({ name: 'Vasya', age: 20 })
// task8({ a: 10, b: 20, c: 30 })
// task8({})

const task9 = (a) => {
    for (const [key, item] of Object.entries(a)) {
        console.log(key, item)
    }
}

// task9({ name: 'Vasya', age: 20 })
// task9({ a: 10, b: 20, c: 30 })
// task9({})

const task10 = (a, k) => {
    console.log('name' in a)
    console.log(k in a)
}

// task10({ name: 'Vasya', age: 20 }, 'a')
// task10({ a: 10, b: 20, c: 30 }, 'c')
// task10({}, 'k')

const task11 = (a, keys) => {
    const arr = Array(keys.length)
    for (let i = 0; i < keys.length; i++) {
        arr[i] = keys[i] in a
    }
    console.log(arr)
}

// task11({ a: 20, b: 10, 0: 30 }, ['b', 'x', '0'])
// task11({ name: 'Вася', age: 20 }, ['age', 'age', 'name'])
// task11({}, ['a', 'a', 'a'])

const task12 = (a, k) => {
    delete a[k]
    console.log(a)
}

// task12({ name: 'Vasya', age: 20 }, 'a')
// task12({ a: 10, b: 20, c: 30 }, 'c')
// task12({}, 'k')

const task13 = (v1, v2) => {
    const obj = {}
    obj.name = v1
    obj.age = v2
    console.log(obj)
}

// task13('Vasya', 20)
// task13(undefined, false)
// task13(null, [true])

const task14 = (name, age) => {
    const obj = {}
    obj.name = name
    obj.age = age
    console.log(obj)
}

// task14('Vasya', 20)
// task14(undefined, false)
// task14(null, [true])

const task15 = (a) => {
    a.name = 'Vasya'
    console.log(a)
}

// task15({})
// task15({ age: 20 })
// task15({ name: 'Petya', age: 20 })

const task16 = (a, k, v) => {
    a[k] = v
    console.log(a)
}

// task16({}, 'name', 'Vasya')
// task16({ name: 'Vasya' }, 'age', 20)
// task16({ name: 'Petya', age: 20 }, 'name', 'Vasya') // выходные данные

const task17 = (a) => {
    a.age++
    a.salary += 2000
    console.log(a)
}

// task17({ age: 20, salary: 10000 })
// task17({ name: 'Vasya', age: 30, salary: 20000 })

const task18 = (a) => {
    if (a.a > a.b) {
        a.a += a.b
    }
    else {
        a.a++
        a.b++
    }
    console.log(a)
}

// task18({ a: 20, b: 10 })
// task18({ a: 20, b: 30 })
// task18({ a: 20, b: 20 })

const task19 = (a) => {
    const obj = {}
    for (const item of a) {
        obj[item] = item
    }
    console.log(obj)
}

// task19(['a', 'b', 'c'])
// task19([])

const task20 = (n) => {
    const obj = {}
    for (let i = 0; i < n; i++) {
        obj[i] = n
    }
    console.log(obj)
}

// task20(0)
// task20(1)
// task20(3)

const task21 = (n) => {
    const obj = {}
    for (let i = 0; i < n; i++) {
        obj[String.fromCharCode(97 + i)] = 97 + i
    }
    console.log(obj)
}

// task21(0)
// task21(1)
// task21(3)

const task22 = (s) => {
    const obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = s[i].charCodeAt(0)
    }
    console.log(obj)
}

// task22('')
// task22('z')
// task22('test')

const task23 = (a) => {
    const obj = {}
    for (const [key, val] of a) {
        obj[key] = val
    }
    console.log(obj)
}

// task23([['a', 10], ['b', 20]])
// task23([['name', 'Vasya'], ['age', 20]])
// task23([])

// не понял
const task24 = (name) => {
    const obj = {}
    console.log(obj)
}

// task24('Vasya')
// task24('Petya')
// task24('Misha')

const task25 = (s) => {
    const obj = {}
    for (const val of s) {
        obj[val] = !obj[val] ? 1 : ++obj[val]
    }
    console.log(obj)
}

// task25('')
// task25('abc')
// task25('test')

const task26 = (a, d) => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] in d) {
            a[i] = d[a[i]]
        }
    }
    console.log(a)
}

// task26(['t', 'e', 's', 't'], {'t': 'a', 'e': 'b'})
// task26(['a', 'a', 'a'], {'a': 'b', 'b': 'a'})
// task26(['t', 'e', 's', 't'], {'x': 't'})

const task27 = (a) => {
    const obj = {}
    for (const key in a) {
        obj[a[key]] = key
    }
    console.log(obj)
}

// task27({ a: 'x', b: 'y', c: 'z' })
// task27({ a: 'a', b: 'b', c: 'c' })
// task27({ a: 'a', b: 'a', c: 'a' })

const task28 = (a) => {
    const obj = {}
    for (let i = 0; i < a.length - 1; i += 2) {
        obj[a[i]] = a[i + 1]
    }
    console.log(obj)
}

// task28(['a', 'b'])
// task28(['a', 'a', 'b', 'b'])
// task28(['a', 'b', 'a', 'b'])

const task29 = (a) => {
    // let max = -Infinity
    // let sum = 0
    // for (const key in a) {
    //     max = a[key] > max ? a[key] : max
    //     sum += a[key]
    // }
    const arr = Object.values(a)
    const max = Math.max(...arr)
    const sum = arr.reduce((x, y) => x + y)
    console.log(max, sum)
}

// task29({ a: 5, b: 7, c: 3 })
// task29({ a: -3, b: -5, c: -1 })
// task29({ a: 10, a: 20, a: -3 })

const task30 = (a) => {
    let max = -Infinity
    let result
    for (const key in a) {
        if (max < a[key]) {
            max = a[key]
            result = key
        }
    }
    console.log(result)
}

// task30({ a: 5, b: 7, c: 3 })
// task30({ a: -3, b: -5, c: -1 })
// task30({ a: 10, b: 20, b: 10 })

const task31 = (a, b) => {
    const obj = {}
    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i]
    }
    console.log(obj)
}

// task31(['key1', 'key2'], ['value1', 'value2'])
// task31(['a', 'b'], ['c', 'd'])
// task31(['a', 'a', 'a'], ['b', 'c', 'd'])

const task32 = (a) => {
    const obj = {}
    for (const item of a) {
        obj[item.name] = item.value
    }
    console.log(obj)
}
// не получилось скопировать входные данные
// task32([
//     { name: 'key1', value: 'value1' },
//     { name: 'key2', value: 'value2' }
// ])
// task32([
//     { name: 'a', value: 'b' },
//     { name: 'c', value: 'd' }
// ])
// task32([
//     { name: 'a', value: 'b' },
//     { name: 'a', value: 'c' }
// ])

const task33 = (a) => {
    const arr = Object.entries(a)
    const result = Array(arr.length * 2)
    for (let i = 0, j = 0; i < arr.length; i++, j += 2) {
        result[j] = arr[i][0]
        result[j + 1] = arr[i][1]
    }
    console.log(result)
}

// task33({ key1: 'value1', key2: 'value2' })
// task33({ a: 'b', c: 'd' })
// task33({ a: 'b', a: 'c' })

const task34 = (a) => {
    const { name, age } = a
    console.log(name, age)
}

// task34({ name: 'Vasya', age: 20 })
// task34({})

const task35 = (a) => {
    const { v1: name, v2: age } = a
    console.log(name, age)
}

// task35({ v1: 'Vasya', v2: 20 })
// task35({})

const task36 = (a) => {
    const { id, ...other } = a
    console.log(id, other)
}

// task36({ id: 1, name: 'Vasya' })
// task36({ id: 2, age: 20 })
// task36({ id: 3 })

const task37 = (a) => {
    const { response: { data } } = a
    console.log(data)
}
// не так скопировались входные данные
// task37({ response: { data: 'ok' } })
// task37({
//     method: 'GET',
//     response: {
//         status: 200,
//         data: [1, 2, 3]
//     }
// })
// task37({ response: {} })

const task38 = (a) => {
    const obj = { ...a, name: 'Vasia' }
    console.log(obj)
}

// task38({ age: 20 })
// task38({ name: 'Petya', salary: 8000 })

const task39 = (a) => {
    const obj = { name: 'Vasia', ...a }
    console.log(obj)
}

// task39({ age: 20 })
// task39({ name: 'Petya', salary: 8000 })

const task40 = (a, b) => {
    const obj = { ...a, ...b }
    console.log(obj)
}
// входные данные
// task40({ name: 'Vasya' }, { age: 20 })
// task40({ name: 'Petya' }, { name: 'Vasya' })
// task40({ name: 'Petya', age: 20 }, { name: 'Vasya', salary: 8000 })

const task41 = (a, b) => {
    const { name, age } = { ...a, ...b }
    console.log(name, age)
}
// входные данные
// task41({ name: 'Vasya' }, { age: 20 })
// task41({ name: 'Petya' }, { name: 'Vasya' })
// task41({ name: 'Petya', age: 20 }, { name: 'Vasya', salary: 8000 })

const task42 = (a) => {
    const { name = 'Vasya', age = 20 } = a
    console.log(name, age)
}

// task42({ name: 'Petya', age: 30 })
// task42({ name: 'Petya' })
// task42({ salary: 8000 })

const task43 = (a) => {
    for (const { name, age } of a) {
        console.log(name, age)
    }
}

// task43([
//     { name: 'Vasya', age: 20 },
//     { name: 'Petya', age: 30 },
//     { name: 'Oksana', age: 18 },
//     { name: 'Mikhail', age: 35 }
// ])

const task44 = ({ name, age }) => {
    console.log(name, age)
}

// task44({ name: 'Vasya', age: 20 })
// task44({ name: 'Petya', age: 30 })
// task44({})

const task45 = ({ id, ...rest }) => {
    console.log(id, rest)
}

// task45({ id: 1, name: 'Vasya', age: 20 })
// task45({ id: 2, salary: 8000 })
// task45({ id: 3 })

const task46 = (a) => {
    const [{ value: a1 }, { value: a2 }] = a
    console.log(a1, a2)
}

// task46([{ value: 20 }, { value: 30 }])
// task46([
//     { value: [] },
//     { value: {} },
//     { value: null }
// ])
// task46([{}, {}])

const task47 = (a) => {
    const [{ value: a1 = 0 }, { value: a2 = 0 }] = a
    console.log(a1, a2)
}

// task47([{ value: 20 }, { value: 30 }])
// task47([
//     { value: [] },
//     { value: {} },
//     { value: null }
// ])
// task47([{}, {}])

const linkTest = (a, b) => {
    a.name = 'Vasya'
    b = { ...b, name: 'Vasya' }
    console.log(a, b)
}

// const a = { age: 20 }
// const b = { age: 20 }
// linkTest(a, b)
// console.log(a, b)

const task48 = (a) => {
    const obj = {}
    for (const { id, ...full } of a) {
        obj[id] = { id, ...full }
    }
    console.log(obj)
}

// task48([
//     { id: 1, name: 'Vasya' },
//     { id: 2, name: 'Petya' }
// ])
// task48([
//     { id: 100, value: 'first' },
//     { id: 200, value: 'second' },
//     { id: 300, value: 'third' }
// ])

const task49 = (keys, values) => {
    let obj = {}
    const result = Array(values.length)
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[i][j]
        }
        result[i] = obj
        obj = {}
    }
    console.log(result)
}

// task49(['id', 'name', 'age'],
//     [
//         [1, 'Vasya', 20],
//         [2, 'Petya', 30]
//     ])
// task49(['key', 'value'],
//     [
//         ['a', 100],
//         ['b', 200],
//         ['c', 300]
//     ])

const task50 = (a) => {
    const obj = {}
    for (const { age } of a) {
        obj[age] = []
    }
    for (const { age, ...other } of a) {
        obj[age] = obj[age].concat({ ...other, age })
    }
    console.log(obj)
}

// task50([
//     { id: 1, name: 'Vasya', age: 20 },
//     { id: 2, name: 'Petya', age: 30 },
//     { id: 3, name: 'Ivan', age: 20 },
//     { id: 4, name: 'Fedya', age: 30 }
// ])

const task51 = (a) => {
    const groupAge = (age) => {
        return `${age - age % 10}-${age - age % 10 + 9}`
    }
    const obj = {}
    for (const { age } of a) {
        obj[groupAge(age)] = []
    }
    for (const { age, ...other } of a) {
        const group = groupAge(age)
        obj[group] = obj[group].concat({ ...other, age })
    }
    console.log(obj)
}

// task51([
//     { id: 1, name: 'Vasya', age: 21 },
//     { id: 2, name: 'Petya', age: 42 },
//     { id: 3, name: 'Ivan', age: 25 },
//     { id: 4, name: 'Fedya', age: 47 }
// ])

const task52 = (a) => {
    const obj = {}
    for (const key in a[0]) {
        obj[key] = []
    }
    for (let i = 0; i < a.length; i++) {
        for (const key in a[i]) {
            obj[key] = obj[key].concat(a[i][key])
        }
    }
    console.log(obj)
}

// task52([
//     { id: 1, name: 'Vasya', age: 21 },
//     { id: 2, name: 'Petya', age: 42 },
//     { id: 3, name: 'Ivan', age: 25 },
//     { id: 4, name: 'Fedya', age: 47 }
// ])

// добавление ключей в объект равносильно по скорости push() для массивов???
const task53 = (a) => {
    const obj = {}
    for (const item of a) {
        obj[item[0]] = item.splice(1)
    }
    console.log(obj)
}

// task53([
//     ['k1', 'v1', 'v2', 'v3'],
//     ['k2', 'v2', 'v4'],
//     ['k3', 'v3', 'v5']
// ])

// такой же как task53
const task54 = (a) => {
    const obj = {}
    for (const item of a) {
        obj[item[0]] = item.splice(1)
    }
    console.log(obj)
}

// task54([
//     ['k1', 'v1', 'v2', 'v3'],
//     ['k2', 'v2', 'v4'],
//     ['k3', 'v3', 'v5']
// ])

const task55 = (a) => {
    const arr = Object.entries(a)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = [arr[i][0], ...arr[i][1]]
    }
    console.log(arr)
}

// task55({
//     k1: ['v1', 'v2', 'v3'],
//     k2: ['v2', 'v4'],
//     k3: ['v3', 'v5']
// })

const task56 = (a) => {
    const obj = {}
    for (const [key, val] of a) {
        if (obj[key] === undefined) {
            obj[key] = [val]
        }
        else {
            obj[key] = obj[key].concat(val)
        }
    }
    console.log(obj)
}

// task56([
//     ['k1', 'v1'],
//     ['k1', 'v2'],
//     ['k2', 'v2'],
//     ['k2', 'v3'],
//     ['k3', 'v1'],
//     ['k3', 'v2'],
//     ['k3', 'v3']
// ])

const task57 = (a) => {
    const obj = {}
    for (const key in a) {
        for (const val of a[key]) {
            if (obj[val] === undefined) {
                obj[val] = [key]
            }
            else {
                obj[val] = obj[val].concat(key)
            }
        }
    }
    console.log(obj)
}

// task57({
//     k1: ['v1', 'v2', 'v3'],
//     k2: ['v2', 'v4'],
//     k3: ['v3', 'v5']
// })

const task58 = (a) => {
    const obj = {}
    for (const val of a) {
        for (let i = 1; i < val.length; i++) {
            if (obj[val[i]] === undefined) {
                obj[val[i]] = [val[i], val[0]]
            }
            else {
                obj[val[i]] = obj[val[i]].concat([val[0]])
            }
        }
    }
    console.log(Object.values(obj))
}

// task58([
//     ['k1', 'v1', 'v2', 'v3'],
//     ['k2', 'v2', 'v4'],
//     ['k3', 'v3', 'v5']
// ])

let task59 = (a) => {
    const obj = {}
    for (const { department, name, salary } of a) {
        if (obj[department] === undefined) {
            obj[department] = {
                avg: salary,
                best: [name],
                cnt: 1,
                sum: salary,
                salary: salary
            }
        }
        else {
            obj[department].sum += salary 
            obj[department].cnt++
            if (obj[department].salary === salary) {
                obj[department].best = obj[department].best.concat([name])
            }
            if (obj[department].salary < salary) {
                obj[department].best = [name]
            }
            obj[department].avg = obj[department].sum / obj[department].cnt 
        }
        
    }
    for (const key in obj) {
        delete obj[key].cnt
        delete obj[key].sum
        delete obj[key].salary
    }
    console.log(obj)
}

// task59([
//     { department: 'one', name: 'Vasya', salary: 10000 },
//     { department: 'two', name: 'Petya', salary: 12000 },
//     { department: 'one', name: 'Misha', salary: 9000 },
//     { department: 'two', name: 'Fedor', salary: 12000 },
//     { department: 'three', name: 'Olga', salary: 9000 },
//     { department: 'three', name: 'Ivan', salary: 10000 },
//     { department: 'three', name: 'Anton', salary: 8000 }
// ])

const setHandlers = (a, b) => {
    a[onclick] = () => {
        console.log('a is clicked')
    }
    a[onkeydown] = ( { key }) => {
        console.log(`Key ${key} is down on`)
    }
    b[onclick] = () => {
        console.log('b is clicked')
    }
}

setHandlers()