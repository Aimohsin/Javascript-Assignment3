var series = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
series.sort(function(a, b){
    return b - a;
});
document.write("Reverse Counting: " + series + "<br>");
series.sort(function(a, b){
    return a - b;
});
document.write("Counting: " + series + "<br>");
var evens = [];
var odds = [];
var k = "k";

var evenNumbers = function(series) {
    for (var i = 0; i < series.length; i++) {

        if ((series[i] % 2) != 1) {
            evens.push(series[i]);
                console.log(evens);
        }
        else {
            odds.push(series[i]);
                console.log(odds);
        }
    }

};

evenNumbers(series);
document.write("Even Numbers: " + evens + "<br>");
document.write("Odd Numbers: " + odds + "<br>");
document.write("Series: " + evens + k + "<br>");
