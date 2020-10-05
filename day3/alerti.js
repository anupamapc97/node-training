function MyAlert() {
    debugger
    var conf = confirm("do u want to continue")
    if (conf == true) {
        setTimeout(fuction(){
            alert("delete successfull")
        }, 2000)
    }
    else
        alert("try again")
}