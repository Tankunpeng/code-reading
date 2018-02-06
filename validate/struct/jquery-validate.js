const validate = function( options ) { // 调用对象首元素需要是form元素
    // if nothing is selected, return nothing; can't chain anyway
    if ( !this.length ) {
        if ( options && options.debug && window.console ) {
            console.warn( "Nothing selected, can't validate, returning nothing." );
        }
        return;
    }

    // check if a validator for this form was already created
    var validator = $.data( this[ 0 ], "validator" );
    if ( validator ) {
        return validator;
    }

    // Add novalidate tag if HTML5.
    this.attr( "novalidate", "novalidate" );  // 重置验证状态

    validator = new $.validator( options, this[ 0 ] );  // 新建验证类
    $.data( this[ 0 ], "validator", validator ); // 将数据绑定到form元素上

    if ( validator.settings.onsubmit ) { // 如果表单验证器设置了提交回调

        this.validateDelegate( ":submit", "click", function( event ) { // 代理函数  代理到submit对象上
            if ( validator.settings.submitHandler ) {
                validator.submitButton = event.target;
            }
            // allow suppressing validation by adding a cancel class to the submit button
            if ( $( event.target ).hasClass( "cancel" ) ) { // 取消验证
                validator.cancelSubmit = true;
            }

            // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
            if ( $( event.target ).attr( "formnovalidate" ) !== undefined ) {
                validator.cancelSubmit = true; // 提交按钮含有 h5 取消验证属性时， 不做验证
            }
        });

        // validate the form on submit
        this.submit( function( event ) {  // 注册提交回调函数
            if ( validator.settings.debug ) {
                // prevent form submit to be able to see console output
                event.preventDefault();
            }
            function handle() {  // 定义表单提交回调
                var hidden, result;
                if ( validator.settings.submitHandler ) { // 如果用户自定义了提交回调函数
                    if ( validator.submitButton ) {
                        // insert a hidden input as a replacement for the missing submit button
                        hidden = $( "<input type='hidden'/>" )
                            .attr( "name", validator.submitButton.name )
                            .val( $( validator.submitButton ).val() )
                            .appendTo( validator.currentForm );
                    }
                    result = validator.settings.submitHandler.call( validator, validator.currentForm, event ); // 执行设置中的回调, 并获取结果
                    if ( validator.submitButton ) {
                        // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                        hidden.remove();
                    }
                    if ( result !== undefined ) {
                        return result; // 返回结果
                    }
                    return false;
                }
                return true;
            }

            // prevent submit for invalid forms or custom submit handlers
            if ( validator.cancelSubmit ) { // 只有cancalSubmit时才提交未验证表单  cancelSubmit：取消验证
                validator.cancelSubmit = false;
                return handle();
            }
            if ( validator.form() ) {  // 通过验证
                if ( validator.pendingRequest ) {
                    validator.formSubmitted = true;
                    return false;
                }
                return handle(); // 提交表单
            } else {
                validator.focusInvalid(); //
                return false;
            }
        });
    }

    return validator;
}