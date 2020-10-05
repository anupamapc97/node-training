var fetch = require('node-fetch')
//  process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0
async function some(callback) {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let user = await response.json()
    callback(user)
}
function main() {
    some(function (res) {
        // res => {
            var ex = res.filter(x => x.postId % 2 == 0)
            console.log(ex)
        // }
        //  err=>{console.log(err)}
    })
}
main()