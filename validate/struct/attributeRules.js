const attributeRules = function( element ) {
    var rules = {},
        $element = $( element ),
        type = element.getAttribute( "type" ),
        method, value;

    for ( method in $.validator.methods ) {

        // support for <input required> in both html5 and older browsers
        if ( method === "required" ) {
            value = element.getAttribute( method );
            // Some browsers return an empty string for the required attribute
            // and non-HTML5 browsers might have required="" markup
            if ( value === "" ) {
                value = true;
            }
            // force non-HTML5 browsers to return bool
            value = !!value;
        } else {
            value = $element.attr( method );
        }

        // convert the value to a number for number inputs, and for text for backwards compability
        // allows type="date" and others to be compared as strings
        if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
            value = Number( value );
        }

        if ( value || value === 0 ) {
            rules[ method ] = value;
        } else if ( type === method && type !== "range" ) {
            // exception: the jquery validate 'range' method
            // does not test for the html5 'range' type
            rules[ method ] = true;
        }
    }

    // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
    if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
        delete rules.maxlength;
    }

    return rules;
}