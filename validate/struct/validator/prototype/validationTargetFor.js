validationTargetFor: function( element ) {

    // If radio/checkbox, validate first element in group instead
    if ( this.checkable( element ) ) {
        element = this.findByName( element.name );
    }

    // Always apply ignore filter
    return $( element ).not( this.settings.ignore )[ 0 ];
}