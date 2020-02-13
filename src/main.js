import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
// Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

// 定义组件
import calorie from './views/food/calorie.vue';
import gpsTransform from './views/tools/gpsTransform';
import systemInfo from './views/components/info';
import systemColor from './views/tools/color';

// 创建一个路由器实例,并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/food/calorie',
      component: calorie
    },
    {
      path: '/tools/gpsTransform',
      component: gpsTransform
    },
    {
      path: '/system/info',
      component: systemInfo
    },
    {
      path: '/tools/color',
      component: systemColor
    }
  ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
