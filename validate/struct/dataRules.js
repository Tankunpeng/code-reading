const dataRules = function( element ) {
    var method, value,
        rules = {}, $element = $( element );
    for ( method in $.validator.methods ) {
        value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
        if ( value !== undefined ) {
            rules[ method ] = value;
        }
    }
    return rules;
}