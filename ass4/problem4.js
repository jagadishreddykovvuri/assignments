function vote_eligible(arr){
  var output=arr.filter(function(number) {
      return number.age >= 18;
   });
   console.log(output);
  }
  vote_eligible([{fullName: 'Sita', age: 16}, {fullName: 'Ram', age: 19}, {fullName:'Lakshman', age: 15}])