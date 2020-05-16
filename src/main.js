import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import { firebaseListener } from './config/firebaseConfig'
import './assets/styles/app.scss'

Vue.config.productionTip = false

firebaseListener(authStatusChange)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})


function authStatusChange(loggedIn, user) {
    if (store) {
        store.commit('AUTH_STATUS_CHANGE');
        if (user) {
            store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList})
		}
	}
}