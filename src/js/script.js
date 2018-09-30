$(document).ready(function(){
  $('[data-modal]').click(function(){
    var id = $(this).attr('data-modal');
    $("#"+id).addClass('js-active');
  });
  $('.modal__close').click(function(){
    $(this).closest('.modal').removeClass('js-active');
  });
});
