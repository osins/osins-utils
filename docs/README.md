laxinba-app-lib / [Exports](modules.md)

### laxinba-app-lib 说明

本依赖库为拉新吧 app 专属后端服务接口依赖库

### 使用方法

#### 添加依赖

```
nrm add laxinba https://verdaccio.laxinba.com

npm install laxinba-app-lib
```

#### 初始化

```
import LxbAppLib from 'laxinba-app-lib'

// #ifdef APP-PLUS
const libConfig = {uni:uni, plus:plus}
// #endif

// #ifdef H5
const libConfig = {uni:uni, plus:null}
// #endif

const lib = LxbAppLib(libConfig)
```

### 结构说明

```
----api (接口相关的方法)

    ----authorize (权限相关)
        ----sendCode （发送手机验证码）
        ----register (用户注册)
        ----token   (获取token)
        ----useUserAuthStore (存储/获取token)

    ----ys (银盛相关的接口)
        ----merchant (商户入驻相关)
            ----apply （商户入驻资料提交)

        ----upload  (图片/文件上传相关)
            ----smscUpload  （商户入驻图片上传）
            ----reportUpload    (微信、支付宝报备资料相关文件上传)
    oss
        ----genSsoURL   (生成对象存储的文件路径)

    ui
        ----chooseImage (app端弹出文件选择)

    store (临时数据、状态存储)

    utils   (工具类方法)
        ----optional （undefined、null、empty、''、0等值验证工具方法）

```
