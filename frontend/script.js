var colorArray = ["#FF69B4", "#C71585", "#FFA07A", "#F0E68C", "#F4A460", "#6495ED"];
var i = 0;

function changeFone(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}