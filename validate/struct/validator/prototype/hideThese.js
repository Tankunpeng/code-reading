hideThese: function( errors ) {
    errors.not( this.containers ).text( "" );
    this.addWrapper( errors ).hide();
},