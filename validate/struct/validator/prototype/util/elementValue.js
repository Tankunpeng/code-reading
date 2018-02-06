elementValue: function( element ) {
    var val,
        $element = $( element ),
        type = element.type;

    if ( type === "radio" || type === "checkbox" ) {
        return $( "input[name='" + element.name + "']:checked" ).val();
    } else if ( type === "number" && typeof element.validity !== "undefined" ) {
        return element.validity.badInput ? false : $element.val();
    }

    val = $element.val();
    if ( typeof val === "string" ) {
        return val.replace(/\r/g, "" );
    }``
    return val;
}