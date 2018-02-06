const removeAttrs = function( attributes ) {
    var result = {},
        $element = this;
    $.each( attributes.split( /\s/ ), function( index, value ) {
        result[ value ] = $element.attr( value );
        $element.removeAttr( value );
    });
    return result;
}