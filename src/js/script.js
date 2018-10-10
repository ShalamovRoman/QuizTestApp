$(document).ready(function(){
  $('[data-modal]').click(function(){
    var id = $(this).attr('data-modal');
    $("#"+id).addClass('js-active');
  });
  $('.modal__close').click(function(){
    $(this).closest('.modal').removeClass('js-active');
    $(this).closest('.modal').find('.test__tab').removeClass('js-active').first().addClass('js-active');
  });
  $('.test__next').click(function(){
    var tmp = $(this).closest('.test__tab');
    if (tmp.next().length!=0) {
      tmp.removeClass('js-active');
      tmp.next().addClass('js-active');
    }
  });
});
