var arr=["a", "a", "b", "d", "e"]
var obj=[]
var out={}
for(var i=0;i<arr.length;i++){
   if(obj.indexOf(arr[i])==-1){
        obj.push(arr[i])
   }
}
for(var i=0;i<obj.length;i++){
    out[obj[i]]=arr.filter(function(x){return x==obj[i]}).length
}
console.log(out)
