<template>
  <div class="board-container">
    <ul class="board">
      <Card v-for="(champion, index) in champions" :key="index" :champion="champion" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchChampions } from '@/api';
import { Champion } from '@/store/champion.type';
import { select, shuffle } from '@/utils';
import Card from '@/components/memory/Card.vue';

export default defineComponent({
  name: 'Board',
  components: {
    Card,
  },
  data() {
    return {
      champions: [] as Champion[],
    };
  },

  async mounted() {
    const { data } = await fetchChampions();
    const _champions = select(Object.values(data.data), 8);
    this.champions = [..._champions, ...shuffle(_champions)];
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
