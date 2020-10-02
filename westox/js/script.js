let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },
  hoverTab: function (el, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    el.currentTarget.className += " active";
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
  }
};

let modal = {
  closeButton: $('.modal__close'),
  closeOverlay: $('.modal'),
  can: 1,
  init: function () {
      this.events();
  },
  openModal: function (id) {
      let modalWindow = $(id);
      modalWindow.fadeIn();
      modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');

      $('body, html').addClass('active');
  },

  closeModal: function (id) {
      let modalWindow = $(id);
      modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
      modalWindow.fadeOut();
      $('body, html').removeClass('active');
  },

  events: function () {
    let langToggle = document.querySelector('.lang-select-wrapper') !== null;
    if (langToggle) {
        (document).querySelector('.lang-select-wrapper').addEventListener('click', function() {
            this.querySelector('.lang-select').classList.toggle('open');
            for (const option of document.querySelectorAll(".lang-option")) {
                option.addEventListener('click', function() {

                    if (!this.classList.contains('selected')) {
                        this.parentNode.querySelector('.lang-option.selected').classList.remove('selected');
                        this.classList.add('selected');
                        this.closest('.lang-select').querySelector('.lang-select__trigger span').textContent = this.textContent;
                    }
                })
            }
            window.addEventListener('click', function(e) {
                const select1 = document.querySelector('.lang-select')
                if (!select1.contains(e.target)) {
                    select1.classList.remove('open');
                }
            });
        })
    }
      $(document).on('click', '.modalTrigger', function (e) {
          e.preventDefault();
          let self = $(this),
              target = self.attr('data-modal');
          modal.openModal(target);

      });

      $(document).on('click', '.modal', function (event) {
          let self = '#' + $(this).attr('id');
          if (event.target.className == 'modal__body') {
              modal.closeModal(self);
          }
      });

      $(document).on('click', '.modal__close', function () {
          let self = '#' + $(this).closest('.modal').attr('id');
          modal.closeModal(self);
      });
        $(document).on('click', '.scroll-to-top i', function () {
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 500);
      });
        $(document).on('click', '.scroll-down i', function () {
            $('html, body').animate({
                scrollTop: $(this).closest("section").next().offset().top - 90
             }, "slow");
      });

      $(".set").on("click", function(e) {
      e.preventDefault();
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
          $(this)
            .find(".content")
            .slideUp(200);
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
          $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
          $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
          $(".set").removeClass("active");
          $(this).addClass("active");
          $(".content").slideUp(200);
          $(this)
            .find(".content")
            .slideDown(200);
        }
      });
    
      $('.mask-phone').mask('+38 0(99)-999-99-99');

      // var canvas = document.querySelectorAll('.canvas')

      // var ctx = canvas.getContext('3d')
      // canvas.width = 1000
      // canvas.height = 1000
    
      // var party = SmokeMachine(ctx, [54, 16.8, 18.2])
    
      // party.start() // start animating
    
      // party.addSmoke(500,500,10) // wow we made smoke
    
      // setTimeout(function(){
    
      //   party.stop() // stop animating
    
      //   party.addSmoke(600,500,100)
      //   party.addSmoke(500,600,20)
    
      //   for(var i=0;i<10;i++){
      //     party.step(10) // pretend 10 ms pass and rerender
      //   }
    
      //   setTimeout(function(){
      //     party.start()
      //   },1000)
    
      // },1000)
    
  }
};


jQuery(function () {
  front.init();
  modal.init();
});

let mainScreenHeight = $('.main-screen').height();
$(window).scroll(function () {
  if ($(this).scrollTop() > mainScreenHeight) {
    $('header').addClass("scroll-header");
  } else {
  	$('header').removeClass("scroll-header");
  }
});

// ICES
// var lFollowX = 0,
// 		lFollowY = 0,
// 		x = 0,
// 		y = 0,
// 		friction = 1 / 30;

