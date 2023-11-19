<template>
  <div>
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';

@Component({
  components: { List },
})
export default class Jobs extends Vue {}
</script>

<style scoped lang="scss"></style>
