findByName: function( name ) {
    return $( this.currentForm ).find( "[name='" + name + "']" );
},