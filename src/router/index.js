import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const page = (dir) => {
  return Vue.extend(require('src/pages/' + dir).default)
};

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'user',
  //     component: page('user/index')
  //   }
  // ]
})
