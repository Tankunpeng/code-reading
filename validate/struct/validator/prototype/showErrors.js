showErrors: function( errors ) {
    if ( errors ) {
        // add items to error list and map
        $.extend( this.errorMap, errors );
        this.errorList = [];
        for ( var name in errors ) {
            this.errorList.push({
                message: errors[ name ],
                element: this.findByName( name )[ 0 ]
            });
        }
        // remove items from success list
        this.successList = $.grep( this.successList, function( element ) {
            return !( element.name in errors );
        });
    }
    if ( this.settings.showErrors ) {
        this.settings.showErrors.call( this, this.errorMap, this.errorList );
    } else {
        this.defaultShowErrors();
    }
}