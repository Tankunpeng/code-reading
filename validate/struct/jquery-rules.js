const rules = function( command, argument ) {
    var element = this[ 0 ],
        settings, staticRules, existingRules, data, param, filtered;

    if ( command ) {
        settings = $.data( element.form, "validator" ).settings;
        staticRules = settings.rules;
        existingRules = $.validator.staticRules( element );
        switch ( command ) {
            case "add":
                $.extend( existingRules, $.validator.normalizeRule( argument ) );
                // remove messages from rules, but allow them to be set separately
                delete existingRules.messages;
                staticRules[ element.name ] = existingRules;
                if ( argument.messages ) {
                    settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
                }
                break;
            case "remove":
                if ( !argument ) {
                    delete staticRules[ element.name ];
                    return existingRules;
                }
                filtered = {};
                $.each( argument.split( /\s/ ), function( index, method ) {
                    filtered[ method ] = existingRules[ method ];
                    delete existingRules[ method ];
                    if ( method === "required" ) {
                        $( element ).removeAttr( "aria-required" );
                    }
                });
                return filtered;
        }
    }

    data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.classRules( element ),
            $.validator.attributeRules( element ),
            $.validator.dataRules( element ),
            $.validator.staticRules( element )
        ), element );

    // make sure required is at front
    if ( data.required ) {
        param = data.required;
        delete data.required;
        data = $.extend( { required: param }, data );
        $( element ).attr( "aria-required", "true" );
    }

    // make sure remote is at back
    if ( data.remote ) {
        param = data.remote;
        delete data.remote;
        data = $.extend( data, { remote: param });
    }

    return data;
}