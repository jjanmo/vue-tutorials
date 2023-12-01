<template>
  <Controller />
  <Board />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from '@/components/memory/Board.vue';
import Controller from '@/components/memory/Controller.vue';

export default defineComponent({
  components: {
    Board,
    Controller,
  },
});
</script>

<style scoped></style>
