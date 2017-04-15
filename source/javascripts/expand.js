var Expand = {
    initialize: function() {
      Expand.bind();
    },
    bind: function() {
      Expand.resizeHandler();

      $("#homepage").one('mousemove', function(e) {
        Expand.expandLinks(e);
        $(".talent").animate({left: '0', top: '0'}, 400);
        $(".about").animate({right: '0', top: '0'}, 400);
        $(".creative").animate({left: '0', bottom: '0'}, 400);
        $(".contact").animate({right: '0', bottom: '0'}, 400);
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
