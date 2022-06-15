export default {
    global: {
        title: "欢迎来到我的网站",  // 浏览器标签页名 和 footer中的版权内容
        name: "谢明伟",   // 你的名字
        nickName: "Cyan",   // 英文名或昵称
    },
    isMobile: function () {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag
    },
    menu: [
        {
            name: '主页',
            link: 'page1'
        },
        {
            name: '关于我',
            link: 'page2'
        },
        {
            name: '我会啥',
            link: 'page3'
        },
        {
            name: '联系我',
            link: 'page4'
        }
    ]
}