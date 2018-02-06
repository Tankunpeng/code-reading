
findLastActive: function() {
    var lastActive = this.lastActive;
    return lastActive && $.grep( this.errorList, function( n ) {
        return n.element.name === lastActive.name;
    }).length === 1 && lastActive;
},