# temp_wxamp
微信小程序

1. 使用该项目之前先申请自己的微信小工程序开发AppID
2. 使用微信开发者工具,导入项目,选择目录`miniprogram`,
3. 导入之后即可运行,所有数据均为模拟测试数据

### 原生小程序项目文件结构说明

最外层`miniprogram`目录下面

| 文件       | 必需 | 作用                         |
| ---------- | ---- | ---------------------------- |
| `app.js`   | 是   | 小程序逻辑                   |
| `app.json` | 是   | 小程序公共配置(包括路由地址) |
| `app.wxss` | 否   | 小程序公共样式表             |

pages目录就是页面功能,分为4个文件

| 文件类型 | 必需 | 作用       |
| -------- | ---- | ---------- |
| `js`     | 是   | 页面逻辑   |
| `wxml`   | 是   | 页面结构   |
| `json`   | 否   | 页面配置   |
| `wxss`   | 否   | 页面样式表 |



### 其他

#### 自定义`tabBar`

```wiki
非特殊需要,不建议使用自定义tabBar, 自定义的tabBar会有延迟或者闪烁问题
非特殊需要,不建议使用自定义tabBar, 自定义的tabBar会有延迟或者闪烁问题
非特殊需要,不建议使用自定义tabBar, 自定义的tabBar会有延迟或者闪烁问题

app.json 中 "custom": true, 可以看效果
```



