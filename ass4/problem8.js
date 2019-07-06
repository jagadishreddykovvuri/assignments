function long_word(string){
  var a=string.split(" ")
  max=0
  var word=''
  for(var i=0;i<a.length;i++){
      if(a[i].length>max){
        max=a[i].length
        word=a[i]}
  }
  console.log(word)
}
long_word("You progress the nation follows strengthen")