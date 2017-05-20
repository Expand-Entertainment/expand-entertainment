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
        Expand.toggleTalent();
      });

      $('[data-behavior="toggle-talent"]').click(function() {
        Expand.toggleTalent();
      });

      $("header").hover(
        function() {
          $('.mobile-links').find('.page-link').fadeIn();
        }, function() {
          $('.mobile-links').find('.page-link').fadeOut();
        }
      );

      $("#homepage").one('mousemove', function(e) {
        Expand.expandLinks(e);
        $(".talent").animate({left: '0', top: '0'}, 400);
        $(".about").animate({right: '0', top: '0'}, 400);
        $(".creative").animate({left: '0', bottom: '0'}, 400);
        $(".contact").animate({right: '0', bottom: '0'}, 400);
        $(".layered-logo").addClass("logo-expanded");
      });

      if ($('body').hasClass('talent')) {
        $("a.layered-logo").removeAttr("href");
      }
    },

    resizeHandler: function() {
      var lastScrollTop = 0;

      $(window).scroll(function(event){
        if (window.innerWidth < 768) {
          var st = $(this).scrollTop();

          if (st > lastScrollTop){
             $('.mobile-links').find('.page-link').fadeOut();
             $("header").fadeOut();
          } else {
              $('.mobile-links').find('.page-link').fadeIn();
              $("header").fadeIn();
          }

          lastScrollTop = st;
        }
      });
    },

    toggleTalent: function() {
      $("div.talent-container").toggleClass("grid");
    },

    expandLinks: function(e) {
      e.stopPropagation();
      $('#home-container').addClass('expanded');
    }
};
