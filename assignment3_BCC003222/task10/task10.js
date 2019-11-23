document.write("Array Items: ");
var arr1 = [24, 53, 78, 91, 12];
for( var i = 0; i < arr1.length; i++){
    document.write(" " + arr1[i]);
}
arr1.sort(function(a, b){
    return a - b;
});
document.write("<br><br> Sorted Array: <br>")
document.write(arr1);