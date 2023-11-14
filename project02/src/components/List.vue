<template>
  <ul class="list">
    <li class="item" v-for="(item, index) of list" :key="item.id">
      <div class="row main-row">
        <span>{{ index + 1 }}. </span>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </div>
      <div class="row sub-row">
        {{ `${item.points} points by` }}
        <router-link :to="`/user/${item.user}`" class="user">{{ item.user }}</router-link>
        {{ item.time_ago }} |
        {{ `${item.comments_count} comments` }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Item, ListType, ListState } from '@/interface/list.js';
import { getAsk, getJobs, getNewest, getNews } from '@/api';
import { listModule } from '@/store';

@Component
export default class extends Vue {
  // listType = '';

  get list() {
    console.log(listModule);
    return listModule.news;
  }

  mounted() {
    // const listType = this.$route.path.slice(1) as ListType;
    // this.listType = listType || 'news';
    listModule.fetchList();
    // this.$store.dispatch('list/fetchList');
  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  & + & {
    margin-top: 10px;
  }
}
.main-row {
  color: #2d3436;
  :first-child {
    width: 20px;
  }
}
.sub-row {
  padding-left: 20px;
  margin-top: 5px;
  font-size: 14px;
  color: #828282;

  .user:hover {
    text-decoration: underline;
  }
}
</style>
