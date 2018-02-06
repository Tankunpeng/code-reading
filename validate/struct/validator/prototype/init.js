const init = function() {
    this.labelContainer = $( this.settings.errorLabelContainer );
    this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
    this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
    this.submitted = {};
    this.valueCache = {};
    this.pendingRequest = 0;
    this.pending = {};
    this.invalid = {};
    this.reset();
    var groups = ( this.groups = {} ),
        rules;
    $.each( this.settings.groups, function( key, value ) {
        if ( typeof value === "string" ) {
            value = value.split( /\s/ );
        }
        $.each( value, function( index, name ) {
            groups[ name ] = key;
        });
    });
    rules = this.settings.rules;
    $.each( rules, function( key, value ) {
        rules[ key ] = $.validator.normalizeRule( value );
    });

    function delegate( event ) {
        var validator = $.data( this[ 0 ].form, "validator" ),
            eventType = "on" + event.type.replace( /^validate/, "" ),
            settings = validator.settings;
        if ( settings[ eventType ] && !this.is( settings.ignore ) ) {
            settings[ eventType ].call( validator, this[ 0 ], event );
        }
    }
    $( this.currentForm )
        .validateDelegate( ":text, [type='password'], [type='file'], select, textarea, " +
            "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
            "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
            "[type='week'], [type='time'], [type='datetime-local'], " +
            "[type='range'], [type='color'], [type='radio'], [type='checkbox']",
            "focusin focusout keyup", delegate)
        // Support: Chrome, oldIE
        // "select" is provided as event.target when clicking a option
        .validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);

    if ( this.settings.invalidHandler ) {
        $( this.currentForm ).bind( "invalid-form.validate", this.settings.invalidHandler );
    }

    // Add aria-required to any Static/Data/Class required fields before first validation
    // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
    $( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
},

/**
// http://jqueryvalidation.org/Validator.form/
form,

checkForm,

// http://jqueryvalidation.org/Validator.element/
element,

// http://jqueryvalidation.org/Validator.showErrors/
showErrors,

// http://jqueryvalidation.org/Validator.resetForm/
resetForm,

hideErrors, 隐藏tohide

hideThese,

focusInvalid,

findLastActive,

elements,

errors,

reset,

prepareForm,

prepareElement,

check,

// return the custom message for the given element and validation method
// specified in the element's HTML5 data attribute
// return the generic message if present and no method specific message is present
customDataMessage

defaultMessage,

formatAndAdd,

defaultShowErrors,
 
showLabel,

errorsFor,

validationTargetFor,

depend,

dependTypes,

optional,

startRequest,

stopRequest,

previousValue



 validElements, currentElements 排除错误列表
 invalidElements, 返回错误列表对应的元素列表
 numberOfInvalids,  invalid对象的长度
 objectLength,  ---
 addWrapper, 给元素加wrapper
 elementValue,  表单元素取值
 clean, 返回jquery对象第一个元素
 valid, size=0
 size,  errorList.length
 customMessage,  // return the custom message for the given element name and validation method
 findDefined,   // return the first defined argument, allowing empty strings
 idOrName, 单元素id,多元素name。没有id用name
 checkable, ---
 findByName, ---
 getLength, 元素勾选个数

 */




