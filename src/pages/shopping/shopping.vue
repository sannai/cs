<template>
	<div class="shopping">
    <!-- <h2>购物车vuex案例</h2>
		<div style="display:flex">
			<div>选择</div>
			<div class="p">衣服</div>
			<div class="p">数量</div>
			<div class="p">价格</div>
			<div class="p">输入数量</div>
			<div class="p">删除</div>
		</div>
		<div style="width:10px"><input type="checkbox" :checked="this.shopping.all" @change="selection($event)"></div>
		<div class="content" v-for="(item, index) in this.shopping.commodity" :key="item.id">
			<input type="checkbox" v-model="item.type" @change="multiSelect($event, index)">
			<p class="p">{{item.shop}}</p>
			<p class="p">{{item.num}}</p>
			<p class="p">{{item.price}}</p>
			<div class="input">
				<div @click="reduces(item.num, index)">-</div>
				<input type="text" v-model="item.num">
				<div @click="add(item.num, index)">+</div>
			</div>
			<p class="p" @click="deletes(index)">删除</p>
		</div>
		<div>
			<div class="total">总数量:{{quantity}}</div>
			<div class="total">总金额:{{price}}</div>
		</div>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <h2>电影后台接口数据获取</h2> -->
    <Liding v-show="this.shopping.showLoadings"></Liding>
    <div v-for="item in this.shopping.film" :key='item.id'>
      <div>{{item.name}}111</div>
      <!-- <img :src='item.imageUrl' alt=""> -->
    </div>
    <div v-for="item in this.shopping.comment" :key='item.id'>
      <div>{{item.name}}222</div>
      <!-- <img :src='item.imageUrl' alt=""> -->
    </div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import axios from "axios";
import Liding from "../../components/Loading/index.vue";
export default {
  data() {
    return {};
  },
  //计算属性
  computed: {
    //这是shopping state状态
    ...mapState(["shopping"]),
    //这是shopping getters派生其他数据
    ...mapGetters([
      "quantity", //总数量
      "price", //总金额
      "add", //数量添加
      "reduces", //数量减少
      "selection", //全选/全不选
      "multiSelect" //多选
    ])
  },
  //方法
  methods: {
    //唯一用来修改数据的工具
    ...mapMutations(["deletes"]),
    //异步操作
    ...mapActions(["showLoader", "hideloader", "filmComment"])
  },
  created() {
    this.showLoader(); //加载中
    this.hideloader(); //加载完成
    this.filmComment();
  },
  components: {
    Liding
  }
};
</script>
<style scoped>
.shopping {
  margin: 0 auto;
  width: 1100px;
  height: 600px;
  background: darkgray;
}
.content {
  display: flex;
}
.p {
  width: 200px;
}
.input {
  display: flex;
}
.input div {
  font-size: 40px;
}
</style>

