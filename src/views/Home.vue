<template>
  <div class="home"></div>
  <baidu></baidu>
</template>

<script>
import baidu from "../components/exercise/bdSearch/baidu.vue";
export default {
  name: "Home",
  components: {
    baidu,
  },
};
</script>
