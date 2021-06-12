//Сделать чтобы пользователь мог самы выбирать конкретный цвет (Не пририотетное задание)
var colorArray = ["#708090", "#FFB6C1", "#FFA07A", "#F0E68C", "#F4A460", "#008080"];
var i = 0;

function changeFone(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}
function change_color(obj)
{

  obj.value && (document.body.style.backgroundColor = obj.value);

  }
  $( "#HS" ).click(function() {
    $( "#item" ).toggle();
});