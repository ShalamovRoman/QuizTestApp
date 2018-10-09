$(document).ready(function(){
  $('[data-modal]').click(function(){
    var id = $(this).attr('data-modal');
    $("#"+id).addClass('js-active');
  });
  $('.modal__close').click(function(){
    $(this).closest('.modal').removeClass('js-active');
    $(this).closest('.modal').find('.test__tab').removeClass('js-active').first().addClass('js-active');
  });
  $('.test').each(function() {
    var test = $(this);
    var current = test.find('.test__tab.js-active');
    var next = test.find('.test__tab.js-active+.test__tab');
    current.find('.test__next').click(function() {
      current.removeClass('js-active');
      next.addClass('js-active');
    });
  });
});
