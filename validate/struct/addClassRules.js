const addClassRules = function( className, rules ) {
    if ( className.constructor === String ) {
        this.classRuleSettings[ className ] = rules;
    } else {
        $.extend( this.classRuleSettings, className );
    }
}