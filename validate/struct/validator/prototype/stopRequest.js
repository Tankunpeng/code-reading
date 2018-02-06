
stopRequest: function( element, valid ) {
    this.pendingRequest--;
    // sometimes synchronization fails, make sure pendingRequest is never < 0
    if ( this.pendingRequest < 0 ) {
        this.pendingRequest = 0;
    }
    delete this.pending[ element.name ];
    if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
        $( this.currentForm ).submit();
        this.formSubmitted = false;
    } else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
        $( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
        this.formSubmitted = false;
    }
},