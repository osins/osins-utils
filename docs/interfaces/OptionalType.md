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

<<<<<<< HEAD
[optional.ts:3](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L3)
=======
[optional.ts:9](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L9)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:22](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L22)
=======
[optional.ts:3](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L3)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:23](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L23)
=======
[optional.ts:24](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L24)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:17](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L17)
=======
[optional.ts:26](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L26)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:15](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L15)
=======
[optional.ts:11](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L11)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:16](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L16)
=======
[optional.ts:12](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L12)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:24](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L24)
=======
[optional.ts:22](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L22)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:26](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L26)
=======
[optional.ts:23](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L23)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:13](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L13)
=======
[optional.ts:17](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L17)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:14](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L14)
=======
[optional.ts:15](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L15)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:12](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L12)
=======
[optional.ts:16](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L16)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:18](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L18)
=======
[optional.ts:10](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L10)
>>>>>>> 090c7aa (update)

___

### isArrayAndEmpty

• **isArrayAndEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:9](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L9)
=======
[optional.ts:18](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L18)
>>>>>>> 090c7aa (update)

___

### isEmpty

• **isEmpty**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:10](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L10)
=======
[optional.ts:13](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L13)
>>>>>>> 090c7aa (update)

___

### isNotFalse

• **isNotFalse**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:25](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L25)
=======
[optional.ts:25](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L25)
>>>>>>> 090c7aa (update)

___

### isNumeric

• **isNumeric**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:6](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L6)
=======
[optional.ts:6](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L6)
>>>>>>> 090c7aa (update)

___

### isPresent

• **isPresent**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:2](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L2)
=======
[optional.ts:2](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L2)
>>>>>>> 090c7aa (update)

___

### isTrue

• **isTrue**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:11](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L11)
=======
[optional.ts:14](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L14)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:5](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L5)
=======
[optional.ts:5](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L5)
>>>>>>> 090c7aa (update)

___

### numberNotZero

• **numberNotZero**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

<<<<<<< HEAD
[optional.ts:8](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L8)
=======
[optional.ts:8](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L8)
>>>>>>> 090c7aa (update)

___

### numberValue

• **numberValue**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

<<<<<<< HEAD
[optional.ts:7](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L7)
=======
[optional.ts:7](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L7)
>>>>>>> 090c7aa (update)

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

<<<<<<< HEAD
[optional.ts:4](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L4)
=======
[optional.ts:4](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L4)
>>>>>>> 090c7aa (update)
