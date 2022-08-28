<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="Test" type="primary">Primary</el-button>
  </div>
</template>
<script>
export default {
  name:'AboutView',
  components: {
    
  },
  //测试
  methods:{
    Test(){
      this.axios.get('api/test/testone?userId=2').then((response)=>{
        this.newsList=response.data.data;
      }).catch((response)=>{
        console.log(response);
      })

    }
  }
  



}
</script>
