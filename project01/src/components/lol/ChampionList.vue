<template>
  <div>
    <ul>
      <li v-for="champion of champions" :key="champion.id">
        <img :src="baseUrl + champion.image.full" alt="champion" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      champions: this.$store.state.champions.data,
      ids: this.$store.state.champions.ids,
      baseUrl: 'https://ddragon.leagueoflegends.com/cdn/13.21.1/img/champion/',
    };
  },
  mounted() {
    this.$store.dispatch('champions/fetchChampions');
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
