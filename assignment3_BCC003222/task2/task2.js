var StudName = ["Michael", "John", "Tony"];
var Score = [320, 230, 480];
var total = 500;
var i;

function percent (a, b){
    return (100 * a) / b;
}

for (i = 0 ; i < StudName.length ; i++){
    document.write("Score of " + StudName[i] + " is " + Score[i] + ". Percentage is " + percent(Score[i],total) + "%<br>");
}