[laxinba-app-lib](README.md) / Exports

# laxinba-app-lib

## Table of contents

### Namespaces

- [constant](modules/constant.md)
- [entity](modules/entity.md)
- [oss](modules/oss.md)
- [types](modules/types.md)
- [utils](modules/utils.md)

### Functions

- [default](modules.md#default)

## Functions

### default

▸ **default**(`config`): [`LxbAppLibType`](interfaces/types.base.LxbAppLibType.md) \| ``null``

初始化拉新吧依赖库的入口方法

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `LxbAppLibConfig` | 库依赖所需要的配置，uni和plus为uniapp中的全局对象，请在调用前传入，否则会报错 |

#### Returns

[`LxbAppLibType`](interfaces/types.base.LxbAppLibType.md) \| ``null``

#### Defined in

index.ts:34
