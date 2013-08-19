(function($) {
  Drupal.behaviors.mobileMenu = {
    attach: function(context, settings) {

      var button;
      var menu = $('.block--menu-menu-mobile-menu ul');

      $(menu).hide();

      if ($('.mobile-button').length == 0) {

        button = $('.l-branding').after("<div><a href='#' class='mobile-button pull-right'><span class='bar'></span><span class='bar'></span><span class='bar'></span></a><div>");

        $('.mobile-button').click(function() {
          menu.slideToggle('fast');

          return false;

      });
      }

    }
  }
})(jQuery);
