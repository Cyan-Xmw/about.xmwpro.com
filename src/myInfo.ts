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
            name: '关于我',
            link: 'page1',
            icon: 'cyan-nanxing'
        },
        {
            name: '我会啥',
            link: 'page2',
            icon: 'cyan-riji'
        },
        {
            name: '个人作品',
            link: 'page3',
            icon: 'cyan-liwuhe'
        },
        {
            name: '联系我',
            link: 'page4',
            icon: 'cyan-lianxi'
        }
    ],
    tags: ['95后', '前端摸鱼🐟工程师', '佛系', '阳光开朗', '广东湛江', '深漂'],
    skills: [
        {
            name: 'Vue.js',
            progress: 80,
            icon: 'bxl-vuejs'
        },
        {
            name: 'ES6',
            progress: 70,
            icon: 'bxl-javascript'
        },
        {
            name: 'Egg.js',
            progress: 65,
            icon: 'bxl-nodejs'
        },
        {
            name: 'React.js',
            progress: 20,
            icon: 'bxl-react'
        },
        {
            name: 'Mysql',
            progress: 25,
            icon: 'bxs-data'
        },
        {
            name: 'Echarts',
            progress: 75,
            icon: 'bxs-pie-chart-alt-2'
        }
    ],
    social: [
        {
            name: 'Blog',
            link: 'https://blog.xmwpro.com/',
            icon: 'cyan-chengbao'
        },
        {
            name: 'Github',
            link: 'https://github.com/Cyan-Xmw',
            icon: 'cyan-GitHub'
        },
        {
            name: 'Wechat',
            link: 'https://cyan-blog.oss-cn-shenzhen.aliyuncs.com/global/wechat.jpeg',
            icon: 'cyan-weixin'
        },
        {
            name: 'QQ',
            link: 'http://wpa.qq.com/msgrd?v=3&uin=843348394&site=qq&menu=yes',
            icon: 'cyan-QQ'
        }
    ]
}