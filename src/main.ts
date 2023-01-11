import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'normalize.css'

import { 
  Tabbar,
  TabbarItem, 
} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Tabbar);
app.use(TabbarItem);

app.use(router)

app.mount('#app')
