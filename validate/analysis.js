/**
 * 代码结构
 * 1. 扩展jQuery对象原型链方法： validate, valid, removeAttrs, rules
 * 2. 添加自定义选择器： :blank, :filled, :unchecked
 * 3. 构造函数： $.validator
 * 4. 方法：
 * 5. 其他扩展： $.validator.format, $.fn.delegate
 * */

/** 工具函数用法
 * $.makeArray :: 类数组 -> 数组
 * $.data:
 *
 * */

/** $.validator.format
 *
 * */

/** validator
 * CONSTRUCTOR(options, form)
 *  this.settings = $.extend( true, {}, $.validator.defaults, options );
 *  this.currentForm = form
 * STATIC
 *  defaults = { ... }
 *  setDefaults(settings)
 *  messages = {required, remote, email, url, date, dateISO, number, digits, creditcard, equalcard, equalTo, maxlength, minlength, rangelength, range, max, min}
 *  autoCreateRanges = false
 * PROTOTYPE
 *  init()
 *  form()
 *  ch
 *
* */

/**
 * @param username
 * @return ok
 * */