<template>
  <div>
    <button @click="getData">
      搜索
    </button>
    <br>
    <hr>
    <ul>
      <li v-for="(item,index) in list"  :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
 data(){
   return {
     list:[]
   }
 },
 methods:{
   getData(){
     var api ="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
     this.Axios.get(api).then((response)=>{
       console.log(response)
       this.list=response.data.result;
     }).catch((err)=>{
       console.log(err)
     })
   }
 }
}
</script>

<style lang="scss" scoped>

</style>