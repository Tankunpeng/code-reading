elements: function() {
    var validator = this,
        rulesCache = {};

    // select all valid inputs inside the form (no submit or reset buttons)
    return $( this.currentForm )
        .find( "input, select, textarea" )
        // 通过浮层选择的元素，使用了readonly -- edit by ikuner
        //.not( ":submit, :reset, :image, [disabled], [readonly]" )
        .not( ":submit, :reset, :image, [disabled]" )
        .not( this.settings.ignore )
        .filter( function() {
            if ( !this.name && validator.settings.debug && window.console ) {
                console.error( "%o has no name assigned", this );
            }

            // select only the first element for each name, and only those with rules specified
            if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
                return false;
            }

            rulesCache[ this.name ] = true;
            return true;
        });
}