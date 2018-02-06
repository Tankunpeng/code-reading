dependTypes: {
    "boolean": function( param ) {
        return param;
    },
    "string": function( param, element ) {
        return !!$( param, element.form ).length;
    },
    "function": function( param, element ) {
        return param( element );
    }
},