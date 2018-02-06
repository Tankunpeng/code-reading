const validator = function( options, form ) {
    this.settings = $.extend( true, {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};