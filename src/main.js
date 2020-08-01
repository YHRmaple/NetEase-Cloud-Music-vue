import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/globle.css'

Vue.config.productionTip = false

// 监听sessionStorage中的subPath
Vue.prototype.resetSetItem = function(key, newVal) {
  if (key === 'subPath') {
    var newStorageEvent = document.createEvent('StorageEvent')
    const storage = {
      setItem: function(k, val) {
        sessionStorage.setItem(k, val)
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null)
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal)
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
