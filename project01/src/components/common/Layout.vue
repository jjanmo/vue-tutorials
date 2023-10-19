<template>
  <div>
    <Header></Header>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Header from './Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.content {
  max-width: 840px;
  height: 100%;
  padding: 3rem 1rem;
  margin: auto;
}
</style>
