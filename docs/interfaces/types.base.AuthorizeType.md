[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [base](../modules/types.base.md) / AuthorizeType

# Interface: AuthorizeType

[types](../modules/types.md).[base](../modules/types.base.md).AuthorizeType

## Table of contents

### Methods

- [register](types.base.AuthorizeType.md#register)
- [sendCode](types.base.AuthorizeType.md#sendcode)
- [token](types.base.AuthorizeType.md#token)

## Methods

### register

▸ **register**(`data`): `Promise`<[`Result`](types.api.base.Result.md)<[`TokenResposne`](types.api.base.TokenResposne.md)\>\>

新用户注册

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RegisterRequest`](types.api.base.RegisterRequest.md) | 注册请求信息 |

#### Returns

`Promise`<[`Result`](types.api.base.Result.md)<[`TokenResposne`](types.api.base.TokenResposne.md)\>\>

#### Defined in

types/base.ts:89

___

### sendCode

▸ **sendCode**(`mobile`): `Promise`<[`Result`](types.api.base.Result.md)<`any`\>\>

发送短信验证码

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mobile` | `string` | 手机号 |

#### Returns

`Promise`<[`Result`](types.api.base.Result.md)<`any`\>\>

#### Defined in

types/base.ts:78

___

### token

▸ **token**(`data`): `Promise`<[`Result`](types.api.base.Result.md)<[`TokenResposne`](types.api.base.TokenResposne.md)\>\>

获取用户授权信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`TokenRequst`](types.api.base.TokenRequst.md) | 请求授权信息 @link() |

#### Returns

`Promise`<[`Result`](types.api.base.Result.md)<[`TokenResposne`](types.api.base.TokenResposne.md)\>\>

#### Defined in

types/base.ts:84
