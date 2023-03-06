[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [api](../modules/types.api.md) / [base](../modules/types.api.base.md) / RequestOptions

# Interface: RequestOptions

[api](../modules/types.api.md).[base](../modules/types.api.base.md).RequestOptions

参考uni api 的request请求
https://uniapp.dcloud.net.cn/api/request/request.html

## Hierarchy

- [`BaseOptions`](types.api.base.BaseOptions.md)

  ↳ **`RequestOptions`**

## Table of contents

### Properties

- [complete](types.api.base.RequestOptions.md#complete)
- [data](types.api.base.RequestOptions.md#data)
- [fail](types.api.base.RequestOptions.md#fail)
- [isAuthentication](types.api.base.RequestOptions.md#isauthentication)
- [method](types.api.base.RequestOptions.md#method)
- [success](types.api.base.RequestOptions.md#success)
- [uni](types.api.base.RequestOptions.md#uni)
- [url](types.api.base.RequestOptions.md#url)

## Properties

### complete

• `Optional` **complete**: (`result`: `any`) => `void`

#### Type declaration

▸ (`result`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `any` | 接口调用完毕的回调（无论成功与失败都会执行） |

##### Returns

`void`

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[complete](types.api.base.BaseOptions.md#complete)

#### Defined in

types/api/base.ts:167

___

### data

• `Optional` **data**: `string` \| [`AnyObject`](types.api.base.AnyObject.md) \| `ArrayBuffer`

返回的数据

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[data](types.api.base.BaseOptions.md#data)

#### Defined in

types/api/base.ts:149

___

### fail

• `Optional` **fail**: (`result`: `any`) => `void`

#### Type declaration

▸ (`result`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | `any` | 失败后的回调 |

##### Returns

`void`

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[fail](types.api.base.BaseOptions.md#fail)

#### Defined in

types/api/base.ts:161

___

### isAuthentication

• `Optional` **isAuthentication**: `boolean`

是否需要权限验证

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[isAuthentication](types.api.base.BaseOptions.md#isauthentication)

#### Defined in

types/api/base.ts:145

___

### method

• **method**: [`Method`](../modules/types.api.base.md#method-1)

请求方法

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[method](types.api.base.BaseOptions.md#method)

#### Defined in

types/api/base.ts:141

___

### success

• **success**: (`result`: `any`) => `void`

#### Type declaration

▸ (`result`): `void`

成功后的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `any` |

##### Returns

`void`

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[success](types.api.base.BaseOptions.md#success)

#### Defined in

types/api/base.ts:155

___

### uni

• **uni**: `any`

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[uni](types.api.base.BaseOptions.md#uni)

#### Defined in

types/api/base.ts:133

___

### url

• **url**: `string`

后端api服务URL地址

#### Inherited from

[BaseOptions](types.api.base.BaseOptions.md).[url](types.api.base.BaseOptions.md#url)

#### Defined in

types/api/base.ts:137
