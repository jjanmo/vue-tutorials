<template>
  <div class="layout-container">
    <Header />
    <MoreButton />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import MoreButton from './MoreButton.vue';

@Component({
  components: { Header, MoreButton },
})
export default class Layout extends Vue {}
</script>

<style scoped>
.layout-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f2f3f6;
}
.main {
  max-width: 60%;
  padding: 10px 10px 20px;
  margin: auto;
}
</style>
