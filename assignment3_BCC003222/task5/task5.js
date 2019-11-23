function getUnique(array){
    var uniqueArray = [];
        for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var sampleOutput = getUnique(arr1);
document.write(sampleOutput);

