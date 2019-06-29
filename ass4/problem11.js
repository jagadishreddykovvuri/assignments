function check(arr,obj){
    var k=-1
        for(var i=0;i<arr.length;i++){
            if(arr[i].id===obj){
                k=i

                break;
            }
        }
            return k;
}
var cars=[
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
            {
                id:4,
                color:"black",
                speed:"200bhp",
                fuel:"disel"
            },
            {
                id:5,
                color:"black",
                speed:"200bhp",
                fuel:"disel"
            },
            {
                id:6,
                color:"black",
                speed:"200bhp",
                fuel:"disel"
            },
            {
                id:7,
                color:"black",
                speed:"200bhp",
                fuel:"disel"
            }
]
var a={ 
     Firstname:"jagadish",
     Lastname:"reddy",
     Wishlist:[],
     ownedlist:[],
     Wishlist1:function (arr){
        if(a.Wishlist.indexOf(arr)==-1){
            a.Wishlist.push(arr)
            console.log("car added to wishlist")}
        else{
            console.log("car not added to wishlist") 
        }} ,

    buycar: function (arr,obj){
            var k=check(arr.carslist,obj)
        if(k==-1){
             console.log("that car not avaliable")
        }   
    else{
        if(a.Wishlist.indexOf(cars[arr.carslist[k].id-1])==-1){
            console.log("first add to wishlist")
        }
        else{
            a.ownedlist.push(arr.carslist[k])
            console.log("required car owned")
            showroom.sellcar(obj)
            var r=a.Wishlist.indexOf(arr.carslist[k])
            a.Wishlist.splice(r,1)
        }
    }}
  }
var showroom={
    carslist:[{id:1,color:"red",speed:"100bhp",fuel:"petrol"},{id:2,color:"blue",speed:"150bhp",fuel:"gas"},{id:3,color:"black",speed:"200bhp",fuel:"disel"}],
    getcar:function(obj){
    showroom.carslist=[obj].concat(showroom.carslist)
    console.log("get car")
    },
    sellcar: function (obj){
       var k=check(showroom.carslist,obj)
       showroom.carslist.splice(k,1)
       }
    }
var showroom1={carslist:[]}
a.Wishlist1(cars[2])
a.Wishlist1(cars[2])
a.buycar(showroom,3)
showroom.getcar(cars[2])
a.buycar(showroom,3)

