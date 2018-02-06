previousValue: function( element ) {
    return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
        old: null,
        valid: true,
        message: this.defaultMessage( element, "remote" )
    });
}