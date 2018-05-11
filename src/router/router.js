import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:'/farm',
        component:function (resolve) {
            require(['../app/farm.vue'],resolve)
        },
        children:[
            {
                path:'sheep',
                component:{
                    template:`<div>this is sheep!!!</div>`
                }
            }
        ]
    },
    {
        path:'/',
        component:function (resolve) {
            require(['../app/home.vue'],resolve)
        }
    },
    {
        path:'/user/:name',
        component:function (resolve) {
            require(['../app/user.vue'],resolve)
        },
        children:[
            {
                path:'more',
                components:{
                    sidebar:{
                        template:`<ul><li>用户管理</li><li>用户添加</li></ul>`
                    },
                    content:{
                        template:`<div>用户内容用户内容用户内容用户内容用户内容</div>`
                    }

                    // template:`<div>用户{{$route.params.name}}的详细信息more info here</div>`
                }
            },
            {
                path:'more2',
                components:{
                    sidebar:{
                        template:`<ul><li>帖子管理</li><li>帖子添加</li></ul>`
                    },
                    content:{
                        template:`<div>帖子内容帖子内容帖子内容帖子内容帖子内容</div>`
                    }
                }
            }
        ]
    },



]

const router=new VueRouter({
    routes:routes
})

//导航守卫，访问之前
router.beforeEach(function (to,from,next) {
    var logged_in=false;
    //判断是否登录（需要权限）
    console.log("to.matched",to.matched);

    //或者在定义路由时定义meta,更方便
    if(!logged_in&&to.matched.some(function (item) {//检查各层嵌套路由，更严谨
            return item.path=='/farm';
        })){
        next('/');
    }else{
        next();
    }
})

//访问之后
router.afterEach(function (to,from) {
    //console.log("from",from);
    //console.log("to",to);
})

export default router