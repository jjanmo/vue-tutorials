<template>
  <div>
    <Header></Header>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';

export default Vue.extend({
  components: {
    Header,
  },
});
</script>

<style scoped>
.content {
  width: 840px;
  height: 100%;
  padding: 3rem 1rem;
  margin: auto;
}
</style>
