let color = window.localStorage.getItem('color'); 
if(color){
  document.body.style.backgroundColor = color;
}


function change_color(obj)
{
  obj.value && (document.body.style.backgroundColor = obj.value);
  window.localStorage.setItem('color',obj.value);
}
$('#HSO').hide();
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