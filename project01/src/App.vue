<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '@/components/common/Layout.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout,
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
