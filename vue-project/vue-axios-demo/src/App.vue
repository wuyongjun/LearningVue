<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">首 页</router-link>
      </li>
      <li>
        <router-link :to="{name: 'News', params: {new_id: '1'}}">新 闻</router-link>
      </li>
    </ul>
    <div>
      <loading v-show="loadingShow"></loading>
      <!--主要用于保留组件状态或避免重新渲染。-->
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'vue axios demo'
    }
  },
  computed: {
    ...mapGetters([
        'loadingShow'
      ])
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
