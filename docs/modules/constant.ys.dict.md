[laxinba-app-lib](../README.md) / [Exports](../modules.md) / [constant](constant.md) / [ys](constant.ys.md) / dict

# Namespace: dict

[constant](constant.md).[ys](constant.ys.md).dict

## Table of contents

### Type Aliases

- [AccType](constant.ys.dict.md#acctype)
- [BusCertType](constant.ys.dict.md#buscerttype)
- [CertType](constant.ys.dict.md#certtype)
- [MerchantType](constant.ys.dict.md#merchanttype)
- [NotifyType](constant.ys.dict.md#notifytype)
- [YesOrNo](constant.ys.dict.md#yesorno)

### Variables

- [CertNeverExpires](constant.ys.dict.md#certneverexpires)

## Type Aliases

### AccType

Ƭ **AccType**: ``11`` \| ``21`` \| ``23`` \| ``24``

#### Defined in

constant/ys/dict.ts:22

___

### BusCertType

Ƭ **BusCertType**: ``"19"``

#### Defined in

constant/ys/dict.ts:16

___

### CertType

Ƭ **CertType**: ``"00"``

#### Defined in

constant/ys/dict.ts:15

___

### MerchantType

Ƭ **MerchantType**: ``2`` \| ``3`` \| ``4``

#### Defined in

constant/ys/dict.ts:2

___

### NotifyType

Ƭ **NotifyType**: ``1`` \| ``2`` \| ``3`` \| ``5`` \| ``6``

异步通知地址,银盛通过商户提供的地址下发通知，商户可根据异步通知业务参数bizContent中的notifyType确定通知类型，具体通知内容、场景以及接口要求详见如下:
客户进件异步通知（notifyType = 1）
合同签约异步通知（notifyType = 2）
入网资料变更通知（notifyType = 3）
费率变更异步通知（notifyType = 5）
报备异步通知（notifyType = 6）

#### Defined in

constant/ys/dict.ts:12

___

### YesOrNo

Ƭ **YesOrNo**: ``"Y"`` \| ``"N"``

#### Defined in

constant/ys/dict.ts:19

## Variables

### CertNeverExpires

• `Const` **CertNeverExpires**: ``"29991231"``

#### Defined in

constant/ys/dict.ts:25
