addWrapper: function( toToggle ) {
    if ( this.settings.wrapper ) {
        toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
    }
    return toToggle;
},