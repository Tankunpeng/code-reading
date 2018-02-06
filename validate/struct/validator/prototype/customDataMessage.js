customDataMessage: function( element, method ) {
    return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
        method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
},