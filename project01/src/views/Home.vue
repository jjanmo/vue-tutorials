<template>
  <div>
    <div>{{ count }}</div>
    <div>
      <button @click="handleClickPlus">add</button>
      <button @click="handleClickMinus">minus</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClickPlus() {
      this.count++;
    },
    handleClickMinus() {
      this.count--;
    },
  },
});
</script>
