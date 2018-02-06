const classRules = function( element ) {
    var rules = {},
        classes = $( element ).attr( "class" );

    if ( classes ) {
        $.each( classes.split( " " ), function() {
            if ( this in $.validator.classRuleSettings ) {
                $.extend( rules, $.validator.classRuleSettings[ this ]);
            }
        });
    }
    return rules;
}