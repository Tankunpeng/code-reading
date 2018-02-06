idOrName: function( element ) {
    return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
}