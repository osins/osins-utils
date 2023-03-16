export interface OptionalType<T> {
  isPresent: () => boolean
  get: () => T
  orElse: (elseValue: T) => T
  map: <S>(key: string) => OptionalType<S>
  isNumeric: () => boolean
  numberValue: () => number
  numberNotZero: () => boolean
  arrayIsEmpty: () => boolean
  ifPresent: (cb: (value: T) => T) => T | null
  icbumberNotZero: (cb: (value: T) => T) => T
  icbumberNotZeroOrElse: (cb1: (value: T) => T, cb2: (value: T) => T) => T
  isEmpty: () => boolean
  isTrue: () => boolean
  ifIsTrue: (cb: (data: T) => T) => T | false
  ifIsTrueOrElse: (cb1: (data: T) => any, cb2: (data: T) => T) => void
  ifFail: (cb: (value: T) => void) => void
  ifPresentOrElse: (
    cb1: ((value: T) => void) | undefined,
    cb2: ((value: T) => void) | undefined
  ) => T | null
  ifArrayNotEmpty: (cb: (data: T) => T) => T | null
  ifArrayNotEmptyOrElse: (cb1: (data: T) => T, cb2: (data: T) => T) => T | null
  icbotEmpty: (cb: (data: T) => T) => T
  isNotFalse: () => boolean
  icbotFalse: (cb: (data: T) => T) => T | false
}

export const optional = <T>(value: any): OptionalType<T> => {
  console.log(`optional, value type: ${typeof value}`)

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

  const map = <S>(key: string): OptionalType<S> => {
    if (value === undefined) {
      return optional(undefined)
    }

    return optional(value[key])
  }

  const isNumeric = () => {
    if (typeof value === 'number') {
      return true
    }

    if (typeof value != 'string') return false

    return !isNaN(parseInt(value)) && !isNaN(parseFloat(value))
  }

  const numberValue = (): number => {
    return Number(value)
  }

  const isEmpty = (): boolean => {
    if (!isPresent()) return true

    if (typeof value === 'number') {
      return value === 0
    }

    if (typeof value === 'string') return value.trim().length === 0

    if (Array.isArray(value)) {
      return value.length === 0
    }

    if (typeof value === 'object') return Object.keys(value).length === 0

    return false
  }

  const isTrue = () => {
    if (!isPresent()) return false

    if (typeof value === 'boolean') {
      return value === true
    }

    return false
  }

  const ifIsTrueOrElse = (cb1: (data: T) => any, cb2: (data: T) => T) => {
    if (isTrue()) {
      cb1(value)
      return
    }

    cb2(value)
  }

  const ifPresent = (cb: (value: any) => any) => {
    if (isPresent()) {
      return cb(value)
    }

    return null
  }

  const ifFail = (cb: (value: any) => void): void => {
    if (!isPresent()) {
      cb(value)
    }
  }

  const ifPresentOrElse = (
    cb1: ((value: any) => void) | undefined,
    cb2: ((value: any) => void) | undefined
  ): any => {
    if (isPresent()) {
      if (cb1 === undefined) {
        return null
      }

      return cb1(value)
    }

    if (cb2 === undefined) {
      return null
    }

    return cb2(value)
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

  const ifArrayNotEmpty = (cb: (data: any) => any) => {
    if (!isPresent()) {
      return null
    }

    if (Array.isArray(value) && value.length === 0) {
      return null
    }

    if (cb === undefined) {
      return null
    }

    return cb(value)
  }

  const ifArrayNotEmptyOrElse = (
    cb1: (data: any) => any,
    cb2: (data: any) => any
  ) => {
    if (!isPresent()) {
      return cb2(value)
    }

    if (Array.isArray(value) && value.length === 0) {
      return cb2(value)
    }

    if (cb1 === undefined) {
      return value
    }

    return cb1(value)
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

  const icbumberNotZero = (cb: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (isEmpty()) {
      return value
    }

    if (cb === undefined) {
      return value
    }

    if (Number(value) === 0) {
      return value
    }

    return cb(value)
  }

  const icbumberNotZeroOrElse = (
    cb1: (data: any) => any,
    cb2: (data: any) => any
  ) => {
    if (!isPresent()) {
      return cb2(value)
    }

    if (isNumeric() && value === 0) {
      return cb2(value)
    }

    if (cb1 === undefined) {
      return value
    }

    return cb1(value)
  }

  const icbotEmpty = (cb: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (!isEmpty()) {
      return cb(value)
    }

    return value
  }

  const ifIsTrue = (cb: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (isEmpty()) {
      return false
    }

    if (cb === undefined) {
      return value
    }

    if (typeof value === 'boolean' && value === true) {
      return cb(value)
    }

    return false
  }

  const isNotFalse = (): boolean => {
    if (!isEmpty() && typeof value === 'boolean' && value === false) {
      return false
    }

    return true
  }

  const icbotFalse = (cb: (data: any) => any) => {
    if (isNotFalse()) {
      return cb(value)
    }

    return false
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
    icbumberNotZero: icbumberNotZero,
    icbumberNotZeroOrElse: icbumberNotZeroOrElse,
    isEmpty: isEmpty,
    isTrue: isTrue,
    ifIsTrueOrElse: ifIsTrueOrElse,
    ifFail: ifFail,
    ifPresentOrElse: ifPresentOrElse,
    ifArrayNotEmpty: ifArrayNotEmpty,
    ifArrayNotEmptyOrElse: ifArrayNotEmptyOrElse,
    icbotEmpty: icbotEmpty,
    ifIsTrue: ifIsTrue,
    isNotFalse: isNotFalse,
    icbotFalse: icbotFalse,
  }
}
