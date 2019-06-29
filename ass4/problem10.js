var studentlist=[{"name" : "John","id": 1,"gpa" : 7.8},{"name" : "Rick","id": 2,"gpa" : 3.9},{"name" : "Lisa","id": 3,"gpa" : 8.9},{"name" : "John","id": 1,"gpa" : 8.9}]
var out=[]
var d=0,a=0,b=0,c=0,f=0

for(var i=0;i<studentlist.length;i++){
    /*calculation*/
        if(studentlist[i].gpa>=8){
            d=d+1
        }
        else if(studentlist[i].gpa>=7 && studentlist[i].gpa<8){
            a=a+1
        }
        else if(studentlist[i].gpa>=6 && studentlist[i].gpa<7){
            b=b+1
        }
        else if(studentlist[i].gpa>=5 && studentlist[i].gpa<6){
            c=c+1
        }
        else{
            f=f+1
        }
        if(i===0){
            out.push(studentlist[i])
        }
        else{
            var j=0,k=0
            var l=out.length
            while(j<l){
                if(out[j].id===studentlist[i].id){
                    if(out[j].gpa<studentlist[i].gpa){
                        out[j]=studentlist[i]
                        k=1
                    }
            }
            j=j+1
            }
            if(k===0){
                out.push(studentlist[i])
            }
    }



      
}
console.log(out)
console.log("Distintion:"+d+"\n A grade:"+a+"\n B grade:"+b+"\n C grade:"+c+"\nFail:"+f)
