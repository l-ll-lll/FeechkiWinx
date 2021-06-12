
function change_color(obj)
{
  obj.value && (document.body.style.backgroundColor = obj.value);
}

$('#HS').click(()=>{
   $("#HSO").toggle();
})
  // $(function() {
  //   
  //   $(".HS").on('click', function() { 
  //   $(" #HSO").show(); 
  //    appNormalise();
  //    }) 
  //    });