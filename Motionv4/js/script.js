// 定义当前版本
const page_version = 405.001;
// 定义更新JSON
// 若你想更新最新版本请不要乱动这里的代码
const url = "https://cdn.jsdelivr.net/gh/Dongyifengs/CEP-Update@main/Motionv4/json/Motionv4update.json"
// 定义 xhr 和 XMLHttpRequest
let xhr = new XMLHttpRequest();
// 打开服务器json文件
xhr.open("GET",url);
// 取json文件的内容
xhr.send();
// 调用body的div version
let version_now = document.getElementById("version");
// AJAX 每当 readyState 属性改变时，就会调用该函数
xhr.onreadystatechange = (evt) => {
    // 当前页面与服务器版本比较
    if (xhr.readyState===4 && xhr.status===200) {
        // 如果当前页面大于等于服务器版本，则不提醒更新
        if (page_version >= JSON.parse(xhr.responseText).version){
            // 清空Internet文本
            Internet.innerText = '';
            // 当前版本
            CurrentVersion.innerText = `扩展当前版本为 v.${page_version}`;
            // 最新版本
            LatestVersion.innerText = `最新扩展版本为 v.${JSON.parse(xhr.responseText).version}`;
            // 当前版本是最新版本
            UpdateVersion.innerText = `当前版本是最新版本哦`;
        }else {
            // 如果低于服务器版本，则提示更新并且显示最新版本的标题，日志，更新版本时间
            // 当前版本
            CurrentVersion.innerText = `当前版本为 v.${page_version}`;
            // 最新版本
            LatestVersion.innerText = `最新版本为 v.${JSON.parse(xhr.responseText).version}`;
            // 更新时间
            LatestTime.innerText = `更新时间：${JSON.parse(xhr.responseText).uptime}`;
            // 更新标题
            LatestTitle.innerText = `更新标题：${JSON.parse(xhr.responseText).title}`
            // 更新日志
            LatestAbout.innerText = `更新日志：${JSON.parse(xhr.responseText).about}`;
            // 提示更新
            UpdateVersion.innerText = `当前可能不是最新版本,请前往墨忆的bilibili动态更新哦.`;
        }
    }
};