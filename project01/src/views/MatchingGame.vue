<template>
  <div>
    <DraggableBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DraggableBoard from '@/components/matching/DraggableBoard.vue';

export default defineComponent({
  name: 'Matching',
  components: {
    DraggableBoard,
  },
});
</script>

<style scoped></style>
