export interface OptionalType<T> {
  isPresent: () => boolean
  get: () => T
  orElse: (elseValue: T) => T
  map: <S>(key: string) => OptionalType<S>
  isNumeric: () => boolean
  numberValue: () => number
  numberNotZero: () => boolean
  isArrayAndEmpty: () => boolean
  isEmpty: () => boolean
  isTrue: () => boolean
  ifPresent: <R>(cb: (value: T) => R | null) => R | null
  ifNotZero: <R>(cb: (value: T) => R | null) => R | null
  ifNotZeroOrElse: <R>(cb1: (value: T) => R | null, cb2: () => R) => R
  ifIsTrue: <R>(cb: (data: T) => R | null) => R | null
  ifIsTrueOrElse: <R>(cb1: (data: T) => R | null, cb2: (data: T) => R | null) => R | null
  ifFail: <R>(cb: (value: T) => R | null) => R | null
  ifPresentOrElse: <R>(
    cb1: (value: T) => R | null,
    cb2: () => R | null
  ) => R | null
  ifArrayNotEmpty: <R>(cb: (data: T) => R | null) => R | null
  ifArrayNotEmptyOrElse: <R>(cb1: (data: any[]) => Array<R> | null, cb2: (data: any[]) => Array<R> | null) => Array<R> | null
  ifNotEmpty: <R>(cb: (data: T) => R | null) => R | null
  isNotFalse: () => boolean
  ifNotFalse: <R>(cb: (data: T) => R | null) => R | null
}

export const optional = <T>(value: any): OptionalType<T> => {
  console.log(`optional, value type: ${typeof value}`)

  const isPresent = (): boolean => {
    return (value !== undefined && value !== null)
  }

  const get = (): T => {
    return value
  }

  const orElse = (elseValue: T): T => {
    if (isPresent()) {
      return value
    }
    return elseValue
  }

  const map = <S>(key: string): OptionalType<S> => {
    if (value === undefined || value == null) {
      return optional(undefined)
    }

    return optional(value[key])
  }

  const isNumeric = (): boolean => {
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

  const isTrue = (): boolean => {
    if (!isPresent()) return false

    if (typeof value === 'boolean') {
      return value === true
    }

    return false
  }

  const ifIsTrueOrElse = <R>(cb1: (data: T) => R | null, cb2: (data: T) => R | null): R | null => {
    if (isTrue()) {
      return cb1(value)
    }

    return cb2(value)
  }

  const ifPresent = <R>(cb: (value: T) => R | null): R | null => {
    if (isPresent()) {
      return cb(value)
    }

    return null
  }

  const ifFail = <R>(cb: (value: T) => R | null): R | null => {
    if (!isPresent()) {
      return cb(value)
    }

    return null
  }

  const ifPresentOrElse = <R>(
    cb1: (value: T) => R | null,
    cb2: () => R | null
  ): R | null => {
    if (isPresent()) {
      if (cb1 === undefined) {
        return null
      }

      return cb1(value)
    }

    if (cb2 === undefined) {
      return null
    }

    return cb2()
  }

  const arrayIsEmpty = (): boolean => {
    if (!isPresent()) {
      return true
    }

    if (Array.isArray(value)) {
      return value.length === 0
    }

    return true
  }

  const ifArrayNotEmpty = <R>(cb: (data: T) => R | null): R | null => {
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

  const ifArrayNotEmptyOrElse = <R>(
    cb1: (data: any[]) => Array<R> | null,
    cb2: (data: any[]) => Array<R> | null
  ): Array<R> | null => {
    if (!isPresent()) {
      return cb2(value)
    }

    if (Array.isArray(value) && value.length > 0) {
      if (cb2 === undefined) {
        return null
      }

      return cb2(value)
    }

    if (cb1 === undefined) {
      return null
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

  const ifNotZero = (cb: (data: any) => any) => {
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

  const isNotZeroOrElse = (
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

  const ifNotEmpty = <R>(cb: (data: T) => R | null): R | null => {
    if (!isPresent() || isEmpty()) {
      return null
    }

    return cb(value)
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
    isArrayAndEmpty: arrayIsEmpty,
    ifPresent: ifPresent,
    ifNotZero: ifNotZero,
    ifNotZeroOrElse: isNotZeroOrElse,
    isEmpty: isEmpty,
    isTrue: isTrue,
    ifIsTrueOrElse: ifIsTrueOrElse,
    ifFail: ifFail,
    ifPresentOrElse: ifPresentOrElse,
    ifArrayNotEmpty: ifArrayNotEmpty,
    ifArrayNotEmptyOrElse: ifArrayNotEmptyOrElse,
    ifNotEmpty: ifNotEmpty,
    ifIsTrue: ifIsTrue,
    isNotFalse: isNotFalse,
    ifNotFalse: icbotFalse,
  }
}
