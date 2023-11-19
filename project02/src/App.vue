<template>
  <Layout>
    <transition name="view">
      <router-view></router-view>
    </transition>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';

@Component({
  components: { Layout },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.view-enter-active,
.view-leave-active {
  transition: opacity 0.3s ease-out;
}
.view-enter,
.view-leave-to {
  opacity: 0;
}
</style>
