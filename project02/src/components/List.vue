<template>
  <div>
    <ul class="list" v-if="list.length">
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
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { ListMixin } from '@/mixins/ListMixin';
import { mixins } from 'vue-class-component';

@Component
export default class List extends mixins(ListMixin) {}
</script>

<style lang="scss" scoped>
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
