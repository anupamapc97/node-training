function fn1() {
    console.log("inside fn1")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("fn1")
        }, 3000)
    })
}
function fn2() {
    console.log("inside fn2")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("fn2")
        }, 1000)
    })
}
async function sequen() {
    console.log("inside sequen")
    const f1 = await fn1()
    console.log(f1)
    const f2 = await fn2()
    console.log(f2)
}
// sequen()
async function concurr() {
    console.log("inside concurr")
    const f1 = fn1()
    const f2 = fn2()
    console.log(await f1)
    // const f2=fn2()
    console.log(await f2)
}
// concurr()
async function parallel() {
    console.log("parallel started")
    await Promise.all([fn1(), fn2()]).then(
        result => {
            console.log(result[0])
            console.log(result[1])
        }
    )
}
parallel()