const staticRules = function( element ) {
    var rules = {},
        validator = $.data( element.form, "validator" );

    if ( validator.settings.rules ) {
        rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
    }
    return rules;
}