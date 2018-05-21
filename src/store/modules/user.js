import * as Types from '../mutation-types'

const state = {
  login: true,
  count: 0,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJleHAiOjE1MjU3NTc3MDUsInR5cGUiOiIxIiwiaWF0IjoxNTI1NzUwNTA1LCJyZWFsbmFtZSI6IiIsInVzZXJuYW1lIjoiMTMxNDMwMDI1MjUiLCJ0YWJsZU5hbWUiOiJhZG1pbiJ9.3Ibl0RcEK-QlBHnnyGC9eYfCUrLg6rkg3LbnuS6Rayc'
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
  //两种方法调用类似action
  //方法一
  // [Types.GET_USER_INFO] (state) {
  //   console.log(state.count++);
  // },
  //方法二
  increment (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
