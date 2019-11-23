document.write("Array Items: ");
var arr1 = [24, 53, 78, 91, 12];
for (var i = 0; i< arr1.length; i++){
    document.write(" " +arr1[i]);
}
var largest= 0;

for (i=0; i<=largest;i++){
    if (arr1[i]>largest) {
        var largest=arr1[i];
    }
}
document.write("<br><br>The Largest number is: " + largest);