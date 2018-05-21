import * as Types from '../mutation-types'
import fetchFilm from '../../api/film'
//数据存放
const state = {
  commodity: [{
      id: 1,
      type: false,
      shop: '卡门KM男装2018',
      price: 152,
      num: 10,
    },
    {
      id: 2,
      type: true,
      shop: '青少年',
      price: 352,
      num: 5,
    },
    {
      id: 3,
      type: false,
      shop: '潮牌休',
      price: 512,
      num: 40,
    },
    {
      id: 4,
      type: false,
      shop: '2018',
      price: 152,
      num: 0,
    },
    {
      id: 5,
      type: false,
      shop: '青少年',
      price: 52,
      num: 5,
    },
    {
      id: 6,
      type: false,
      shop: '休',
      price: 82,
      num: 1,
    }
  ],
  all: false,
  film: []
}
//在state基础上获取新数据，类似计算属性computed
const getters = {
  //总数量
  quantity(state) {
    return state.commodity.reduce((x, y) => y.type ? x + +y.num : x, 0) //总数量
  },
  //总金额
  price(state) {
    return state.commodity.reduce((x, y) => y.type ? x + +y.price * +y.num : x, 0) //总价格
  },
  //数量添加
  add: (state, getters) => (id, index) => {
    return state.commodity.map((t, i) => {
      if (index === i) {
        t.num += +1
      } else {
        return t
      }
    })
  },
  //数量减少
  reduces: (state, getters) => (id, index) => {
    return state.commodity.map((t, i) => {
      if (index === i) {
        if (t.num !== 0) {
          t.num -= +1
        } else {
          return
        }
      } else {
        return t
      }
    })
  },
  //全选/全不选
  selection: (state, getters) => (event) => {
    if (event.target.checked) {
        state.commodity.map((t, i) => t.type = true)
        state.all = true
    } else {
        state.commodity.map((t, i) => t.type = false)
        state.all = false
    }
  },
  //多选
  multiSelect: (state, getters) => (event, index) => {
    let data;
    let boolean = true; //控制n+个选中后变全选
    if (event.target.checked) {
      data = state.commodity.map((t, i) => {
        if (index === i) {
          t.type = true;
          return t
        } else {
          return t
        }
      })
    }else {
      data = state.commodity.map((t, i) => {
        if (index === i) {
          t.type = false;
          return t
        } else {
          return t
        }
      })
    }
    data.map((t, i) => {
      if(t.type === false) {
          boolean = false;
          return t
      }
      return t
    })
    state.all = boolean
  }
}

//异步操作
const actions = {
  getFilm: ({commit}) => {
    let data = fetchFilm.getFilm()
    //1常量使用
    //commit(Types.FILM_NUM_INFO, data)
    //2函数使用
    commit('getflist', data)
  }
}

// 修改state中的数据，只能通过mutaions方法
const mutations = {
  //删除商品条数
  deletes(state, index) {
    return state.commodity.splice(index, 1)
  },
  //1电影数据获取两种方法，一种常量
  [Types.FILM_NUM_INFO] (state, data) {
    data.then( (res) => {
      state.film = res.data.data.billboards
    })
  },
  //2另一种函数
  getflist(state, data) {
    data.then((res) => {
      state.film = res.data.data.billboards
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
