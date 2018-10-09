<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12"><div class="grid-content bg-purple-dark"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <myNav></myNav>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <myTabs @click.native="clickMyTabs"></myTabs>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <mySteps></mySteps>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <myLoading></myLoading>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <myMesBox></myMesBox>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-button @click="getData">请求数据</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import myNav from './components/Nav.vue'
import myTabs from './components/Tabs.vue'
import mySteps from './components/Steps.vue'
import myLoading from './components/Loading.vue'
import myMesBox from './components/MessageBox.vue'


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: []
    }
  },
  components: {
    myNav,
    myTabs,
    mySteps,
    myLoading,
    myMesBox
  },
  methods: {
    clickMyTabs () {
      alert('clickMyTabs');
    },
    getData () {
      // alert('getData')
      let _this = this;
      _this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
          console.log(res);
          _this.tableData = res.data
        })
        .catch(err => {

        })

    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
