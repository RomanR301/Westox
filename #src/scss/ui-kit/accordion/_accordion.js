$(document).ready(function() {
  $(".accordion__item .accordion-toggle").on("click", function(e) {
  e.preventDefault();
  let $this = $(this).parent();
    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $this
        .find(".content")
        .slideUp(200);
    } else {
      $(".accordion__item").removeClass("active");
      $this.addClass("active");
      $(".content").slideUp(200);
      $this
        .find(".content")
        .slideDown(200);
    }
  });
});