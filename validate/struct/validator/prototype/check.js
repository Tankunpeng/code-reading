check: function( element ) {
    element = this.validationTargetFor( this.clean( element ) );

    var rules = $( element ).rules(),
        rulesCount = $.map( rules, function( n, i ) {
            return i;
        }).length,
        dependencyMismatch = false,
        val = this.elementValue( element ),
        result, method, rule;

    for ( method in rules ) {
        rule = { method: method, parameters: rules[ method ] };
        try {

            result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

            // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if ( result === "dependency-mismatch" && rulesCount === 1 ) {
                dependencyMismatch = true;
                continue;
            }
            dependencyMismatch = false;

            if ( result === "pending" ) {
                this.toHide = this.toHide.not( this.errorsFor( element ) );
                return;
            }

            if ( !result ) {
                this.formatAndAdd( element, rule );
                return false;
            }
        } catch ( e ) {
            if ( this.settings.debug && window.console ) {
                console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
            }
            throw e;
        }
    }
    if ( dependencyMismatch ) {
        return;
    }
    if ( this.objectLength( rules ) ) {
        this.successList.push( element );
    }
    return true;
}