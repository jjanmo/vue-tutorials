<template>
  <div>
    <List />

    <div class="footer">
      <button class="more-button">more</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';

@Component({
  components: { List },
})
export default class New extends Vue {}
</script>

<style scoped></style>
