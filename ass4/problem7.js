function changes(obj){
    var out={}
    for(var key in obj){
    out[obj[key]]=key
    }
    console.log(out)
}
changes({1: "One",2: "Two"})