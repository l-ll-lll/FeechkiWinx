
function change_color(obj)
{

  obj.value && (document.body.style.backgroundColor = obj.value);

  }
  $(function() {
    $("#HSO").hide(); 
    $(".HS").on('click', function() { 
    $(" #HSO").show(); 
     appNormalise();
     }) 
     });