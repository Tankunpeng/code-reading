const normalizeRules = function( rules, element ) {
    // handle dependency check
    $.each( rules, function( prop, val ) {
        // ignore rule when param is explicitly false, eg. required:false
        if ( val === false ) {
            delete rules[ prop ];
            return;
        }
        if ( val.param || val.depends ) {
            var keepRule = true;
            switch ( typeof val.depends ) {
                case "string":
                    keepRule = !!$( val.depends, element.form ).length;
                    break;
                case "function":
                    keepRule = val.depends.call( element, element );
                    break;
            }
            if ( keepRule ) {
                rules[ prop ] = val.param !== undefined ? val.param : true;
            } else {
                delete rules[ prop ];
            }
        }
    });

    // evaluate parameters
    $.each( rules, function( rule, parameter ) {
        rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
    });

    // clean number parameters
    $.each([ "minlength", "maxlength" ], function() {
        if ( rules[ this ] ) {
            rules[ this ] = Number( rules[ this ] );
        }
    });
    $.each([ "rangelength", "range" ], function() {
        var parts;
        if ( rules[ this ] ) {
            if ( $.isArray( rules[ this ] ) ) {
                rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
            } else if ( typeof rules[ this ] === "string" ) {
                parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
                rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
            }
        }
    });

    if ( $.validator.autoCreateRanges ) {
        // auto-create ranges
        if ( rules.min != null && rules.max != null ) {
            rules.range = [ rules.min, rules.max ];
            delete rules.min;
            delete rules.max;
        }
        if ( rules.minlength != null && rules.maxlength != null ) {
            rules.rangelength = [ rules.minlength, rules.maxlength ];
            delete rules.minlength;
            delete rules.maxlength;
        }
    }

    return rules;
}