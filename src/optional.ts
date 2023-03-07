export interface OptionalType<T> {
  isPresent: () => boolean
  get: () => T
  orElse: (elseValue: T) => T
  map: <S>(key: string) => OptionalType<S>
  isNumeric: () => boolean
  numberValue: () => number
  numberNotZero: () => boolean
  arrayIsEmpty: () => boolean
  ifPresent: (fn: (value: T) => T) => T | null
  ifNumberNotZero: (fn: (value: T) => T) => T
  ifNumberNotZeroOrElse: (fn: (value: T) => T, fn2: (value: T) => T) => T
  isEmpty: () => boolean
  ifFail: (fn: (value: T) => void) => void
  ifPresentOrElse: (
    fn: ((value: T) => void) | undefined,
    fn2: ((value: T) => void) | undefined
  ) => T | null
  ifArrayNotEmpty: (fn: (data: T) => T) => T | null
  ifArrayNotEmptyOrElse: (fn: (data: T) => T, fn2: (data: T) => T) => T | null
  ifNotEmpty: (fn: (data: T) => T) => T
  ifIsTrue: (fn: (data: T) => T) => T | false
  isNotFalse: () => boolean
  ifNotFalse: (fn: (data: T) => T) => T | false
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

  const ifPresent = (fn: (value: any) => any) => {
    if (isPresent()) {
      return fn(value)
    }

    return null
  }

  const ifFail = (fn: (value: any) => void): void => {
    if (!isPresent()) {
      fn(value)
    }
  }

  const ifPresentOrElse = (
    fn: ((value: any) => void) | undefined,
    fn2: ((value: any) => void) | undefined
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
    fn2: (data: any) => any
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
    fn2: (data: any) => any
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

  const ifIsTrue = (fn: (data: any) => any) => {
    if (!isPresent()) {
      return value
    }

    if (isEmpty()) {
      return false
    }

    if (fn === undefined) {
      return value
    }

    if (typeof value === 'boolean' && value === true) {
      return fn(value)
    }

    return false
  }

  const isNotFalse = (): boolean => {
    if (!isEmpty() && typeof value === 'boolean' && value === false) {
      return false
    }

    return true
  }

  const ifNotFalse = (fn: (data: any) => any) => {
    if (isNotFalse()) {
      return fn(value)
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
    ifNumberNotZero: ifNumberNotZero,
    ifNumberNotZeroOrElse: ifNumberNotZeroOrElse,
    isEmpty: isEmpty,
    ifFail: ifFail,
    ifPresentOrElse: ifPresentOrElse,
    ifArrayNotEmpty: ifArrayNotEmpty,
    ifArrayNotEmptyOrElse: ifArrayNotEmptyOrElse,
    ifNotEmpty: ifNotEmpty,
    ifIsTrue: ifIsTrue,
    isNotFalse: isNotFalse,
    ifNotFalse: ifNotFalse,
  }
}
