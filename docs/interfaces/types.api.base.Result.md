[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [api](../modules/types.api.md) / [base](../modules/types.api.base.md) / Result

# Interface: Result<T\>

[api](../modules/types.api.md).[base](../modules/types.api.base.md).Result

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [code](types.api.base.Result.md#code)
- [data](types.api.base.Result.md#data)
- [dict](types.api.base.Result.md#dict)
- [reason](types.api.base.Result.md#reason)
- [success](types.api.base.Result.md#success)

## Properties

### code

• **code**: `number`

接口调用失败时的错误码

#### Defined in

types/api/base.ts:86

___

### data

• **data**: `T`

接口调用成功时返回的数据

#### Defined in

types/api/base.ts:94

___

### dict

• **dict**: `Map`<`any`, `any`\>

接口调用成功时返回的

#### Defined in

types/api/base.ts:98

___

### reason

• **reason**: `string`

接口调用成功/失败时的错误信息

#### Defined in

types/api/base.ts:90

___

### success

• **success**: `boolean`

接口调用是否执行成功

#### Defined in

types/api/base.ts:82
