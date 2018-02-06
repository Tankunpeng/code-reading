form: function() {
    this.checkForm();
    $.extend( this.submitted, this.errorMap );
    this.invalid = $.extend({}, this.errorMap );
    if ( !this.valid() ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
    }
    this.showErrors();
    return this.valid();
},