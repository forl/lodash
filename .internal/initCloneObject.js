import isPrototype from './isPrototype.js'

/**
 * Initializes an object clone.
 * 如果 object 是一个常规的对象（拥有原型，不是原型对象），则基于它的原型创建一个空对象返回，
 * 否则返回空对象
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? Object.create(Object.getPrototypeOf(object))
    : {}
}

export default initCloneObject
