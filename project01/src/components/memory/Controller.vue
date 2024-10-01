<template>
  <div class="controller">
    <button class="button" @click="handleStartClick">{{ buttonText }}</button>
    <div class="stat">
      <div>
        Moves : <span class="value">{{ moves }}</span> 번
      </div>
      <div>
        Time : <span class="value">{{ time }}</span> 초
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TOTAL_CARDS } from '@/constants/memory';

export default defineComponent({
  data() {
    return { buttonText: '시작하기', timerId: -1 };
  },
  computed: {
    allChampions() {
      return this.$store.state.common.champions;
    },
    time() {
      return this.$store.state.memory.time;
    },
    moves() {
      return Math.floor(this.$store.state.memory.flippedCount / 2);
    },
    isStarted() {
      return this.$store.state.memory.isStarted;
    },
    isEnd() {
      return this.$store.state.memory.totalCards.length === TOTAL_CARDS;
    },
  },

  methods: {
    startTimer() {
      if (this.timerId) clearInterval(this.timerId);

      const id = setInterval(() => {
        this.$store.commit('memory/setTime', this.time + 1);
      }, 1000);
      this.timerId = id;
    },
    handleStartClick() {
      if (!this.isStarted) this.buttonText = '다시 시작하기';

      this.$store.commit('memory/setBoard', { championObj: this.allChampions });
      this.$store.commit('memory/startGame');
      this.startTimer();
    },
  },
  watch: {
    isEnd() {
      if (this.isEnd) clearInterval(this.timerId);
    },
  },
  unmounted() {
    clearInterval(this.timerId);
  },
});
</script>

<style scoped>
.controller {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #eee;
  border-radius: 10px;
}
.button {
  padding: 10px 20px;
}
.stat {
  min-width: 200px;
  display: flex;
  justify-content: space-between;
}

.value {
  font-weight: 600;
}
</style>
