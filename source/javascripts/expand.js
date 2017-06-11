var Expand = {
    initialize: function() {
      Expand.bind();
    },

    bind: function() {
      Expand.resizeHandler();
      if (window.jQuery) {
        var V = $.Velocity;
      } else {
        var V = Velocity;
      }

      $(window).on('resize', function(){
        Expand.resizeHandler();
      });

      $('[data-behavior="toggle-pages"]').click(function() {
        if ($('body').hasClass('talent')) {
          Expand.toggleTalent();
        }
        if ($('body').hasClass('about')) {
          Expand.toggleAbout();
        }
        if ($('body').hasClass('contact')) {
          Expand.toggleContact();
        }
        if ($('body').hasClass('profile')) {
          Expand.toggleMetrics();
        }
      });
    },

    resizeHandler: function(e) {
      if (window.innerWidth > 768) {
        $("#homepage").one('mousemove', function(e) {
          Expand.expandLinks();
          $(".talent").animate({left: '0', top: '0'}, 500);
          $(".about").animate({right: '0', top: '0'}, 500);
          $(".creative").animate({left: '0', bottom: '0'}, 500);
          $(".contact").animate({right: '0', bottom: '0'}, 500);
          $(".tagline").delay(800).fadeIn(650);
        });
      } else {
        if ($('body').hasClass('index')) {
          Expand.expandLinks();
          $(".talent").animate({left: '0', top: '0'}, 400);
          $(".about").animate({right: '0', top: '0'}, 400);
          $(".creative").animate({left: '0', bottom: '0'}, 400);
          $(".contact").animate({right: '0', bottom: '0'}, 400);
          $(".tagline").delay(200).fadeIn(650);
        }
      }
    },

    toggleTalent: function() {
      $("div.talent-container").toggleClass("grid");
      $('.amoeba').toggleClass('amoeba-open');
      $('.logo-container').toggleClass('active');
    },

    toggleAbout: function() {
      $("div.info-page").toggleClass("show-bios");
      $('.amoeba').toggleClass('amoeba-open');
      $('.logo-container').toggleClass('active');
    },

    toggleContact: function() {
      $("div.info-page").toggleClass("show-map");
      $('.amoeba').toggleClass('amoeba-open');
      $('.logo-container').toggleClass('active');
    },
    toggleMetrics: function() {
      $(".specs").toggleClass("show-metrics");
      $('.amoeba').toggleClass('amoeba-open');
      $('.logo-container').toggleClass('active');
    },
    expandLinks: function(e) {
      $('#home-container').addClass('expanded');
    }
};
