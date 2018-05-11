<template>
    <div class="checkout-title">
        <span>购物车</span>
    </div>
</template>

<script>
    export default {
        props: []
    }
</script>

<style>
    .checkout-title {
        position: relative;
        margin-bottom: 41px;
        text-align: center;
    }
    .checkout-title span {
        position: relative;
        padding: 0 1em;
        background-color: #fff;
        font-family: "moderat", sans-serif;
        font-weight: bold;
        font-size: 20px;
        color: #605F5F;
        z-index: 1;
    }
    .checkout-title:before {
        position: absolute;
        top: 50%;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background: #ccc;
        z-index: 0;
    }
</style>