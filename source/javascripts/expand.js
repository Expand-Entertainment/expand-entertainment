var Expand = {
    initialize: function() {
      Expand.bind();
    },

    bind: function() {
      if (window.jQuery) {
        var V = $.Velocity;
      } else {
        var V = Velocity;
      }

      $("#initial-load").addClass("loaded");
      $("#initial-load").fadeOut(1000);

      // $(".logo").addClass("fade-in");
      // setTimeout(function(){
      //    $(".wordmark").addClass("fade-in");
      //  }, 1000);
      //  setTimeout(function(){
      //    $("#initial-load").addClass("loaded");
      //    $("#initial-load").fadeOut(1000);
      // }, 4000);

      $(window).on('resize', function(){
        Expand.resizeHandler();
      });

      var butt = document.getElementById('toggle-button');
      var logoButton = new Hammer(butt);
      logoButton.on("tap", function(event) {
        if ($('body').hasClass('talent')) {
          Expand.toggleTalent();
        }
        if ($('body').hasClass('about')) {
          Expand.toggleAbout();
        }
      });

      $('[data-behavior="toggle-talent"]').click(function() {

        if ($('body').hasClass('talent')) {
          Expand.toggleTalent();
        }
        if ($('body').hasClass('about')) {
          Expand.toggleAbout();
        }

      });


      $("#homepage").one('mousemove', function(e) {
        Expand.expandLinks(e);
        $(".talent").animate({left: '0', top: '0'}, 400);
        $(".about").animate({right: '0', top: '0'}, 400);
        $(".creative").animate({left: '0', bottom: '0'}, 400);
        $(".contact").animate({right: '0', bottom: '0'}, 400);
        $(".layered-logo").addClass("logo-expanded");
      });

      if ($('body').hasClass('talent') || $('body').hasClass('about') ) {
        $("a.layered-logo").removeAttr("href");
      }

      var lastScrollTop = 0;

      $(window).scroll(function(event){
        if (window.innerWidth < 768) {
          var st = $(this).scrollTop();

          if (st > lastScrollTop){
             if ($('.page-link').hasClass('active')) {
               $('.page-link').removeClass('active');
             }
             $("header").fadeOut();
          } else {
              $('.mobile-links').find('.page-link').addClass('active');
              $("header").fadeIn();
          }

          lastScrollTop = st;
        }
      });
    },

    resizeHandler: function() {
      console.log('resize')
    },

    toggleTalent: function() {
      $("div.talent-container").toggleClass("grid");
    },

    toggleAbout: function() {
      $("div.info-page").toggleClass("show-bios");
    },

    expandLinks: function(e) {
      e.stopPropagation();
      $('#home-container').addClass('expanded');
    }
};
