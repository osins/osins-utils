[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [api](../modules/types.api.md) / [base](../modules/types.api.base.md) / TokenRequst

# Interface: TokenRequst

[api](../modules/types.api.md).[base](../modules/types.api.base.md).TokenRequst

用户授权请求信息

## Table of contents

### Properties

- [client\_id](types.api.base.TokenRequst.md#client_id)
- [grant\_type](types.api.base.TokenRequst.md#grant_type)
- [password](types.api.base.TokenRequst.md#password)
- [username](types.api.base.TokenRequst.md#username)
- [verificationCode](types.api.base.TokenRequst.md#verificationcode)

## Properties

### client\_id

• `Optional` **client\_id**: `string`

客户端应用id

#### Defined in

types/api/base.ts:51

___

### grant\_type

• `Optional` **grant\_type**: ``"password"`` \| ``"refresh_token"`` \| ``"authorization_code"`` \| ``"client_credentials"``

请求授权的类型（参考oauth2.0）

**`Description`**

密码模式 'password' | 刷新token 'refresh_token' | 授权码模式 'authorization_code' | 客户端模式 'client_credentials'

#### Defined in

types/api/base.ts:57

___

### password

• **password**: `string`

密码

#### Defined in

types/api/base.ts:43

___

### username

• **username**: `string`

用户名

#### Defined in

types/api/base.ts:39

___

### verificationCode

• `Optional` **verificationCode**: `string`

验证码

#### Defined in

types/api/base.ts:47
