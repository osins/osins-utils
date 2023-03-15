[osins-utils](../README.md) / [Exports](../modules.md) / OptionalType

# Interface: OptionalType<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [arrayIsEmpty](OptionalType.md#arrayisempty)
- [get](OptionalType.md#get)
- [ifArrayNotEmpty](OptionalType.md#ifarraynotempty)
- [ifArrayNotEmptyOrElse](OptionalType.md#ifarraynotemptyorelse)
- [ifEmpty](OptionalType.md#ifempty)
- [ifFail](OptionalType.md#iffail)
- [ifIsTrue](OptionalType.md#ifistrue)
- [ifNotEmpty](OptionalType.md#ifnotempty)
- [ifNotFalse](OptionalType.md#ifnotfalse)
- [ifNumberNotZero](OptionalType.md#ifnumbernotzero)
- [ifNumberNotZeroOrElse](OptionalType.md#ifnumbernotzeroorelse)
- [ifPresent](OptionalType.md#ifpresent)
- [ifPresentOrElse](OptionalType.md#ifpresentorelse)
- [isEmpty](OptionalType.md#isempty)
- [isNotFalse](OptionalType.md#isnotfalse)
- [isNumeric](OptionalType.md#isnumeric)
- [isPresent](OptionalType.md#ispresent)
- [map](OptionalType.md#map)
- [numberNotZero](OptionalType.md#numbernotzero)
- [numberValue](OptionalType.md#numbervalue)
- [orElse](OptionalType.md#orelse)

## Properties

### arrayIsEmpty

• **arrayIsEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:9

___

### get

• **get**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

optional.ts:3

___

### ifArrayNotEmpty

• **ifArrayNotEmpty**: (`fn`: (`data`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`fn`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

optional.ts:20

___

### ifArrayNotEmptyOrElse

• **ifArrayNotEmptyOrElse**: (`fn`: (`data`: `T`) => `T`, `fn2`: (`data`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`fn`, `fn2`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `T`) => `T` |
| `fn2` | (`data`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

optional.ts:21

___

### ifEmpty

• **ifEmpty**: (`cb`: () => `T`) => `T`

#### Type declaration

▸ (`cb`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `T` |

##### Returns

`T`

#### Defined in

optional.ts:14

___

### ifFail

• **ifFail**: (`fn`: (`value`: `T`) => `void`) => `void`

#### Type declaration

▸ (`fn`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `T`) => `void` |

##### Returns

`void`

#### Defined in

optional.ts:15

___

### ifIsTrue

• **ifIsTrue**: (`fn`: (`data`: `T`) => `T`) => ``false`` \| `T`

#### Type declaration

▸ (`fn`): ``false`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `T`) => `T` |

##### Returns

``false`` \| `T`

#### Defined in

optional.ts:23

___

### ifNotEmpty

• **ifNotEmpty**: (`fn`: (`data`: `T`) => `T`) => `T`

#### Type declaration

▸ (`fn`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `T`) => `T` |

##### Returns

`T`

#### Defined in

optional.ts:22

___

### ifNotFalse

• **ifNotFalse**: (`fn`: (`data`: `T`) => `T`) => ``false`` \| `T`

#### Type declaration

▸ (`fn`): ``false`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`data`: `T`) => `T` |

##### Returns

``false`` \| `T`

#### Defined in

optional.ts:25

___

### ifNumberNotZero

• **ifNumberNotZero**: (`fn`: (`value`: `T`) => `T`) => `T`

#### Type declaration

▸ (`fn`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `T`) => `T` |

##### Returns

`T`

#### Defined in

optional.ts:11

___

### ifNumberNotZeroOrElse

• **ifNumberNotZeroOrElse**: (`fn`: (`value`: `T`) => `T`, `fn2`: (`value`: `T`) => `T`) => `T`

#### Type declaration

▸ (`fn`, `fn2`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `T`) => `T` |
| `fn2` | (`value`: `T`) => `T` |

##### Returns

`T`

#### Defined in

optional.ts:12

___

### ifPresent

• **ifPresent**: (`fn`: (`value`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`fn`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`value`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

optional.ts:10

___

### ifPresentOrElse

• **ifPresentOrElse**: (`fn`: `undefined` \| (`value`: `T`) => `void`, `fn2`: `undefined` \| (`value`: `T`) => `void`) => ``null`` \| `T`

#### Type declaration

▸ (`fn`, `fn2`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | `undefined` \| (`value`: `T`) => `void` |
| `fn2` | `undefined` \| (`value`: `T`) => `void` |

##### Returns

``null`` \| `T`

#### Defined in

optional.ts:16

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:13

___

### isNotFalse

• **isNotFalse**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:24

___

### isNumeric

• **isNumeric**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:6

___

### isPresent

• **isPresent**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:2

___

### map

• **map**: <S\>(`key`: `string`) => [`OptionalType`](OptionalType.md)<`S`\>

#### Type declaration

▸ <`S`\>(`key`): [`OptionalType`](OptionalType.md)<`S`\>

##### Type parameters

| Name |
| :------ |
| `S` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

[`OptionalType`](OptionalType.md)<`S`\>

#### Defined in

optional.ts:5

___

### numberNotZero

• **numberNotZero**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

optional.ts:8

___

### numberValue

• **numberValue**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

optional.ts:7

___

### orElse

• **orElse**: (`elseValue`: `T`) => `T`

#### Type declaration

▸ (`elseValue`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `elseValue` | `T` |

##### Returns

`T`

#### Defined in

optional.ts:4
