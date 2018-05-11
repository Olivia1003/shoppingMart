<template>
    <div class="cart-foot-wrap">
        <div class="cart-foot-l">
            <div class="item-all-check">
                <a href="javascript:void 0" @click="checkAll">
                    <span class="item-check-btn" :class="{'check':allCheck}">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                    </span>
                    <span>全选</span>
                </a>
            </div>
            <div class="item-all-del">
                <a href="javascript:void 0" class="item-del-btn">
                    <span>取消全选</span>
                </a>
            </div>
        </div>
        <div class="cart-foot-r">
            <div class="item-total">
                Item total: <span class="total-price">{{total | moneyFilter}}</span>
            </div>
            <div class="next-btn-wrap">
                <a href="" class="btn btn--red" style="width: 200px">结账</a>
                <!--router-link-->

                <router-link to="/user/Phoebe">Phoebe</router-link>
                <router-link to="/user/Jack">Jack</router-link>
                <router-link to="/user/May">May</router-link>

                <router-link to="/farm">go to farm</router-link>
                <router-link to="/">go to home</router-link>

            </div>
        </div>

        <!--router-view-->
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        props: {
            total:{
                type:Number,
                required:true
            },
            allCheck:{
                type:Boolean,
                required:true
            }
        },
        filters:{
            moneyFilter:function (value) {
                return "￥"+value.toFixed(2);
            }
        },
        methods:{
            checkAll:function () {
                this.$emit('checkAll');
            }
        }
    }
</script>

<style>
    .cart-foot-wrap {
        height: 54px;
        line-height: 54px;
        margin-top: 18px;
    }
    .cart-foot-wrap .cart-foot-l {
        float: left;
        font-size: 16px;
        padding: 0 22px;
    }
    .cart-foot-wrap .item-all-check {
        float: left;
        color: #EE7A23;
    }
    .cart-foot-wrap .item-all-check .item-check-btn {
        margin-right: 18px;
    }
    .cart-foot-wrap .item-all-check span {
        vertical-align: middle;
    }
    .cart-foot-wrap .item-all-del {
        float: left;
        margin-top: 2px;
    }
    .cart-foot-wrap .cart-foot-r {
        float: right;
    }
    .cart-foot-wrap .item-total {
        float: left;
        margin-right: 31px;
        color: #605F5F;
        font-size: 18px;
    }
    .cart-foot-wrap .item-total .total-price {
        margin-left: 16px;
        color: #d1434a;
        font-family: "moderat", sans-serif;
    }
    .cart-foot-wrap .next-btn-wrap {
        float: right;
    }
    .cart-foot-wrap:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }
</style>