<template>
  <li class="scene">
    <div class="card" @click="handleCardClick" :data-id="champion.id">
      <div class="face front" data-face="front" :style="backgroundImageStyle"></div>
      <div class="face back" data-face="back"></div>
    </div>
  </li>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { CHAMPION_IMAGE_BASE_URL } from '@/constants/champion';
import { Champion } from '@/store/champion.type';
import memory from '@/store/modules/memory';

export default defineComponent({
  name: 'Card',
  props: {
    champion: {
      type: Object as PropType<Champion>,
      required: true,
    },
  },
  computed: {
    backgroundImageStyle() {
      return `background-image: url(${CHAMPION_IMAGE_BASE_URL}${this.champion.image.full})`;
    },
  },
  methods: {
    handleCardClick(e: Event) {
      if (!memory.state.isStarted) return;

      const face = (e.target as HTMLDivElement).dataset.face;
      if (face === 'back') {
        const curCard = e.currentTarget as HTMLDivElement;
        const curId = curCard.dataset.id;
        curCard.classList.add('is-flipped');

        const selected = memory.state.card;
        if (selected) {
          const { target, id } = selected;
          if (id === curId) {
            this.$store.commit('memory/addTotalCards', [selected, { target: curCard, id: curId }]);
          } else {
            setTimeout(() => {
              target.classList.remove('is-flipped');
              curCard.classList.remove('is-flipped');
            }, 700);
          }
          this.$store.commit('memory/resetCard');
          return;
        }

        const payload = {
          target: curCard,
          id: curId,
        };
        this.$store.commit('memory/setCard', payload);

        // 체크로직 필요
        // - 몇개 열렸는지
        // - 2개 열렸을때 체크 후 닫아야함(열린 카드가 뭔지, 어떤 건지 알아야함) or
      }
    },
  },
});
</script>

<style scoped>
.scene {
  perspective: 1000px;
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
  cursor: pointer;
}
.card.is-flipped {
  transform: rotateY(-180deg);
}
.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}
.front {
  transform: rotateY(180deg);
}
.back {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #34495e;
}
.back::before {
  content: '♠︎';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}
</style>
