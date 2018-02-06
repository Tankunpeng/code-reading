errors: function() {
    var errorClass = this.settings.errorClass.split( " " ).join( "." );
    return $( this.settings.errorElement + "." + errorClass, this.errorContext );
},