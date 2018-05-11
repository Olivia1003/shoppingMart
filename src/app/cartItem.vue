<template>
    <li class="cart-item">
        <div class="cart-tab-1">
            <div class="cart-item-check">
                <a href="javascript:void 0" class="item-check-btn"
                   @click="selectPro" :class="{'check':item.checked}">
                    <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                </a>
            </div>
            <div class="cart-item-pic">
                <img :src="item.productImage" alt="烟">
            </div>
            <div class="cart-item-title">
                <div class="item-name">{{item.productName}}</div>
            </div>
            <div class="item-include">
                <dl>
                    <dt>赠送:</dt>
                    <dd v-for="part in item.parts" :key="part.partsId">{{part.partsName}}</dd>
                </dl>
            </div>
        </div>
        <div class="cart-tab-2">
            <div class="item-price">{{item.productPrice | moneyFilter}}</div>
        </div>
        <div class="cart-tab-3">
            <div class="item-quantity">
                <div class="select-self select-self-open">
                    <div class="quantity">
                        <a href="javascript:void 0" @click="subQuantity">-</a>
                        <input type="text" value="0" disabled v-model="item.productQuantity">
                        <a href="javascript:void 0" @click="addQuantity">+</a>
                    </div>
                </div>
                <div class="item-stock">有货</div>
            </div>
        </div>
        <div class="cart-tab-4">
            <div class="item-price-total">{{totalMoney | moneyFilter}}</div>
        </div>
        <div class="cart-tab-5">
            <div class="cart-item-operation">
                <a href="javascript:void 0" class="item-edit-btn" @click="$emit('del',item.productId)">
                    <img src="../images/delete.png" style="width: 25px"/>
                </a>
            </div>
        </div>
    </li>

</template>

<script>
    export default {
        props: {
            item:{
                type:Object,
                require:true
            }
        },
        computed:{
            totalMoney:function () {
                return this.item.productQuantity*this.item.productPrice;
            }
        },
        mounted:function () {
            this.item.productQuantity=1;//利用对象，子组件可以改变父组件的值
        },
        filters:{
            moneyFilter:function (value) {
                return "￥"+value.toFixed(2);
            }
        },
        methods:{
            addQuantity() {
                console.log("add quan");
                this.item.productQuantity++;
            },
            subQuantity:function () {
                this.item.productQuantity--;
                if(this.item.productQuantity<1){
                    this.item.productQuantity=1;
                }
            },
            selectPro:function () {
                this.$emit('selectPro',this.item);//向父组件传递消息(参数为整个对象)
            }
        }
    }
</script>

<style>
    .cart-item {
        position: relative;
        display: table-row;
        padding: 36px 0;
        background-color: #fff;
    }
    .cart-item > div {
        position: relative;
        display: table-cell;
        text-align: center;
        vertical-align: top;
        border-bottom: 1px solid #e9e9e9;
    }
    .cart-item .cart-tab-1 {
        min-height: 72px;
        padding: 36px 0;
        text-align: left;
        border-left: 1px solid #e9e9e9;
    }
    .cart-item .cart-tab-2 {
        padding-top: 64px;
    }
    .cart-item .cart-tab-3 {
        padding-top: 48px;
    }
    .cart-item .cart-tab-4 {
        padding-top: 64px;
    }
    .cart-item .cart-tab-5 {
        padding-top: 62px;
        border-right: 1px solid #e9e9e9;
    }
    .cart-item .cart-item-check {
        float: left;
        padding: 28px 0 28px 22px;
    }
    .cart-item .cart-item-pic {
        float: left;
        width: 80px;
        height: 72px;
        margin-left: 22px;
        border: 1px solid #e9e9e9;
    }
    .cart-item .cart-item-pic img {
        width: 100%;
        height: 100%;
        cursor:pointer;
    }
    .cart-item .cart-item-title {
        min-height: 58px;
        padding: 0 20px 0 160px;
    }
    .cart-item .cart-item-title .item-name {
        margin: 2px 0 10px;
        line-height: 16px;
        color: #000; }
    .cart-item .cart-item-title .item-count-down .icon-clock {
        width: 14px;
        height: 14px;
        fill: #605F5F;
        vertical-align: middle;
    }
    .cart-item .cart-item-title .item-count-down .item-count-down-time {
        display: inline-block;
        height: 14px;
        line-height: 14px;
        padding: 0 5px;
        background: #f0f0f0;
        font-size: 12px;
        color: #605F5F;
    }
    .cart-item .item-include {
        position: relative;
        padding-left: 160px;
    }
    .cart-item .item-include dl {
        padding-right: 60px;
    }
    .cart-item .item-include dl dt {
        float: left;
        width: 65px;
    }
    .cart-item .item-include dl dd {
        margin-bottom: 13px;
        padding-left: 65px;
        color: #999;
    }
    .cart-item .item-include dl:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }
    .cart-item .item-include .item-include-more {
        position: absolute;
        right: 10px;
        top: 0;
    }
    .cart-item .item-stock {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }
    .cart-item .item-stock-no {
        color: #d1434a;
    }
    .cart-item .item-price-total {
        color: #d1434a;
    }

    .item-check-btn {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 1px solid #ccc;
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }
    .item-check-btn .icon-ok {
        display: none;
        width: 100%;
        height: 100%;
        fill: #fff;
        -ms-transform: scale(0.8);
        transform: scale(0.8);
    }
    .item-check-btn.check {
        background: #EE7A23;
        border-color: #EE7A23;
    }
    .item-check-btn.check .icon-ok {
        display: inline-block;
    }

    .item-edit-btn {
        display: inline-block;
        width: 16px;
        height: 20px;
    }
    .item-edit-btn .icon-del {
        width: 100%;
        height: 100%;
        fill: #999;
    }

    @media only screen and (max-width: 991px) {
        .cart-item {
            position: relative;
            display: block;
            margin-bottom: 10px;
            padding: 0;
            background: #fff;
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9; }
        .cart-item > div {
            position: static;
            display: block;
            border: none; }
        .cart-item.disabled:after {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            background: rgba(96, 95, 95, 0.3);
            z-index: 5; }
        .cart-item.disabled > div:after {
            display: none; }
        .cart-item .cart-tab-1 {
            padding: 18px 0 0 0;
            border: none; }
        .cart-item .cart-tab-2 {
            display: none; }
        .cart-item .cart-tab-3 {
            float: left;
            width: 50%;
            padding: 8px 0 8px 10px;
            text-align: left; }
        .cart-item .cart-tab-4 {
            float: right;
            width: 50%;
            padding: 15px 10px 14px 0;
            text-align: right; }
        .cart-item .cart-tab-5 {
            clear: both;
            padding: 0; }
        .cart-item .cart-item-check {
            padding-left: 10px; }
        .cart-item .cart-item-pic {
            margin-left: 10px; }
        .cart-item .cart-item-title {
            height: 72px;
            padding: 0 10px 0 126px; }
        .cart-item .item-include {
            clear: both;
            margin-top: 10px;
            padding: 0 10px 0 36px;
            border-bottom: 1px solid #e9e9e9; }
        .cart-item .item-quantity > div {
            display: inline-block;
            margin-right: 3px;
            vertical-align: middle; }
        .cart-item .item-stock {
            margin-top: 0; }
        .cart-item .cart-item-opration {
            position: absolute;
            top: 60px;
            right: 10px; }
        .cart-item-list .cart-item-title {
            padding-left: 100px; }
        .cart-item-list .item-include {
            padding-left: 10px; }
    }



</style>