<template>
  <div v-if="!isLoading && detailedItem" class="item-container">
    <div class="title">{{ detailedItem.title }}</div>
    <div class="item-info">
      {{ detailedItem.points }} points by {{ detailedItem.user }} {{ detailedItem.time_ago }} |
      {{ detailedItem.comments_count }} comments
    </div>
    <p class="content" v-html="detailedItem.content"></p>
  </div>
  <Spinner v-else size="100" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getDetailedItem } from '@/api';
import { DetailedItem } from '@/interface/list';
import Spinner from '@/icons/Spinner.vue';

@Component({
  components: { Spinner },
})
export default class Detail extends Vue {
  detailedItem: DetailedItem | null = null;
  isLoading = false;

  async mounted() {
    try {
      this.isLoading = true;
      const { id } = this.$route.query;
      const { data } = await getDetailedItem(id as string);
      this.detailedItem = data;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.item-container {
  padding: 20px 15px;
  margin: 20px 0;
  background-color: white;
}
.title {
  font-size: 18px;
  color: #2c3e50;
}
.item-info {
  margin-top: 5px;
  font-size: 14px;
  color: #95a5a6;
}
.content {
  margin-top: 20px;
  line-height: 1.4rem;
}
</style>
