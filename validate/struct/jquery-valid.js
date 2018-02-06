const valid = function() {
    var valid, validator;

    if ( $( this[ 0 ] ).is( "form" ) ) {
        valid = this.validate().form();  // 新建验证,执行表单验证
    } else {
        valid = true;
        validator = $( this[ 0 ].form ).validate();  // 新建验证
        this.each( function() {  // <=> this.all( () => validator.element( this ) )
            valid = validator.element( this ) && valid;  // 执行元素验证
        });
    }
    return valid;
}