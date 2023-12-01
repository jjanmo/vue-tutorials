<template>
  <div class="controller">
    <button class="button" @click="handleClick">{{ buttonText }}</button>
    <div class="stat">
      <div class="moves">
        Moves : <span>{{ moves }}</span>
      </div>
      <div class="time">
        Time : <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import memory from '@/store/modules/memory';

export default defineComponent({
  data() {
    return { moves: 0, time: 0, buttonText: 'Start' };
  },
  methods: {
    handleClick() {
      const isStarted = memory.state.isStarted;
      if (isStarted) {
        this.buttonText = 'Start';
        // 모두 리셋
      } else this.buttonText = 'Restart';

      this.$store.commit('memory/setStarted');
    },
  },
});
</script>

<style scoped>
.controller {
  display: flex;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.moves,
.time {
  text-align: right;
}
</style>
