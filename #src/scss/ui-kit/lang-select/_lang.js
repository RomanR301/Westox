var lang = $('.lang');
var selection = $('.header-lang');
var select = selection.find('li');

lang.click(function(event) {
    if (lang.hasClass('active')) {
        lang.removeClass('active');
        selection.stop().slideUp(200);
    } else {
        lang.addClass('active');
        selection.stop().slideDown(200);
    }
    event.preventDefault();
});
if ($('.lang-item-uk').hasClass('current-lang')) {
  $('.lang-ua').addClass('selected');
  $('.lang-ru').removeClass('selected')
} else if ($('.lang-item-ru').hasClass('current-lang')) {
    $('.lang-ua').removeClass('selected');
    $('.lang-ru').addClass('selected')
} 