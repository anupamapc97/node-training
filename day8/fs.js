readFile=(file,callback)=>{
    console.log("started filereading")
    callback("","welcome to node files")
}
module.exports.readFile=readFile