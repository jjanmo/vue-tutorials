<template>
  <div class="outer-container">
    <div class="inner-container">
      <button class="more-button">&lt; prev</button>
      <button class="more-button">1/25</button>
      <button class="more-button">more &gt;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MoreButton extends Vue {}
</script>

<style lang="scss" scoped>
.outer-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.inner-container {
  width: 250px;
  display: flex;
  justify-content: space-between;
}
.more-button {
  all: unset;
  font-size: 18px;
  cursor: pointer;
}
</style>
