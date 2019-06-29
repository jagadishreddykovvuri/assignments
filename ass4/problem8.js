var string1="You progress the nation follows"
var a=string1.split(" ")
max=0
var word=''
for(var i=0;i<a.length;i++){
    if(a[i].length>max){
      max=a[i].length
      word=a[i]}
}
console.log(word)