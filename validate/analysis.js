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


/**
 * format,
 * setDefaults,
 * init, showLabel, formatAndAdd,
 * form, element, elements,
 *
 *
 *
 * focusInvalid,
 * findLastActive,
 *
 * prepareForm, // this.reset(), 将对应元素errors放入 this.toHide
 * prepareElement,  // this.reset(), 将errors放入 this.toHide
 *
 * clean//(selector)->$(selector)[0], reset//清空验证状态successList,errorList,errorMap,toShow,toHide,cruurentElements, resetForm//清空表单、数据及验证状态,
 *
 * check,
 * checkForm,
 *
 * defaultShowErrors, // () -> 1. highlight
 * showErrors,
 * hideErrors :: () -> this.hideThese(this.toHide) 隐藏toHide中的元素
 * hideThese :: errors -> 清空不在this.containers中的文本， 隐藏errors
 * errors // this.ErrorContext域下所有含有errorClass的元素,
 *
 *
 * customDataMessage,
 * customMessage,
 * defaultMessage :: (element, method) -> customMessage/customDataMessage/element.title/validator.messages/default,
 *
 * validElements :: () -> this.currentElements去掉invalidELements
 * invalidElements :: () -> this.errorList对应的element,
 *
 * errorsFor :: element -> 对应该element的错误提示,
 * validationTargetFor :: element -> 去除ignore的首元素,
 *

 *
 *
 * // 私有函数
 * valid //
 * this.size() === 0,
 * size // this.errorList的长度 ,
 * numberOfInvalids // this.invalid的长度 ,
 *
 * // 异步验证remote/ajax相关
 * startRequest // ,
 * stopRequest,
 * previousValue// 获取或初始化前值,  .pending,
 *
 * // 验证规则rule相关
 * addClassRules,
 * classRules,
 * attributeRules,
 * dataRules,
 * staticRules,
 * normalizeRules,
 * normalizeRule,
 *
 * // 验证方法method相关
 * addMethod
 * depend, .dependTypes // required方法依赖
 * optional :: element -> 有值: false  无值：'dependency-mismatch'  // 用于确保有值
 *
 * // 工具函数
 * elementValue, // 表单元素取值
 * idOrName, // 按情况返回元素的name或id 用于errorFor, showLabel
 * checkable, // 选择类表单
 * findByName, // 在当前表单中按name属性查找元素
 * getLength, // 获取值的长度
 * objectLength, // 获取对象长度
 * findDefined // 职责链模式,
 * addWrapper // 元素添加this.settings.wrapper,
 *
 * 属性
 * defaults, messages, autoCreateRanges, labelContainer, errorContext, containers, submitted, valueCache, pendingRequest
 * invalid, groups, currentElements, lastElement, toHide, errorList, successList, errorMap, toShow,
 * , formSubmitted, classRuleSettings, methods
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
 *
 *
 *
 *  // 辅助方法
 *  size :: () -> this.errorList.length
 *  valid :: () ->  this.errorList.length == 0
 *  hideThese :: (errors) -> clear |errors| / |this.containers| 's error text; errors add |wraper| & hide
 *  numberOfInvalids :: () -> objectLength(this.invalid)
 *  resetForm :: () -> $( |currentForm| ).resetForm();
 *               clear |this.submitted|this.lastElement|prepareForm|hideErrors;
 *               this.elements().removeClass: errorClass.removeData: previousValue.removeAttr: aria-invalid;
 *  reset :: this.successList = [] , this.errorList = [], this.errorMap = {}, this.toShow = $([]), this.toHide = $([]), this.currentElements = $([])
 *  hideErrors :: this.hideThese(this.toHide)
 *
 *
 *  // 工具方法
 *
 *  objectLength :: (obj) -> count of obj's keys
 *  clean :: selector -> $(selector)[0]

 *
* */

/**
 * @param username
 * @return ok
 * */