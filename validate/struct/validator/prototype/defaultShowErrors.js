defaultShowErrors: function() {
    var i, elements, error;
    for ( i = 0; this.errorList[ i ]; i++ ) {
        error = this.errorList[ i ];
        if ( this.settings.highlight ) {
            this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
        }
        this.showLabel( error.element, error.message );
    }
    if ( this.errorList.length ) {
        this.toShow = this.toShow.add( this.containers );
    }
    if ( this.settings.success ) {
        for ( i = 0; this.successList[ i ]; i++ ) {
            this.showLabel( this.successList[ i ] );
        }
    }
    if ( this.settings.unhighlight ) {
        for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
            this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
        }
    }
    this.toHide = this.toHide.not( this.toShow );
    this.hideErrors();
    this.addWrapper( this.toShow ).show();
}