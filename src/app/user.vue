<template>
    <div class="block">
        <p>my name is {{$route.params.name}} hhhhhhhhhhhhh</p>
        <p>age is {{$route.query.age}}</p>

        <!--子路由-->
        <!--两种方式-->
        <!--<router-link :to="'/user/'+$route.params.name+'/more'">show more</router-link>-->
        <br/>
        <router-link :to="'/user/'+$route.params.name+'/more'">show more by append---user manage</router-link>
        <br/>
        <router-link :to="'/user/'+$route.params.name+'/more2'">show more2 by append---article manage</router-link>

        <!--命名视图,同级-->
        <router-view name="sidebar"></router-view>
        <router-view name="content"></router-view>

        <button @click="surf">surf</button>
        
        <br/><br/><br/>

    </div>

</template>

<script>
    export default {
        methods:{
            surf:function () {
                var _this=this;
                setTimeout(function () {
                    console.log("push to farm");
                    _this.$router.push('/farm');
                    setTimeout(function () {
                        console.log("push to jenifer");
                        _this.$router.push('/user/jenifer');
                    },2000)
                },2000)
            }
        }
    }
</script>

<style scoped>
    .block{
        width: 100%;
        height: 130px;
        background-color: lightgray;
    }
    button{
        padding: 5px 20px;
        background-color: #605F5F;
        color: white;
    }
</style>