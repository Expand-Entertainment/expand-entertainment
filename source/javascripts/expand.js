var Expand = {
    initialize: function() {
      Expand.bind();
    },
    bind: function() {
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

      $("#homepage").one('mousemove', function(e) {
        Expand.expandLinks(e);
        $(".talent").animate({left: '0', top: '0'}, 400);
        $(".about").animate({right: '0', top: '0'}, 400);
        $(".creative").animate({left: '0', bottom: '0'}, 400);
        $(".contact").animate({right: '0', bottom: '0'}, 400);
        $(".layered-logo").addClass("logo-expanded");
      });

      $('#toggle').click(function() {
        Expand.toggleTalent();
      })
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
