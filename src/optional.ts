export const optional = (value: any) => {
  const isPresent = () => {
    return !(value === undefined || value === null)
  }

  const get = (): any => {
    return value
  }

  const orElse = (elseValue: any) => {
    if (isPresent()) {
      return value
    }
    return elseValue
  }

  const map = (key: string) => {
    if (!isPresent()) {
      return optional(undefined)
    }

    console.log('value: ', value)
        
    if (value.hasOwnProperty(key)) {
      console.log('key: ', key, value[key])
      return optional(value[key])
    }

    return optional(undefined)
  }

  const isNumeric = () => {
    if (typeof value === "number") {
      return true
    }

    if (typeof value != "string") return false

    return !isNaN(parseInt(value)) && !isNaN(parseFloat(value))
  }

  const numberValue = (): number => {
    return Number(value)
  }

  const isEmpty = () => {
    if (!isPresent()) return true

    if (typeof value === "number") {
      return value === 0
    }

    if (typeof value === "string") return value.trim().length === 0

    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === "object") return Object.keys(value).length === 0

    return false
  }

  const ifPresent = (fn: (value: any) => any) => {
    if (isPresent()) {
      return fn(value)
    }
  }

  const ifFail = (fn: (value: any) => void) => {
    if (!isPresent()) {
      return fn(value)
    }
  }

  const ifPresentOrElse = (
    fn: ((value: any) => void) | undefined,
    fn2: ((value: any) => void) | undefined,
  ): any => {
    if (isPresent()) {
      if (fn === undefined) {
        return null
      }

      return fn(value)
    }

    if (fn2 === undefined) {
      return null
    }

    return fn2(value)
  }

  const ifEmptyOrElse = (
    fn: ((value: any) => void) | undefined,
    fn2: ((value: any) => void) | undefined,
  ): any => {
    if (isEmpty()) {
      if (fn === undefined) {
        return null
      }

      return fn(value)
    }

    if (fn2 === undefined) {
      return null
    }

    return fn2(value)
  }

  const ifNotEmptyOrElse = (
    fn: ((value: any) => void) | undefined,
    fn2: ((value: any) => void) | undefined,
  ): any => {
    if (!isEmpty()) {
      if (fn === undefined) {
        return null
      }

      return fn(value)
    }

    if (fn2 === undefined) {
      return null
    }

    return fn2(value)
  }

  const arrayIsEmpty = () => {
    if (!isPresent()) {
      return true
    }

    if (Array.isArray(value)) {
      return value.length === 0
    }

    return true
  }

  const ifArrayNotEmpty = (fn: (data: any) => any) => {
    if (!isPresent()) {
      return null
    }

    if (Array.isArray(value) && value.length === 0) {
      return null
    }

    if (fn === undefined) {
      return null
    }

    return fn(value)
  }

  const ifArrayNotEmptyOrElse = (
    fn: (data: any) => any,
    fn2: (data: any) => any,
  ) => {
    if (!isPresent()) {
      return fn2(value)
    }

    if (Array.isArray(value) && value.length === 0) {
      return fn2(value)
    }

    if (fn === undefined) {
      return value
    }

    return fn(value)
  }

  const numberNotZero = () => {
    if (!isPresent()) {
      return false
    }

    if (isNumeric() && value !== 0) {
      return true
    }

    return false
  }

  const ifNumberNotZero = (fn: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (isEmpty()) {
      return value
    }

    if (fn === undefined) {
      return value
    }

    if (Number(value) === 0) {
      return value
    }

    return fn(value)
  }

  const ifNumberNotZeroOrElse = (
    fn: (data: any) => any,
    fn2: (data: any) => any,
  ) => {
    if (!isPresent()) {
      return fn2(value)
    }

    if (isNumeric() && value === 0) {
      return fn2(value)
    }

    if (fn === undefined) {
      return value
    }

    return fn(value)
  }

  const ifNotEmpty = (fn: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (!isEmpty()) {
      return fn(value)
    }

    return value
  }

  return {
    isPresent: isPresent,
    get: get,
    orElse: orElse,
    map: map,
    isNumeric: isNumeric,
    numberValue: numberValue,
    numberNotZero: numberNotZero,
    arrayIsEmpty: arrayIsEmpty,
    ifPresent: ifPresent,
    ifNumberNotZero: ifNumberNotZero,
    ifNumberNotZeroOrElse: ifNumberNotZeroOrElse,
    isEmpty: isEmpty,
    ifFail: ifFail,
    ifPresentOrElse: ifPresentOrElse,
    ifEmptyOrElse: ifEmptyOrElse,
    ifArrayNotEmpty: ifArrayNotEmpty,
    ifArrayNotEmptyOrElse: ifArrayNotEmptyOrElse,
    ifNotEmpty: ifNotEmpty,
    ifNotEmptyOrElse: ifNotEmptyOrElse,
  }
}