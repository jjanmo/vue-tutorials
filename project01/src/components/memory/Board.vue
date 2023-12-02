<template>
  <div class="board-container">
    <ul class="board">
      <Card v-for="(champion, index) in champions" :key="index" :champion="champion" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/memory/Card.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Card,
  },

  computed: {
    champions() {
      return this.$store.state.memory.champions;
    },
  },

  mounted() {
    this.$store.dispatch('memory/getChampions');
  },
});
</script>

<style scoped>
.board-container {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dff9fb;
  border-radius: 10px;
}
.board {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-template-rows: repeat(4, 120px);
  gap: 30px;
}
</style>
