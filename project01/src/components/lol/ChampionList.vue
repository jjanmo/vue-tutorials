<template>
  <div>
    <ul>
      <li v-for="champion of champions" :key="champion.key">
        <img :src="baseUrl + champion.image.full" alt="champion" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ChampionsResponse, Champions } from '@/store/champion.type';

interface Data {
  champions: Champions | null;
  ids: string[] | null;
  baseUrl: string;
}

export default defineComponent({
  data() {
    return {
      champions: null,
      ids: null,
      baseUrl: 'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/',
    } as Data;
  },
  mounted() {
    this.fetchChampions();
  },
  methods: {
    async fetchChampions() {
      const response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.21.1/data/ko_KR/champion.json`
      );
      const result: ChampionsResponse = await response.json();
      this.champions = result.data;
      const ids = Object.keys(result.data);
      this.ids = ids;
    },
  },
});
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  gap: 20px;
  justify-content: center;
}
img {
  width: 100px;
  height: 100px;
}
</style>
