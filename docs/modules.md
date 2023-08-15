[osins-utils](README.md) / Exports

# osins-utils

## Table of contents

### Interfaces

- [OptionalType](interfaces/OptionalType.md)
- [Result](interfaces/Result.md)

### Functions

- [fail](modules.md#fail)
- [optional](modules.md#optional)
- [response](modules.md#response)
- [success](modules.md#success)

## Functions

### fail

▸ **fail**<`T`\>(`reason`): [`Result`](interfaces/Result.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `string` |

#### Returns

[`Result`](interfaces/Result.md)<`T`\>

#### Defined in

<<<<<<< HEAD
[result.ts:12](https://github.com/osins/osins-utils/blob/b1b8065/src/result.ts#L12)
=======
[result.ts:12](https://github.com/osins/osins-utils/blob/de67fbb/src/result.ts#L12)
>>>>>>> 090c7aa (update)

___

### optional

▸ **optional**<`T`\>(`value`): [`OptionalType`](interfaces/OptionalType.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`OptionalType`](interfaces/OptionalType.md)<`T`\>

#### Defined in

<<<<<<< HEAD
[optional.ts:29](https://github.com/osins/osins-utils/blob/b1b8065/src/optional.ts#L29)
=======
[optional.ts:29](https://github.com/osins/osins-utils/blob/de67fbb/src/optional.ts#L29)
>>>>>>> 090c7aa (update)

___

### response

▸ **response**<`T`\>(`result`): [`Result`](interfaces/Result.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

#### Returns

[`Result`](interfaces/Result.md)<`T`\>

#### Defined in

<<<<<<< HEAD
[result.ts:8](https://github.com/osins/osins-utils/blob/b1b8065/src/result.ts#L8)
=======
[result.ts:8](https://github.com/osins/osins-utils/blob/de67fbb/src/result.ts#L8)
>>>>>>> 090c7aa (update)

___

### success

▸ **success**<`T`\>(`reason?`, `data?`): [`Result`](interfaces/Result.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `data?` | `T` |

#### Returns

[`Result`](interfaces/Result.md)<`T`\>

#### Defined in

<<<<<<< HEAD
[result.ts:19](https://github.com/osins/osins-utils/blob/b1b8065/src/result.ts#L19)
=======
[result.ts:19](https://github.com/osins/osins-utils/blob/de67fbb/src/result.ts#L19)
>>>>>>> 090c7aa (update)
