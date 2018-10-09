<template>
  <div id="app" class="container">
    <app-header></app-header>
    <!--在此使用路由，这里犯了个错误，将<user/>模板直接放在了<router-view>标签中了，
      导致属性传值失效，估计事件传值也会失效，router标签下应该不应直接放置模板代码
      -->
    <!-- <keep-alive><router-view></router-view></keep-alive> -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
    
    <br>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
import appHeader from './components/Header'
import appFooter from './components/Footer'
import home from './components/Home'

export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
    home
  },
  beforeCreate () {
    // alert('beforeCreate: vue实例还没有创建，进行了写数据和属性的配置，此处可以进行写加载相关的业务');
  },
  created () {
    // alert('created: vue实例已经创建了，此处可以进行一些数据请求的操作');
    // fetch('/api/test/testToken.php', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'Application/json',
    //     'token': 'f4c902c9ae5a2a9d8f84868ad064e706'
    //   },
    //   body: JSON.stringify({username: 'herry', password: 666666})
    // }).then(response => response.json())
    //   .then(json => console.log(json));
    this.$axios.post('/api/test/testToken.php', {username: 'herry', password: 666666}, {
      headers: {
        'Content-type': 'Application/json',
        'token': 'f4c902c9ae5a2a9d8f84868ad064e706'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  beforeMount () {
    // alert('beforeMount: 虚拟DOM应该已经建立，但还没有向页面挂载真正的DOM');
  },
  mounted () {
    // alert('mounted: DOM挂载完成了，绑定数据');
  },
  beforeUpdate () {
    // alert('beforeUpdate: DOM更新前调用');
  },
  updated () {
    // alert('updated: DOM更新后调用');
  },
  beforeDestroy () {
    // alert('vue实例销毁前');
  },
  destroyed () {
    // alert('vue实例销毁了');
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

</style>
