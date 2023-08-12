import { createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

// 配置信息中需要页面的相关配置


const routes = [
{
    path: '/',
    name: 'home',
    component: HomeView
},
{
    path: '/about',
    name: 'about',
    //重定向-打开即为第一个页面
    redirect:"/about/us",
    // component: AboutView
    component: () =>
    import('../views/AboutView.vue'), 
    children:[
        {
            // 二级导航不需要加“/”
            path:"us",
            component: ()=>import("../views/AboutSub/AboutUs.vue")
        },
        {
            path:"info",
            component: ()=>import("../views/AboutSub/AboutInfo.vue")
        }
    ]
},
{
    path:"/news",
    name:"news",
    // 这是异步加载方式
    component: ()=>import("../views/NewsView.vue")
},
{
    path:"/newsdetails/:name",
    name:"newsdetails",
    component: ()=>import("../views/NewsDetailsView.vue")
}
] 

// 创建路由
const router = createRouter({
    /**
     * 
     * createWebHashHistory
     *      home:http://localhost:8080/
     *      about:http://localhost:8080/about
     * 此种方式需要后台配置和做重定向，否则会出现404问题
     * 
     * 原理：H5 pushState()
     */

    /**
     * 
     * createWebHistory
     *      home:http://localhost:8080/#/
     *      about:http://localhost:8080/#/about
     * 
     * 原理：a标签锚点连接
     */

    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})
export default router;