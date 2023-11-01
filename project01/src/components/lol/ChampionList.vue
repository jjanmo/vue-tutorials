<template>
  <div>{{ champions }}</div>
  <div>{{ ids }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      champions: this.$store.state.champions.data,
      ids: this.$store.state.champions.ids,
    };
  },
  mounted() {
    this.$store.dispatch('champions/fetchChampions');
  },
});
</script>

<style scoped></style>
