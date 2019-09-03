const isType = (type) => {
  return target => {
    return Object.prototype.toString.call(target) === `[object ${type}]`;
  }
}

const isArray = isType('Array');
const isFunc = isType('Function');
const isObj = isType('Object');
const isNull = isType('Null');


const deepClone = (target, map = new Map()) => {
  if (isObj(target) || isFunc(target)) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    if(map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map);
    }
    return cloneTarget;
  } 
  return target;
}

const utils = {
  deepClone,
  isArray,
  isFunc,
  isObj,
  isNull,
}

export default utils;