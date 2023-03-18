[osins-utils](../README.md) / [Exports](../modules.md) / OptionalType

# Interface: OptionalType<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [get](OptionalType.md#get)
- [ifArrayNotEmpty](OptionalType.md#ifarraynotempty)
- [ifArrayNotEmptyOrElse](OptionalType.md#ifarraynotemptyorelse)
- [ifFail](OptionalType.md#iffail)
- [ifIsTrue](OptionalType.md#ifistrue)
- [ifIsTrueOrElse](OptionalType.md#ifistrueorelse)
- [ifNotEmpty](OptionalType.md#ifnotempty)
- [ifNotFalse](OptionalType.md#ifnotfalse)
- [ifNotZero](OptionalType.md#ifnotzero)
- [ifNotZeroOrElse](OptionalType.md#ifnotzeroorelse)
- [ifPresent](OptionalType.md#ifpresent)
- [ifPresentOrElse](OptionalType.md#ifpresentorelse)
- [isArrayAndEmpty](OptionalType.md#isarrayandempty)
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

### get

• **get**: () => `T`

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[optional.ts:3](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L3)

___

### ifArrayNotEmpty

• **ifArrayNotEmpty**: <R\>(`cb`: (`data`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:22](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L22)

___

### ifArrayNotEmptyOrElse

• **ifArrayNotEmptyOrElse**: <R\>(`cb1`: (`data`: `any`[]) => ``null`` \| `R`[], `cb2`: (`data`: `any`[]) => ``null`` \| `R`[]) => ``null`` \| `R`[]

#### Type declaration

▸ <`R`\>(`cb1`, `cb2`): ``null`` \| `R`[]

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`data`: `any`[]) => ``null`` \| `R`[] |
| `cb2` | (`data`: `any`[]) => ``null`` \| `R`[] |

##### Returns

``null`` \| `R`[]

#### Defined in

[optional.ts:23](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L23)

___

### ifFail

• **ifFail**: <R\>(`cb`: (`value`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:17](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L17)

___

### ifIsTrue

• **ifIsTrue**: <R\>(`cb`: (`data`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:15](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L15)

___

### ifIsTrueOrElse

• **ifIsTrueOrElse**: <R\>(`cb1`: (`data`: `T`) => ``null`` \| `R`, `cb2`: (`data`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb1`, `cb2`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`data`: `T`) => ``null`` \| `R` |
| `cb2` | (`data`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:16](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L16)

___

### ifNotEmpty

• **ifNotEmpty**: <R\>(`cb`: (`data`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:24](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L24)

___

### ifNotFalse

• **ifNotFalse**: <R\>(`cb`: (`data`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`data`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:26](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L26)

___

### ifNotZero

• **ifNotZero**: <R\>(`cb`: (`value`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:13](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L13)

___

### ifNotZeroOrElse

• **ifNotZeroOrElse**: <R\>(`cb1`: (`value`: `T`) => ``null`` \| `R`, `cb2`: () => `R`) => `R`

#### Type declaration

▸ <`R`\>(`cb1`, `cb2`): `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`value`: `T`) => ``null`` \| `R` |
| `cb2` | () => `R` |

##### Returns

`R`

#### Defined in

[optional.ts:14](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L14)

___

### ifPresent

• **ifPresent**: <R\>(`cb`: (`value`: `T`) => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`value`: `T`) => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:12](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L12)

___

### ifPresentOrElse

• **ifPresentOrElse**: <R\>(`cb1`: (`value`: `T`) => ``null`` \| `R`, `cb2`: () => ``null`` \| `R`) => ``null`` \| `R`

#### Type declaration

▸ <`R`\>(`cb1`, `cb2`): ``null`` \| `R`

##### Type parameters

| Name |
| :------ |
| `R` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `cb1` | (`value`: `T`) => ``null`` \| `R` |
| `cb2` | () => ``null`` \| `R` |

##### Returns

``null`` \| `R`

#### Defined in

[optional.ts:18](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L18)

___

### isArrayAndEmpty

• **isArrayAndEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:9](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L9)

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:10](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L10)

___

### isNotFalse

• **isNotFalse**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:25](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L25)

___

### isNumeric

• **isNumeric**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:6](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L6)

___

### isPresent

• **isPresent**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:2](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L2)

___

### isTrue

• **isTrue**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:11](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L11)

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

[optional.ts:5](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L5)

___

### numberNotZero

• **numberNotZero**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[optional.ts:8](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L8)

___

### numberValue

• **numberValue**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[optional.ts:7](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L7)

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

[optional.ts:4](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L4)