// function moveBackground() {
// 	x += (lFollowX - x) * friction;
// 	y += (lFollowY - y) * friction;

// 	//  translate = 'translateX(' + x + 'px, ' + y + 'px)';
// 	translate = 'translateX(' + x + 'px) translateY(' + y +'px)';

// 	$('.ice').css({
// 	'-webit-transform': translate,
// 	'-moz-transform': translate,
// 	'transform': translate
// 	});

// 	window.requestAnimationFrame(moveBackground);
// }

// $(window).on('mousemove click', function(e) {
	
// 	var isHovered = $('.ice:hover').length > 0;
// 	// console.log(isHovered);
	
// 	//if(!$(e.target).hasClass('animate-this')) {
// 	if(!isHovered) {
// 		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX)),
// 				lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

// 		lFollowX = (40 * lMouseX) / 100;
// 		lFollowY = (20 * lMouseY) / 100;
// 	}
// });

// moveBackground();


$('.home-about__media').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  callbacks: {
    elementParse: function(item) {
      item.type = 'iframe',
      item.iframe = {
          patterns: {
            youtube: {
              index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

              id: 'v=', // String that splits URL in a two parts, second part should be %id%
              // Or null - full URL will be returned
              // Or a function that should return %id%, for example:
              // id: function(url) { return 'parsed id'; } 

              src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
          }
      }
    }
  }
});


$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    titleSrc: 'title',
      titleSrc: function(item) {
        return item.el.attr('title');
    },
    markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<div class="mfp-img"></div>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
              // '<a href="www.instagram.com" class="instagram-btn btn btn-primary"><i class="icon-icon-instagram"></i>Переглянути в Instagram</a>'+
              '<div class="mfp-counter"></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

  },
  callbacks: {
    elementParse: function(item) {
      // console.log(item.el[0].className);
      if(item.el[0].className == 'video') {
        item.type = 'iframe',
        item.iframe = {
           patterns: {
             youtube: {
               index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

               id: 'v=', // String that splits URL in a two parts, second part should be %id%
                // Or null - full URL will be returned
                // Or a function that should return %id%, for example:
                // id: function(url) { return 'parsed id'; } 

               src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
             },
             vimeo: {
               index: 'vimeo.com/',
               id: '/',
               src: '//player.vimeo.com/video/%id%?autoplay=1'
             },
             gmaps: {
               index: '//maps.google.',
               src: '%id%&output=embed'
             }
           }
        }
      } else {
        item.type = 'image',
        item.tLoading = 'Loading image #%curr%...',
        item.mainClass = 'mfp-img-mobile',
        item.image = {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      }
    },
  }
});




$(document).ready(function () {
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 26,
    columnWidth: '.grid-sizer',
    initLayout: false,
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  // $(".instagram img").attr("alt", "instagram");

  // $(document).on('click', '.grid-item', function() {
  //   $('img[alt="instagram"]').siblings().addClass('visible');
  // })

  // $(document).on('click', '.mfp-arrow', function() {
  //   $(".mfp-img").each(function(){
  //     // var $this = $(this);
  //     // if (!$this.attr("alt")){
  //     //   console.log('has-alt')
  //     // }
  //  });

    // if ($('.mfp-img[alt="instagram"]')) {
    //   $('.mfp-img').siblings().addClass('visible');
    // } else {
    //   $('.mfp-img').siblings().removeClass('visible');
    // }
//   })
});

if($(window).width() > 992) {
  let items = $('.grid .grid-item');
  var attribute = 'data-rellax-speed';
  let i;

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute(attribute, Math.random() * (1 - 3)) - 3;

  }
  var rellax = new Rellax('.grid-item', {
    center: true
  });
} else {
  null
}







$(document).ready(function(){
  var swiperTestimonial = new Swiper('.clients-carousel', {
    slidesPerView: 3,
    // spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        autoHeight: true,
        },
        992: {
          slidesPerView: 3,
        },
    }
  });
})