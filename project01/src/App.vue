<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Layout,
  },
});
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
