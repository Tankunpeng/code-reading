const normalizeRUle = function( data ) {
    if ( typeof data === "string" ) {
        var transformed = {};
        $.each( data.split( /\s/ ), function() {
            transformed[ this ] = true;
        });
        data = transformed;
    }
    return data;
}