var colorArray = ["#FF69B4", "#FFB6C1", "#FFA07A", "#F0E68C", "#F4A460", "#6495ED", "#008080"];
var i = 0;

function changeFone(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}