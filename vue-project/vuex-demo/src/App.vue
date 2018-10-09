<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <button @click="increment">增 加</button>
    <button @click="decrement">减 少</button>
    <button @click="oddIncrement">偶数时增加</button>
    <button @click="asyncIncrement">async加</button>
    <button @click="multiplication({ mul: mul })">乘{{mul}}</button>
    <br>
    <h3>当前数字：<span v-text="count"></span>，它是<span v-text="getOdd"></span></h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'welcome vuex demo',
      mul: 2
    }
  },
  computed: mapGetters([
      'count',
      'getOdd'
    ]),
  methods: mapActions([
      'increment',
      'decrement',
      'oddIncrement',
      'asyncIncrement',
      'multiplication'
    ])
}
</script>

<style lang="scss">
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
