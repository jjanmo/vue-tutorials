<template>
  <div>
    <ChampionList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChampionList from '@/components/lol/ChampionList.vue';

export default defineComponent({
  name: 'LOLMatching',
  components: {
    ChampionList,
  },
});
</script>

<style scoped></style>
