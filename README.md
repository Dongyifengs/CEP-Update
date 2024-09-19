# CEP-Update 【仓库版本列表】
Adobe 插件更新仓库，请勿Fork，仅提供本人测试学习使用!!

Adobe 插件更新仓库，请勿Fork，仅提供本人测试学习使用!!

Adobe 插件更新仓库，请勿Fork，仅提供本人测试学习使用!!


## 【仓库版本API,以下使用urlAPI代替】
``` javascript
const urlAPI = "https://cdn.jsdelivr.net/gh/Dongyifengs/CEP-Update/"
```

## 【v1 - 调用规则】
``` javascript
urlAPI/`插件名称`/json/`插件名称`update.json
```

## 【v2 - 调用规则】
``` javascript
urlAPI/Install/FileInstall.json
```

## 【json-server 本地测试】
进入TestJson目录，执行以下命令
``` javascript
npm install -g json-server
json-server --watch FileInstall.json
```
主页:http://localhost:3000/
后续调用规则同上👆

以CEPINSTALL的Overlord2为例 ： `http://localhost:3000/CEPINSTAL`
假设a为json内容

a[0]为Overlord2的类

a[0].name 为Overlord2的名称

以此类推



