var Expand = {
    initialize: function() {
      Expand.bind();
    },
    bind: function() {
      Expand.resizeHandler();

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
    }
};
