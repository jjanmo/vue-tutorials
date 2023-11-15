<template>
  <ul class="list" v-if="listType">
    <li class="item" v-for="(item, index) of list[listType]" :key="item.id">
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
import { listModule } from '@/store';
import { ListType } from '@/interface/list';

@Component
export default class extends Vue {
  get list() {
    return {
      news: listModule.news,
      newest: listModule.newest,
      ask: listModule.ask,
      jobs: listModule.jobs,
    };
  }
  get listType() {
    return listModule.listType;
  }

  created() {
    const _listType = this.$route.path.slice(1);
    const arg = _listType ? (_listType === 'new' ? 'newest' : _listType) : 'news';
    listModule.setListType(arg as ListType);
    listModule.fetchList();
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
