<template>

  

  <ul>
    <li v-for="champion in champions" :key="champion.id">
      <img :src="`${CHAMPION_IMAGE_BASE_URL}${champion.id}.png`" :alt="`${champion.name}`" />
    </li>
  </ul>

  <!-- <div class="board">
    <div id="drop-target" @dragover.prevent @drop="handleDrop">Aatrox</div>
    <div id="draggable-element" draggable="true" @dragstart="handleDragStart">
      <img id="Aatrox" src="https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/Aatrox.png" />
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Champion } from '@/store/modules/common';
import { shuffleAndSelect } from '@/utils';
import { CHAMPION_IMAGE_BASE_URL } from '@/constants/champion';

export default defineComponent({
  name: 'DraggableBoard',
  components: {},

  data() {
    return {
      champions: null as Champion[] | null,
      CHAMPION_IMAGE_BASE_URL,
    };
  },

  computed: {
    allChampions() {
      return this.$store.state.common.champions;
    },
  },

  methods: {
    handleDragStart(event: DragEvent) {
      const id = (event.target as HTMLImageElement).id;

      // 드래그 시작 시 데이터 전달
      event.dataTransfer?.setData('text/plain', id);
      // event.dataTransfer?.setDragImage(event.target as HTMLImageElement, 100, 100);
    },
    handleDrop(event: DragEvent) {
      event.preventDefault();
      const target = event.target as HTMLDivElement;
      const targetId = target.textContent;
      const sourceId = event.dataTransfer?.getData('text') as string;
      console.log({ targetId, sourceId });

      if (targetId === sourceId) {
        console.log('aaa');
        target.innerHTML = '';
        target.appendChild(document.getElementById(sourceId) as HTMLImageElement);
      }

      // const data = event.dataTransfer?.getData('text/plain');
      // console.log('data', data);
      // if (data === '이미지 데이터') {
      //   // 드롭한 위치에 이미지 삽입 또는 처리
      //   const dropTarget = document.getElementById('drop-target');
      //   const image = document.createElement('img');
      //   image.src = '이미지 URL';
      //   dropTarget?.appendChild(image);
      // }
    },

    selectChampion(championObj: Record<string, Champion>) {
      const champions = Object.values(championObj);
      const selected = shuffleAndSelect(champions, 16);
      this.$data.champions = selected;
    },
  },

  async mounted() {
    await this.$store.dispatch('common/getChampions');
    if (this.allChampions) this.selectChampion(this.allChampions);
  },
});
</script>

<style scoped>
.board {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

#drop-target {
  width: 120px;
  height: 120px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  display: grid;
  grid-template-columns: repeat(2, 120px);
  grid-template-rows: repeat(5, 120px);
  gap: 10px;
}
.droppable {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
}
</style>
