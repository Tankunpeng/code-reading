invalidElements: function() {
    return $( this.errorList ).map(function() {
        return this.element;
    });
},