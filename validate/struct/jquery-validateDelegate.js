const validateDelegate = function( delegate, type, handler ) {
    return this.bind(type, function( event ) {
        var target = $(event.target);
        if ( target.is(delegate) ) {
            return handler.apply(target, arguments);
        }
    });
}