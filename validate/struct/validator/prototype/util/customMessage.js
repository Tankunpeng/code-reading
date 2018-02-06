customMessage: function( name, method ) {
    var m = this.settings.messages[ name ];
    return m && ( m.constructor === String ? m : m[ method ]);
},