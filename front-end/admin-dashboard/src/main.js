// import { createApp } from 'vue'
// import App from './App.vue'
// import './registerServiceWorker'
// import router from './router'
// import store from './store'
// import './style/index.css'
// import './style/style.css'
// import { vfmPlugin } from 'vue-final-modal'



// createApp(App).use(store).use(router).use(vfmPlugin).mount('#app')

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


createApp(App).use(store).use(router).mount("#app");

