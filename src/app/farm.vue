<template>
    <div class="block">
        <p>welcome to farm!!!</p>

        <router-link :to="'/farm/sheep'">sheep</router-link>
        <br/>
        <router-view></router-view>
        <br/><br/><br/>
    </div>
    
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .block{
        width: 100%;
        height: 130px;
        background-color: dimgray;
    }
</style>