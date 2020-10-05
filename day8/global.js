// console.log(__dirname)
// gives the name of the directory
// console.log(__filename)
// gives the name of the file
console.log(process.argv)
if(process .argv[2]=="dev"){
 console.log("u are in development mode")

}
else if(process .argv[2]=="prod"){
    console.log("u are in production mode")
} 
 else{
     console.log("default mode")
 }  
