<template>
  <Board />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from '@/components/memory/Board.vue';

export default defineComponent({
  components: {
    Board,
  },
});
</script>

<style scoped></style>
