<template>
    <div id="cart-container">
        <cart-header></cart-header>

        <div class="item-list-wrap">
            <div class="cart-item-head">
                <ul>
                    <li>商品信息</li>
                    <li>商品金额</li>
                    <li>商品数量 total:{{totalQuantity}}</li>
                    <li>总金额</li>
                    <li>编辑</li>
                </ul>
            </div>
            <ul class="cart-item-list">
                <cart-item v-for="product in productList" :key="product.productId"
                        :item="product" @selectPro="selectProduct" @del="delReq"></cart-item>

            </ul>
        </div>

        <cart-footer :total="totalCartMoney" :allCheck="allChecked" @checkAll="checkAllPro"></cart-footer>

        <div class="md-modal modal-msg md-modal-transition" id="showModal" :class="[curDelId==''?'':'md-show']">
            <div class="md-modal-inner">
                <div class="md-top">
                    <button class="md-close" @click="curDelId=''">关闭</button>
                </div>
                <div class="md-content">
                    <div class="confirm-tips">
                        <p id="cusLanInfo">你确认删除此订单信息吗?</p>
                    </div>
                    <div class="btn-wrap col-2">
                        <button class="btn btn--m" id="btnModalConfirm" @click="delConfirm">Yes</button>
                        <button class="btn btn--m btn--red" id="btnModalCancel" @click="curDelId=''">No</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="md-overlay" v-if="!curDelId==''"></div>

    </div>

</template>

<script>
    import cartHeader from './cartHeader.vue'
    import cartItem from './cartItem.vue'
    import cartFooter from './cartFooter.vue'

    export default {
        props: [],
        data(){
            return {
                productList:[
                    {
                        "productId":"600100002115",
                        "productName":"黄鹤楼香烟",
                        "productPrice":19.1234,
                        "productQuantity":1,
                        "productImage":"src/images/goods-1.jpg",
                        "parts":[
                            {
                                "partsId":"10001",
                                "partsName":"打火机",
                                "imgSrc":"img/part-1.jpg"
                            },
                            {
                                "partsId":"10002",
                                "partsName":"打火机2",
                                "imgSrc":"img/part-1.jpg"
                            }
                        ]
                    },
                    {
                        "productId":"600100002120",
                        "productName":"加多宝",
                        "productPrice":8,
                        "productQuantity":5,
                        "productImage":"src/images/goods-2.jpg",
                        "parts":[
                            {
                                "partsId":"20001",
                                "partsName":"吸管",
                                "imgSrc":"img/part-2.jpg"
                            }
                        ]
                    },
                    {
                        "productId":"600100002117",
                        "productName":"金装黄鹤楼",
                        "productPrice":25,
                        "productQuantity":2,
                        "productImage":"src/images/goods-1.jpg",
                        "parts":[
                            {
                                "partsId":"10001",
                                "partsName":"打火机-1",
                                "imgSrc":"img/part-1.jpg"
                            },
                            {
                                "partsId":"10002",
                                "partsName":"打火机-2",
                                "imgSrc":"img/part-1.jpg"
                            }
                        ]
                    }
                ],
                allChecked:false,
                curDelId:''
            }
        },
        computed:{
            totalQuantity:function () {
                var sum=0;
                this.productList.forEach(function (product,index) {
                    sum+=product.productQuantity;
                });
                return sum;
            },
            totalCartMoney:function () {
                var sum=0;
                this.productList.forEach(function (product,index) {
                    if(product.checked){
                        sum+=product.productQuantity*product.productPrice;
                    }
                });
                return sum;
            }
        },
        mounted:function () {
          console.log("at cart.vue,allChecked:"+this.allChecked);
        },
        components:{
            cartHeader,
            cartItem,
            cartFooter
        },
        methods:{
            selectProduct:function (product) {
                if(typeof product.checked=="undefined"){
                    this.$set(product,"checked",true);
                }else{
                    product.checked=!product.checked;
                }
            },
            checkAllPro:function () {
                var _this=this;
                this.allChecked=!this.allChecked;
                this.productList.forEach(function (product) {
                    if(typeof product.checked=="undefined"){
                        _this.$set(product,"checked",_this.allChecked);
                    }else{
                        product.checked=_this.allChecked;
                    }
                })
            },
            delReq:function (id) {
                this.curDelId=id;
            },
            delConfirm:function () {
                var _this=this;
                this.productList.forEach(function (product,index) {
                    if(product.productId===_this.curDelId){
                        _this.productList.splice(index,1);
                    }
                })
                this.curDelId='';
            }
        }
    }
</script>

<style>
    #cart-container{
        width: 100%;
        margin: 0;
        padding: 30px 0;
    }

    @media only screen and (max-width: 991px) {
        .item-list-wrap {
            display: block;
            background: #f0f0f0;
        }
        .cart-item-head {
            display: none;
        }
        .cart-item-list {
            display: block;
        }
    }

    .item-list-wrap{
        width: 100%;
        display: table;
    }
    .cart-item-head {
        display: table-header-group;
        width: 100%;
    }
    .cart-item-head ul {
        display: table-row;
        width: 100%;
    }
    .cart-item-head li {
        display: table-cell;
        height: 54px;
        line-height: 54px;
        background: #605F5F;
        color: #fff;
        font-size: 18px;
        text-align: center;
    }
    .cart-item-head li:nth-child(2), .cart-item-head li:nth-child(3), .cart-item-head li:nth-child(4), .cart-item-head li:nth-child(5) {
        width: 12%;
        padding: 0 10px;
    }

    .cart-item-list {
        display: table-row-group;
    }
</style>