var nc=0,sc=0,oc=0;
var arr=[1, 2, "Ram", {name: 'Sita'}];
for(var i=0;i<arr.length;i++){
    switch(typeof arr[i]){
        case "number":
            nc=nc+1
            break;
        case "string":
            sc=sc+1
            break;
        case "object":
            oc=oc+1
            break;
        }
    }
console.log("number count "+nc)
console.log("string count "+sc)
console.log("object count "+oc)