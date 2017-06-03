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

      var butt = document.getElementById('toggle-button');
      var logoButton = new Hammer(butt);
      logoButton.on("tap", function(event) {
        if ($('body').hasClass('talent')) {
          Expand.toggleTalent();
        }
        if ($('body').hasClass('about')) {
          Expand.toggleAbout();

        }
        if ($('body').hasClass('contact')) {
          Expand.toggleContact();
        }
      });


      $('[data-behavior="toggle-talent"]').click(function() {
        if ($('body').hasClass('talent')) {
          Expand.toggleTalent();
        }
        if ($('body').hasClass('about')) {
          Expand.toggleAbout();
        }
        if ($('body').hasClass('contact')) {
          Expand.toggleContact();
        }
      });


      if ($('body').hasClass('talent') || $('body').hasClass('about')  || $('body').hasClass('contact')) {
        $("a.layered-logo").removeAttr("href");
      }
    },

    resizeHandler: function(e) {
      if (window.innerWidth > 768) {
        console.log('resize');
        $("#homepage").one('mousemove', function(e) {
          Expand.expandLinks();
          $(".talent").animate({left: '0', top: '0'}, 400);
          $(".about").animate({right: '0', top: '0'}, 400);
          $(".creative").animate({left: '0', bottom: '0'}, 400);
          $(".contact").animate({right: '0', bottom: '0'}, 400);
          $(".layered-logo").addClass("logo-expanded");
        });
      } else {
        if ($('body').hasClass('index')) {
          Expand.expandLinks();
          $(".talent").animate({left: '0', top: '0'}, 400);
          $(".about").animate({right: '0', top: '0'}, 400);
          $(".creative").animate({left: '0', bottom: '0'}, 400);
          $(".contact").animate({right: '0', bottom: '0'}, 400);
          $(".layered-logo").addClass("logo-expanded");
        }
      }
    },

    toggleTalent: function() {
      $("div.talent-container").toggleClass("grid");
      $('.layered-logo').toggleClass('logo-expanded');
    },

    toggleAbout: function() {
      $("div.info-page").toggleClass("show-bios");
      $('.layered-logo').toggleClass('logo-expanded');
    },

    toggleContact: function() {
      $("div.info-page").toggleClass("show-map");
      $('.layered-logo').toggleClass('logo-expanded');
    },

    expandLinks: function(e) {
      $('#home-container').addClass('expanded');
    }
};
