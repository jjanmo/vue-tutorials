<template>
  <div class="board-container">
    <ul class="board">
      <Card v-for="(champion, index) in champions" :key="index" :champion="champion" />
    </ul>
  </div>

  <portal v-if="showModal" to="modal-content">
    <div>
      <h1 class="title">축하합니다.🎉</h1>
      <p class="detail">총 {{ moves }}번의 카드쌍을 뒤집었습니다.</p>
    </div>
    <button class="confirm-button" @click="handleCloseModal">확인</button>
  </portal>
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
    showModal() {
      return this.$store.state.modal.showModal;
    },
    moves() {
      return Math.floor(this.$store.state.memory.flippedCount / 2);
    },
  },
  methods: {
    handleCloseModal() {
      this.$store.commit('modal/closeModal');
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

.title {
  text-align: center;
}
.detail {
  margin-top: 10px;
}
.confirm-button {
  width: 95%;
  margin: 0 auto;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  background-color: #00c7ae;
  color: white;
  cursor: pointer;
}
</style>
