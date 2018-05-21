import * as Types from '../mutation-types'

const state = {
  nba: [1, 2, 3, 4, 5],
  app: 0,
}

const getters = {
  doneTodos: state => {
    return state.login;
  }
}


const actions = {
  doneTodos: state => {
    console.log('actions');
  }
}

// mutations
const mutations = {
  [Types.ADD_NUM_INFO](state, {
    id
  }) {
    console.log(2);
  },
  increment(state) {
    // 变更状态
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
