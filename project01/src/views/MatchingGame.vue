<template>
  <div>
    <ChampionList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChampionList from '@/components/matching/ChampionList.vue';

export default defineComponent({
  name: 'Matching',
  components: {
    ChampionList,
  },
});
</script>

<style scoped></style>
