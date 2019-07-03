function neighbours(inputword,c){
    if(inputword.indexOf(c)===-1){
       console.log("Given letter does not exist in the string")
    }
    else{
    var res=inputword[inputword.indexOf(c)-1]+inputword[inputword.indexOf(c)+1]
    res=res.replace("undefined","")
    console.log(res)
    }
}
neighbours("IBHUBS",'U')