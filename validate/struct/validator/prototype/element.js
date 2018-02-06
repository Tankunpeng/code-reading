element: function( element ) {
    var cleanElement = this.clean( element ),
        checkElement = this.validationTargetFor( cleanElement ),
        result = true;

    this.lastElement = checkElement;

    if ( checkElement === undefined ) {
        delete this.invalid[ cleanElement.name ];
    } else {
        this.prepareElement( checkElement );
        this.currentElements = $( checkElement );

        result = this.check( checkElement ) !== false;
        if ( result ) {
            delete this.invalid[ checkElement.name ];
        } else {
            this.invalid[ checkElement.name ] = true;
        }
    }
    // Add aria-invalid status for screen readers
    $( element ).attr( "aria-invalid", !result );

    if ( !this.numberOfInvalids() ) {
        // Hide error containers on last error
        this.toHide = this.toHide.add( this.containers );
    }
    this.showErrors();
    return result;
}