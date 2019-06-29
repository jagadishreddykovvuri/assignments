var obj={1: "One",2: "Two"}
var out={}
for(var key in obj){
out[obj[key]]=key
}
console.log(out)