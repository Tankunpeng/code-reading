export function($) {
    $.extend($.fn, {
        // http://jqueryvalidation.org/validate/
        validate,
        // http://jqueryvalidation.org/valid/
        valid,
        // attributes: space separated list of attributes to retrieve and remove
        removeAttrs,
        // http://jqueryvalidation.org/rules/
        rules
    });
}
