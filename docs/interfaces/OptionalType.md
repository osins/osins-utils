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
- [icbotEmpty](OptionalType.md#icbotempty)
- [icbotFalse](OptionalType.md#icbotfalse)
- [icbumberNotZero](OptionalType.md#icbumbernotzero)
- [icbumberNotZeroOrElse](OptionalType.md#icbumbernotzeroorelse)
- [ifArrayNotEmpty](OptionalType.md#ifarraynotempty)
- [ifArrayNotEmptyOrElse](OptionalType.md#ifarraynotemptyorelse)
- [ifFail](OptionalType.md#iffail)
- [ifIsTrue](OptionalType.md#ifistrue)
- [ifIsTrueOrElse](OptionalType.md#ifistrueorelse)
- [ifPresent](OptionalType.md#ifpresent)
- [ifPresentOrElse](OptionalType.md#ifpresentorelse)
- [isEmpty](OptionalType.md#isempty)
- [isNotFalse](OptionalType.md#isnotfalse)
- [isNumeric](OptionalType.md#isnumeric)
- [isPresent](OptionalType.md#ispresent)
- [isTrue](OptionalType.md#istrue)
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

[optional.ts:9](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L9)

___

### get

• **get**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[optional.ts:3](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L3)

___

### icbotEmpty

• **icbotEmpty**: (`cb`: (`data`: `T`) => `T`) => `T`

#### Type declaration

▸ (`cb`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => `T` |

##### Returns

`T`

#### Defined in

[optional.ts:24](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L24)

___

### icbotFalse

• **icbotFalse**: (`cb`: (`data`: `T`) => `T`) => ``false`` \| `T`

#### Type declaration

▸ (`cb`): ``false`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => `T` |

##### Returns

``false`` \| `T`

#### Defined in

[optional.ts:26](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L26)

___

### icbumberNotZero

• **icbumberNotZero**: (`cb`: (`value`: `T`) => `T`) => `T`

#### Type declaration

▸ (`cb`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => `T` |

##### Returns

`T`

#### Defined in

[optional.ts:11](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L11)

___

### icbumberNotZeroOrElse

• **icbumberNotZeroOrElse**: (`cb1`: (`value`: `T`) => `T`, `cb2`: (`value`: `T`) => `T`) => `T`

#### Type declaration

▸ (`cb1`, `cb2`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`value`: `T`) => `T` |
| `cb2` | (`value`: `T`) => `T` |

##### Returns

`T`

#### Defined in

[optional.ts:12](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L12)

___

### ifArrayNotEmpty

• **ifArrayNotEmpty**: (`cb`: (`data`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`cb`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

[optional.ts:22](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L22)

___

### ifArrayNotEmptyOrElse

• **ifArrayNotEmptyOrElse**: (`cb1`: (`data`: `T`) => `T`, `cb2`: (`data`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`cb1`, `cb2`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`data`: `T`) => `T` |
| `cb2` | (`data`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

[optional.ts:23](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L23)

___

### ifFail

• **ifFail**: (`cb`: (`value`: `T`) => `void`) => `void`

#### Type declaration

▸ (`cb`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => `void` |

##### Returns

`void`

#### Defined in

[optional.ts:17](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L17)

___

### ifIsTrue

• **ifIsTrue**: (`cb`: (`data`: `T`) => `T`) => ``false`` \| `T`

#### Type declaration

▸ (`cb`): ``false`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => `T` |

##### Returns

``false`` \| `T`

#### Defined in

[optional.ts:15](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L15)

___

### ifIsTrueOrElse

• **ifIsTrueOrElse**: (`cb1`: (`data`: `T`) => `any`, `cb2`: (`data`: `T`) => `T`) => `void`

#### Type declaration

▸ (`cb1`, `cb2`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`data`: `T`) => `any` |
| `cb2` | (`data`: `T`) => `T` |

##### Returns

`void`

#### Defined in

[optional.ts:16](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L16)

___

### ifPresent

• **ifPresent**: (`cb`: (`value`: `T`) => `T`) => ``null`` \| `T`

#### Type declaration

▸ (`cb`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => `T` |

##### Returns

``null`` \| `T`

#### Defined in

[optional.ts:10](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L10)

___

### ifPresentOrElse

• **ifPresentOrElse**: (`cb1`: `undefined` \| (`value`: `T`) => `void`, `cb2`: `undefined` \| (`value`: `T`) => `void`) => ``null`` \| `T`

#### Type declaration

▸ (`cb1`, `cb2`): ``null`` \| `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | `undefined` \| (`value`: `T`) => `void` |
| `cb2` | `undefined` \| (`value`: `T`) => `void` |

##### Returns

``null`` \| `T`

#### Defined in

[optional.ts:18](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L18)

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:13](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L13)

___

### isNotFalse

• **isNotFalse**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:25](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L25)

___

### isNumeric

• **isNumeric**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:6](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L6)

___

### isPresent

• **isPresent**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:2](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L2)

___

### isTrue

• **isTrue**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:14](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L14)

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

[optional.ts:5](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L5)

___

### numberNotZero

• **numberNotZero**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:8](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L8)

___

### numberValue

• **numberValue**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[optional.ts:7](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L7)

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

[optional.ts:4](https://github.com/osins/osins-utils/blob/096e636/src/optional.ts#L4)
