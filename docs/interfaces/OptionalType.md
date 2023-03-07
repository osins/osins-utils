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

[optional.ts:9](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L9)

___

### get

• **get**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[optional.ts:3](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L3)

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

[optional.ts:19](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L19)

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

[optional.ts:20](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L20)

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

[optional.ts:14](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L14)

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

[optional.ts:22](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L22)

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

[optional.ts:21](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L21)

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

[optional.ts:24](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L24)

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

[optional.ts:11](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L11)

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

[optional.ts:12](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L12)

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

[optional.ts:10](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L10)

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

[optional.ts:15](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L15)

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:13](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L13)

___

### isNotFalse

• **isNotFalse**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:23](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L23)

___

### isNumeric

• **isNumeric**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:6](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L6)

___

### isPresent

• **isPresent**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:2](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L2)

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

[optional.ts:5](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L5)

___

### numberNotZero

• **numberNotZero**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:8](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L8)

___

### numberValue

• **numberValue**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[optional.ts:7](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L7)

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

[optional.ts:4](https://github.com/osins/osins-utils/blob/15036bc/src/optional.ts#L4)
