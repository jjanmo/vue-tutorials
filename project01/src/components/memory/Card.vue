<template>
  <li class="scene">
    <div class="card" @click="handleCardClick">
      <div class="face front" data-face="front" :style="backgroundImageStyle"></div>
      <div class="face back" data-face="back"></div>
    </div>
  </li>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { championImageBaseUrl } from '@/constants/champion';
import { Champion } from '@/store/champion.type';

export default defineComponent({
  props: {
    champion: {
      type: Object as PropType<Champion>,
      required: true,
    },
  },
  computed: {
    backgroundImageStyle() {
      return `background-image: url(${championImageBaseUrl}${this.champion.image.full})`;
    },
  },
  methods: {
    handleCardClick(e: Event) {
      const face = (e.target as HTMLDivElement).dataset.face;
      if (face === 'back') {
        const card = e.currentTarget as HTMLDivElement;
        card.classList.add('is-flipped');

        setTimeout(() => {
          card.classList.remove('is-flipped');
        }, 700);
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
