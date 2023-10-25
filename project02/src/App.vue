<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "Hello World 😃",
    };
  },
});
</script>

<style scoped lang="scss">
h1 {
  color: dodgerblue;
}
</style>
