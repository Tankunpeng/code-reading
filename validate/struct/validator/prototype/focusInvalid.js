focusInvalid: function() {
    if ( this.settings.focusInvalid ) {
        try {
            $( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
                .filter( ":visible" )
                .focus()
                // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                .trigger( "focusin" );
        } catch ( e ) {
            // ignore IE throwing errors when focusing hidden elements
        }
    }
},