getLength: function( value, element ) {
    switch ( element.nodeName.toLowerCase() ) {
        case "select":
            return $( "option:selected", element ).length;
        case "input":
            if ( this.checkable( element ) ) {
                return this.findByName( element.name ).filter( ":checked" ).length;
            }
    }
    return value.length;
},