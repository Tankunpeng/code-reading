resetForm: function() {
    if ( $.fn.resetForm ) {
        $( this.currentForm ).resetForm();
    }
    this.submitted = {};
    this.lastElement = null;
    this.prepareForm();
    this.hideErrors();
    this.elements()
        .removeClass( this.settings.errorClass )
        .removeData( "previousValue" )
        .removeAttr( "aria-invalid" );
}