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

    //   $(".logo").addClass("fade-in");
    //   setTimeout(function(){
    //      $(".wordmark").addClass("fade-in");
    //  }, 1000);
    //  setTimeout(function(){
    //    $("#initial-load").addClass("loaded");
    //    $("#initial-load").fadeOut(1000);
    // }, 4000);

      Expand.resizeHandler();

      var butt = document.getElementById('mobile-button');
      var logoButton = new Hammer(butt);
      var head = document.getElementById('header');
      var header = new Hammer(head);
      logoButton.on("tap", function(event) {
        $('.mobile-links').find('a').fadeIn();
      });
      logoButton.on("press", function(event) {
        console.log('pressed');
      });
      header.on("swipe", function(event) {
        console.log('swiped');
      });

      $("#homepage").one('mousemove', function(e) {
        Expand.expandLinks(e);
        $(".talent").animate({left: '0', top: '0'}, 400);
        $(".about").animate({right: '0', top: '0'}, 400);
        $(".creative").animate({left: '0', bottom: '0'}, 400);
        $(".contact").animate({right: '0', bottom: '0'}, 400);
        $(".layered-logo").addClass("logo-expanded");
      });

      $('[data-behavior="toggle-talent"]').click(function() {
        Expand.toggleTalent();
        var name = $(this).attr('data-name');
        var profile = document.getElementById(name);
        V(profile, 'scroll', { duration: 500, offset: -78 });
        $(profile).addClass('opaque');
      });
    },

    resizeHandler: function() {
      console.log('resize');
    },

    toggleTalent: function() {
      console.log('toggle');
      $("div.talent-container").toggleClass("grid");
    },

    expandLinks: function(e) {
      e.stopPropagation();
      $('#home-container').addClass('expanded');
    }
};
