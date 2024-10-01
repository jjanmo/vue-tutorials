<template>
  <div>
    <Layout>
      <router-view></router-view>
    </Layout>
    <Modal v-if="showModal" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '@/components/common/Layout.vue';
import Modal from './components/common/Modal.vue';

export default defineComponent({
  name: 'App',
  components: {
    Layout,
    Modal,
  },

  computed: {
    showModal() {
      return this.$store.state.modal.showModal;
    },
  },
});
</script>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
