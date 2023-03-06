[osins-utils](README.md) / Exports

# osins-utils

## Table of contents

### Functions

- [optional](modules.md#optional)

## Functions

### optional

▸ **optional**(`value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `arrayIsEmpty` | () => `boolean` |
| `get` | () => `any` |
| `ifArrayNotEmpty` | (`fn`: (`data`: `any`) => `any`) => `any` |
| `ifArrayNotEmptyOrElse` | (`fn`: (`data`: `any`) => `any`, `fn2`: (`data`: `any`) => `any`) => `any` |
| `ifFail` | (`fn`: (`value`: `any`) => `void`) => ``null`` \| `void` |
| `ifIsTrue` | (`fn`: (`data`: `any`) => `any`) => `any` |
| `ifNotEmpty` | (`fn`: (`data`: `any`) => `any`) => `any` |
| `ifNotFalse` | (`fn`: (`data`: `any`) => `any`) => `any` |
| `ifNumberNotZero` | (`fn`: (`data`: `any`) => `any`) => `any` |
| `ifNumberNotZeroOrElse` | (`fn`: (`data`: `any`) => `any`, `fn2`: (`data`: `any`) => `any`) => `any` |
| `ifPresent` | (`fn`: (`value`: `any`) => `any`) => `any` |
| `ifPresentOrElse` | (`fn`: `undefined` \| (`value`: `any`) => `void`, `fn2`: `undefined` \| (`value`: `any`) => `void`) => `any` |
| `isEmpty` | () => `undefined` \| `boolean` |
| `isNotFalse` | () => `boolean` |
| `isNumeric` | () => `boolean` |
| `isPresent` | () => `boolean` |
| `map` | (`key`: `string`) => { isPresent: () =\> boolean; get: () =\> any; orElse: (elseValue: any) =\> any; map: (key: string) =\> ...; isNumeric: () =\> boolean; numberValue: () =\> number; numberNotZero: () =\> boolean; arrayIsEmpty: () =\> boolean; ... 11 more ...; ifNotFalse: (fn: (data: any) =\> any) =\> any; } |
| `numberNotZero` | () => `boolean` |
| `numberValue` | () => `number` |
| `orElse` | (`elseValue`: `any`) => `any` |

#### Defined in

optional.ts:1
