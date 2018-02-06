const defaults = {
    messages: {},
    groups: {},
    rules: {},
    errorClass: "error",
    validClass: "valid",
    errorElement: "label",
    focusCleanup: false,
    focusInvalid: true,
    errorContainer: $( [] ),
    errorLabelContainer: $( [] ),
    onsubmit: true,
    ignore: ":hidden",
    ignoreTitle: false,
    onfocusin: function( element ) {
        this.lastActive = element;
        // Hide error label and remove error class on focus if enabled
        if ( this.settings.focusCleanup ) {
            if ( this.settings.unhighlight ) {
                this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
            }
            this.hideThese( this.errorsFor( element ) );
        }
    },
    onfocusout: function( element ) {
        if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
            this.element( element );
        }
    },
    onkeyup: function( element, event ) {
        if ( event.which === 9 && this.elementValue( element ) === "" ) {
            return;
        } else if ( element.name in this.submitted || element === this.lastElement ) {
            this.element( element );
        }
    },
    onclick: function( element ) {
        // click on selects, radiobuttons and checkboxes
        if ( element.name in this.submitted ) {
            this.element( element );

            // or option elements, check parent select in that case
        } else if ( element.parentNode.name in this.submitted ) {
            this.element( element.parentNode );
        }
    },
    highlight: function( element, errorClass, validClass ) {
        if ( element.type === "radio" ) {
            this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
        } else {
            $( element ).addClass( errorClass ).removeClass( validClass );
        }
    },
    unhighlight: function( element, errorClass, validClass ) {
        if ( element.type === "radio" ) {
            this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
        } else {
            $( element ).removeClass( errorClass ).addClass( validClass );
        }
    }
}