[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [api](../modules/types.api.md) / [base](../modules/types.api.base.md) / RegisterRequest

# Interface: RegisterRequest

[api](../modules/types.api.md).[base](../modules/types.api.base.md).RegisterRequest

注册信息（用户注册接口调用时需要传入的对象）

**`Description`**

邀请码为用户通过扫描团队长发放的邀请注册海报中的二维码获取，短信验证码需要用户通过调用短信验证码接口(sendCode lib.api.authorize.sendCode(mobile:string) )获取

## Table of contents

### Properties

- [invitationCode](types.api.base.RegisterRequest.md#invitationcode)
- [mobile](types.api.base.RegisterRequest.md#mobile)
- [password](types.api.base.RegisterRequest.md#password)
- [realname](types.api.base.RegisterRequest.md#realname)
- [username](types.api.base.RegisterRequest.md#username)
- [verificationCode](types.api.base.RegisterRequest.md#verificationcode)

## Properties

### invitationCode

• **invitationCode**: `string`

邀请码

#### Defined in

types/api/base.ts:25

___

### mobile

• **mobile**: `string`

手机号

#### Defined in

types/api/base.ts:13

___

### password

• `Optional` **password**: `string`

密码

#### Defined in

types/api/base.ts:21

___

### realname

• `Optional` **realname**: `string`

真实姓名

#### Defined in

types/api/base.ts:17

___

### username

• `Optional` **username**: `string`

用户名

#### Defined in

types/api/base.ts:9

___

### verificationCode

• **verificationCode**: `string`

短信验证码

#### Defined in

types/api/base.ts:29
