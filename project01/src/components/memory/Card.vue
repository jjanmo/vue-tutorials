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
import memory from '@/store/modules/memory';
import { Champion } from '@/store/modules/common';
import { TOTAL_CARDS } from '@/constants/memory';

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
    checkTotalCards() {
      const totalCards = memory.state.totalCards;
      if (totalCards.length === TOTAL_CARDS) {
        setTimeout(() => {
          this.$store.commit('modal/openModal');
        }, 500);
      }
    },
    handleCardClick(e: Event) {
      if (!memory.state.isStarted || memory.state.totalCards.length >= TOTAL_CARDS) return;

      const face = (e.target as HTMLDivElement).dataset.face;
      if (face === 'back') {
        const curCard = e.currentTarget as HTMLDivElement;
        const curId = curCard.dataset.id;
        curCard.classList.add('is-flipped');

        this.$store.commit('memory/addFlippedCount');

        const selected = memory.state.card;
        if (selected) {
          const { target, id } = selected;
          if (id === curId) {
            this.$store.commit('memory/addCards', [selected, { target: curCard, id: curId }]);
            this.checkTotalCards();
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
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
