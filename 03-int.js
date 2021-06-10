const task3 = (r) => {
    console.log(r % 10)
}

// task3(5)
// task3(27)
// task3(150)
// task3(199)

const task4 = (t) => {
    console.log(t % 3600)
}

// task4(4567)
// task4(1619633183)
// task4(1584139518)

const task5 = (t) => {
    console.log(Math.floor(t / 3600) % 24, Math.floor(t / 60) % 60)
}

// task5(4567)
// task5(1619633183)
// task5(1584139518)

const task6 = (t) => {
    console.log(Math.floor(t / 3600) % 24, Math.floor(t / 60) % 60)
}

task6()
