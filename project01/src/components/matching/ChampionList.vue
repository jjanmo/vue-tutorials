<template>
  <!-- <div v-if="Object.values(champions).length === 0">Loading...</div>
  <div v-else class="board">
    <draggable class="row" :list="selectedChampions" itemKey="id">
      <template #item="{ element }">
        <div class="droppable">{{ element.name }}</div>
      </template>
    </draggable>

    <draggable class="row" :list="shuffle(selectedChampions)" itemKey="id">
      <template #item="{ element }">
        <div>
          <img :src="element.image" alt="champion" />
        </div>
      </template>
    </draggable>
  </div> -->
  <div class="board">
    <div id="drop-target" @dragover.prevent @drop="handleDrop">Aatrox</div>
    <div id="draggable-element" draggable="true" @dragstart="handleDragStart">
      <img id="Aatrox" src="https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/Aatrox.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Champion, SelectedChampion } from '@/store/champion.type';
import { fetchChampions } from '@/api';

const TOTAL = 10;
const IMAGE_BASE_URL = `https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/`;

export default defineComponent({
  components: {},
  data() {
    return {
      champions: {},
    };
  },
  async mounted() {
    const { data } = await fetchChampions();
    this.champions = data;
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
  },

  computed: {
    selectedChampions() {
      const championsArr: Champion[] = Object.values(this.champions);
      if (championsArr.length > 0) {
        const result: SelectedChampion[] = [];

        while (result.length < TOTAL) {
          const index = Math.floor(Math.random() * championsArr.length);
          const selected = championsArr[index];

          const finded = result.find((champion) => champion.id === selected.id);

          if (!finded)
            result.push({
              id: selected.id,
              image: `${IMAGE_BASE_URL}${selected.image.full}`,
              name: selected.name,
            });
        }
        return result;
      }

      return [];
    },
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
