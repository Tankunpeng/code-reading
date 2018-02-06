depend: function( param, element ) {
    return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
},