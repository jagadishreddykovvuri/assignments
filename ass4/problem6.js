function count(arr){
    var obj=[]
    var out={}
    for(var i=0;i<arr.length;i++){
        if(out[arr[i]]){
            out[arr[i]]=out[arr[i]]+1
        }

        else{
            out[arr[i]]=1
        }
        
    console.log(out)
}
}
count(["a", "a", "b", "d", "e",'',"",'  '])
