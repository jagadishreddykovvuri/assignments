function check(obj){
    var k=-1
        for(var i=0;i<showroomcars.length-1;i++){
            
            if(showroomcars[i].id===obj){
                k=i
                break;
            }
        }
            return k;

}
var cars=[ {
    id:1,
    color:"red",
    speed:"100bhp",
    fuel:"petrol"
},
{
    id:2,
    color:"blue",
    speed:"150bhp",
    fuel:"gas"
},
{
    id:3,
    color:"black",
    speed:"200bhp",
    fuel:"disel"
}]



var showroomcars=[
    {
        id:1,
        color:"red",
        speed:"100bhp",
        fuel:"petrol"
    },
    {
        id:2,
        color:"blue",
        speed:"150bhp",
        fuel:"gas"
    },
    {
        id:3,
        color:"black",
        speed:"200bhp",
        fuel:"disel"
    },
    {sellcar: function (obj){
        var k=check(obj)
        if(k==-1){
            console.log("that car not avaliable")
        }
        else{
            showroomcars.splice(k, 1)
            console.log(showroomcars)
        }
    
    }
}
]
var a={ Firstname:"jagadish", Lastname:"reddy",Wishlist:[],ownedlist:[],visitedcar:function (obj){
    var k=check(obj)
    if(k==-1){
        console.log("that car not avaliable")
    }
    else{
    a.Wishlist.push(showroomcars[k])
    console.log(a)}
   
} , buycar: function (obj){
    var k=check(obj)
    if(k==-1){
        console.log("that car is not avaliable")
    }else{
    a.ownedlist.push(showroomcars[k])
    console.log(a)}

}}






a.visitedcar(1)
a.buycar(4)
showroomcars[3].sellcar(4)

//console.log("      ")
//console.log(showroomcars)