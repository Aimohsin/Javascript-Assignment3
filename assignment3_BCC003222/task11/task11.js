var arr = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];

var alert = prompt("Welcome to ABC bakery! What do you want to order Sir/Ma'am?");

function findValueInArray(value,arr){
    var result; 
   
    for(var i=0; i<arr.length; i++){
      var name = arr[i];
      if(name == value){
        result = 'Exist';
        document.write("Item is available");
        break;
      }
      else{
        result = "Doesn't exist";
        document.write("Item is not available");
        break;
      }
    }
  }
findValueInArray(alert,arr)
