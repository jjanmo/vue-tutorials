<template>
  <div class="container">
    <Header />
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: { Header },
})
export default class Layout extends Vue {}
</script>

<style scoped>
.container {
  width: 85%;
  min-height: calc(100vh - 20px);
  margin: 10px auto;
  background-color: #fff6e9;
}
.main {
  padding: 10px 10px 20px;
}
</style>
