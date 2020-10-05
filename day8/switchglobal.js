console.log(process.argv)
var a=process.argv[2]
switch(a)
{
case "dev":
    console.log("u r in development mode")
    break;
    case "prod":
    console.log("u r in production mode")
    break;
    default:
        console.log("default mode")
        break;
}