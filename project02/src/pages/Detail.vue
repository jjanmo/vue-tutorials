<template>
  <div>Item Vue</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getDetailedItem } from '@/api';
import { DetailedItem } from '@/interface/list';

@Component
/** Ask의 상세 페이지 */
export default class Detail extends Vue {
  detailedItem: DetailedItem | null = null;

  async mounted() {
    const { id } = this.$route.query;
    const { data } = await getDetailedItem(id as string);
    this.detailedItem = data;
  }
}
</script>

<style lang="scss" scoped></style>
