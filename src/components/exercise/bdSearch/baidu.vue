<template>
  <div>
    <input type="text" v-model="keyword" @keyup="getData" />
    <br />
    <hr />
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>

    <button @click="success">cheng</button>
  </div>
</template>

<script>
// import baiduMixin from '../../../mixin/exercise/baiduMixin'
export default {
  // mixins:[baiduMixin],
  data(){
    return{
      msg:"znq"
    }
  }
};
</script>

<style lang="scss" scoped></style>
