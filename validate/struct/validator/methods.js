const methods = {

    // http://jqueryvalidation.org/required-method/
    required: function( value, element, param ) {
        // check if dependency is met
        if ( !this.depend( param, element ) ) {
            return "dependency-mismatch";
        }
        if ( element.nodeName.toLowerCase() === "select" ) {
            // could be an array for select-multiple or a string, both are fine this way
            var val = $( element ).val();
            return val && val.length > 0;
        }
        if ( this.checkable( element ) ) {
            return this.getLength( value, element ) > 0;
        }
        return $.trim( value ).length > 0;
    },

    // http://jqueryvalidation.org/email-method/
    email: function( value, element ) {
        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
        // Retrieved 2014-01-14
        // If you have a problem with this implementation, report a bug against the above spec
        // Or use custom methods to implement your own email validation
        return this.optional( element ) || /^([A-Za-z\d]+)([\._A-Za-z\d-]+)?@([A-Za-z\d])(([_A-Za-z\d-])+)?(\.[_A-Za-z\d-]+)*\.([A-Za-z]{2,4})$/i.test( value );
    },

    // http://jqueryvalidation.org/url-method/
    url: function( value, element ) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return this.optional( element ) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
    },

    // http://jqueryvalidation.org/date-method/
    date: function( value, element ) {
        return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
    },

    // http://jqueryvalidation.org/dateISO-method/
    dateISO: function( value, element ) {
        return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
    },

    // http://jqueryvalidation.org/number-method/
    number: function( value, element ) {
        return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
    },

    // http://jqueryvalidation.org/digits-method/
    digits: function( value, element ) {
        return this.optional( element ) || /^\d+$/.test( value );
    },

    // http://jqueryvalidation.org/creditcard-method/
    // based on http://en.wikipedia.org/wiki/Luhn/
    creditcard: function( value, element ) {
        if ( this.optional( element ) ) {
            return "dependency-mismatch";
        }
        // accept only spaces, digits and dashes
        if ( /[^0-9 \-]+/.test( value ) ) {
            return false;
        }
        var nCheck = 0,
            nDigit = 0,
            bEven = false,
            n, cDigit;

        value = value.replace( /\D/g, "" );

        // Basing min and max length on
        // http://developer.ean.com/general_info/Valid_Credit_Card_Types
        if ( value.length < 13 || value.length > 19 ) {
            return false;
        }

        for ( n = value.length - 1; n >= 0; n--) {
            cDigit = value.charAt( n );
            nDigit = parseInt( cDigit, 10 );
            if ( bEven ) {
                if ( ( nDigit *= 2 ) > 9 ) {
                    nDigit -= 9;
                }
            }
            nCheck += nDigit;
            bEven = !bEven;
        }

        return ( nCheck % 10 ) === 0;
    },

    // http://jqueryvalidation.org/minlength-method/
    minlength: function( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length >= param;
    },

    // http://jqueryvalidation.org/maxlength-method/
    maxlength: function( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || length <= param;
    },

    // http://jqueryvalidation.org/rangelength-method/
    rangelength: function( value, element, param ) {
        var length = $.isArray( value ) ? value.length : this.getLength( value, element );
        return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/min-method/
    min: function( value, element, param ) {
        return this.optional( element ) || value >= param;
    },

    // http://jqueryvalidation.org/max-method/
    max: function( value, element, param ) {
        return this.optional( element ) || value <= param;
    },

    // http://jqueryvalidation.org/range-method/
    range: function( value, element, param ) {
        return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
    },

    // http://jqueryvalidation.org/equalTo-method/
    equalTo: function( value, element, param ) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $( param );
        if ( this.settings.onfocusout ) {
            target.unbind( ".validate-equalTo" ).bind( "blur.validate-equalTo", function() {
                $( element ).valid();
            });
        }
        return value === target.val();
    },

    // http://jqueryvalidation.org/remote-method/
    remote: function( value, element, param ) {
        if ( this.optional( element ) ) {
            return "dependency-mismatch";
        }

        var previous = this.previousValue( element ),
            validator, data;

        if (!this.settings.messages[ element.name ] ) {
            this.settings.messages[ element.name ] = {};
        }
        previous.originalMessage = this.settings.messages[ element.name ].remote;
        this.settings.messages[ element.name ].remote = previous.message;

        param = typeof param === "string" && { url: param } || param;

        if ( previous.old === value ) {
            return previous.valid;
        }

        previous.old = value;
        validator = this;
        this.startRequest( element );
        data = {};
        data[ element.name ] = value;
        $.ajax( $.extend( true, {
            url: param,
            mode: "abort",
            port: "validate" + element.name,
            dataType: "json",
            data: data,
            context: validator.currentForm,
            success: function( response ) {
                var valid = response === true || response === "true",
                    errors, message, submitted;

                validator.settings.messages[ element.name ].remote = previous.originalMessage;
                if ( valid ) {
                    submitted = validator.formSubmitted;
                    validator.prepareElement( element );
                    validator.formSubmitted = submitted;
                    validator.successList.push( element );
                    delete validator.invalid[ element.name ];
                    validator.showErrors();
                } else {
                    errors = {};
                    message = response || validator.defaultMessage( element, "remote" );
                    errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
                    validator.invalid[ element.name ] = true;
                    validator.showErrors( errors );
                }
                previous.valid = valid;
                validator.stopRequest( element, valid );
            }
        }, param ) );
        return "pending";
    }

}