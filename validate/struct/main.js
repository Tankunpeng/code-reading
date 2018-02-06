/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
    if ( typeof define === "function" && define.cmd ) {
        define({});
    }
    factory( jQuery );
}(function( $ ) {

// jquery-extend

// Custom selectors
    $.extend( $.expr[ ":" ], {
        // http://jqueryvalidation.org/blank-selector/
        blank: function( a ) {
            return !$.trim( "" + $( a ).val() );
        },
        // http://jqueryvalidation.org/filled-selector/
        filled: function( a ) {
            return !!$.trim( "" + $( a ).val() );
        },
        // http://jqueryvalidation.org/unchecked-selector/
        unchecked: function( a ) {
            return !$( a ).prop( "checked" );
        }
    });

// constructor for validator
    $.validator;


// http://jqueryvalidation.org/jQuery.validator.format/
    $.validator.format;

    $.extend( $.validator, {

        defaults,

        // http://jqueryvalidation.org/jQuery.validator.setDefaults/
        setDefaults,

        messages,

        autoCreateRanges: false,

        prototype: {



        },

        classRuleSettings,

        addClassRules,

        classRules,

        attributeRules,

        dataRules,

        staticRules,

        normalizeRules,

        // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
        normalizeRule,

        // http://jqueryvalidation.org/jQuery.validator.addMethod/
        addMethod,

        method

    });

    $.format = function deprecated() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

// ajax auto abort相关代码已转移到公共代码部分
// see:framework/js/jq-ajax-advance/jq-ajax-advance.js

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target

    $.extend($.fn, {  // 委托事件处理
        validateDelegate
    });

}));
