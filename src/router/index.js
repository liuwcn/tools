import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import calorie from '../views/food/calorie.vue';
import gpsTransform from '../views/tools/gpsTransform';
import systemInfo from '../views/components/info';
import systemColor from '../views/tools/color';
import menu from '../views/components/menu';

export default new Router({
  mode: 'history',
  base: '/tools/',
  routes: [
    // {
    //   path: '/',
    //   component: menu
    // },
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
