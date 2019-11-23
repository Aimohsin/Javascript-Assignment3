document.write("Cities List:<br>");
var Cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
for(i=0 ; i < Cities.length ; i++ ){
    document.write(" " + Cities[i]);
}
document.write("<br><br>Selected Cities List:<br>");
var SelectedCities = [Cities[0], Cities[2], Cities[4]];
for(i=0 ; i < SelectedCities.length ; i++ ){
    document.write(" " + SelectedCities[i]);
}
