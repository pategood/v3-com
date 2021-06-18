<template>
  <div class="model-bg" v-show="visible"> 
    <div class="modal-content">
      <button class="close" @click="close"></button>
      <div class="model-title">{{title}}</div>
      <div class="model-body">
        <slot>
          对话框
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:["title","visible"],
    methods:{
      close(){
        this.$emit('close-model')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-bg{
    background: #000;
    opacity: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
  }

  .modal-content{
    width: 600px;
    min-height: 300px;
    border: 1px solid #eee;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
  }
</style>