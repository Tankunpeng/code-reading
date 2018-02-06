showLabel: function( element, message ) {
    var place, group, errorID,
        error = this.errorsFor( element ),
        elementID = this.idOrName( element ),
        describedBy = $( element ).attr( "aria-describedby" );
    if ( error.length ) {
        // refresh error/success class
        error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
        // replace message on existing label
        error.html( message );
    } else {
        // create error element
        error = $( "<" + this.settings.errorElement + ">" )
            .attr( "id", elementID + "-error" )
            .addClass( this.settings.errorClass )
            .html( message || "" );

        // Maintain reference to the element to be placed into the DOM
        place = error;
        if ( this.settings.wrapper ) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
        }
        if ( this.labelContainer.length ) {
            this.labelContainer.append( place );
        } else if ( this.settings.errorPlacement ) {
            this.settings.errorPlacement( place, $( element ) );
        } else {
            place.insertAfter( element );
        }

        // Link error back to the element
        if ( error.is( "label" ) ) {
            // If the error is a label, then associate using 'for'
            error.attr( "for", elementID );
        } else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
            // If the element is not a child of an associated label, then it's necessary
            // to explicitly apply aria-describedby

            errorID = error.attr( "id" ).replace( /(:|\.|\[|\])/g, "\\$1");
            // Respect existing non-error aria-describedby
            if ( !describedBy ) {
                describedBy = errorID;
            } else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
                // Add to end of list if not already present
                describedBy += " " + errorID;
            }
            $( element ).attr( "aria-describedby", describedBy );

            // If this element is grouped, then assign to all elements in the same group
            group = this.groups[ element.name ];
            if ( group ) {
                $.each( this.groups, function( name, testgroup ) {
                    if ( testgroup === group ) {
                        $( "[name='" + name + "']", this.currentForm )
                            .attr( "aria-describedby", error.attr( "id" ) );
                    }
                });
            }
        }
    }
    if ( !message && this.settings.success ) {
        error.text( "" );
        if ( typeof this.settings.success === "string" ) {
            error.addClass( this.settings.success );
        } else {
            this.settings.success( error, element );
        }
    }
    this.toShow = this.toShow.add( error );
},