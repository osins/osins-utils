[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [types](../modules/types.md) / [base](../modules/types.base.md) / LxbAppLibType

# Interface: LxbAppLibType

[types](../modules/types.md).[base](../modules/types.base.md).LxbAppLibType

拉新吧app库

**`Description`**

用于拉新吧app的开发

## Table of contents

### Properties

- [api](types.base.LxbAppLibType.md#api)
- [authorize](types.base.LxbAppLibType.md#authorize)
- [desc](types.base.LxbAppLibType.md#desc)
- [packageName](types.base.LxbAppLibType.md#packagename)
- [store](types.base.LxbAppLibType.md#store)
- [system](types.base.LxbAppLibType.md#system)
- [ui](types.base.LxbAppLibType.md#ui)

## Properties

### api

• **api**: `Object`

平台api接口交互相关

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorize` | [`AuthorizeType`](types.base.AuthorizeType.md) | 平台权限授权相关接口 |
| `ys` | `any` | 银盛平台相关接口 |

#### Defined in

types/base.ts:116

___

### authorize

• **authorize**: `any`

授权相关

#### Defined in

types/base.ts:112

___

### desc

• **desc**: `string`

包描述

#### Defined in

types/base.ts:104

___

### packageName

• **packageName**: `string`

包名

#### Defined in

types/base.ts:100

___

### store

• **store**: `any`

状态/数据/缓存相关

#### Defined in

types/base.ts:134

___

### system

• **system**: [`SystemType`](types.base.SystemType.md)

系统信息相关

#### Defined in

types/base.ts:108

___

### ui

• **ui**: `any`

ui相关

**`Description`**

如调起选择文件的弹窗等通用方法

#### Defined in

types/base.ts:130
