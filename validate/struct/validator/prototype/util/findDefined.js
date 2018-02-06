findDefined: function() {
    for ( var i = 0; i < arguments.length; i++) {
        if ( arguments[ i ] !== undefined ) {
            return arguments[ i ];
        }
    }
    return undefined;
},