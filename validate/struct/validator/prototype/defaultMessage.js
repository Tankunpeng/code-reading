
defaultMessage: function( element, method ) {
    return this.findDefined(
        this.customMessage( element.name, method ),
        this.customDataMessage( element, method ),
        // title is never undefined, so handle empty string as undefined
        !this.settings.ignoreTitle && element.title || undefined,
        $.validator.messages[ method ],
        "<strong>Warning: No message defined for " + element.name + "</strong>"
    );
},