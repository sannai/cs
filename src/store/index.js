import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Mutations from './mutations'

import shopping from './shopping/shopping' //商品数据导入
Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
  modules: {
    shopping
  }
})
