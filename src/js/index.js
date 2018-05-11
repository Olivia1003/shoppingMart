import Vue from 'vue'
import Cart from '../app/cart.vue'
import router from '../router/router.js'

import '../style/global.css'
import '../style/base.css'
import '../style/modal.css'
import '../style/reset.css'


const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
    router:router,
    render:(h)=>h(Cart)
}).$mount(root)

