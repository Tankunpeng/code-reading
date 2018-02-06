objectLength: function( obj ) {
    /* jshint unused: false */
    var count = 0,
        i;
    for ( i in obj ) {
        count++;
    }
    return count;
}