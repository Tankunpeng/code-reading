errorsFor: function( element ) {
    var name = this.idOrName( element ),
        describer = $( element ).attr( "aria-describedby" ),
        selector = "label[for='" + name + "'], label[for='" + name + "'] *";

    // aria-describedby should directly reference the error element
    if ( describer ) {
        selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
    }
    return this
        .errors()
        .filter( selector );
}