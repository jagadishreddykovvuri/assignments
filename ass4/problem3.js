

function find_types_count(array){
    var nc=0,sc=0,oc=0;
    for(var i=0;i<array.length;i++){
        switch(typeof array[i]){
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
console.log("object count "+oc)}
find_types_count([1, 2, "Ram", {name: 'Sita'},"",'',[1],false])