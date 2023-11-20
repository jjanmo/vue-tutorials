<template>
  <div>
    <ul class="list" v-if="list.length">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="point" v-show="!isJobsItem">{{ item.points }}</div>
        <div class="content" :class="{ job: isJobsItem }">
          <a class="main" :href="item.url" target="_blank">{{ item.title }}</a>
          <div class="sub">
            <span v-show="!isJobsItem">
              by <router-link class="user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </span>
            {{ item.time_ago }} hours ago
            <span v-show="!isJobsItem"> | {{ `${item.comments_count} comments` }} </span>
          </div>
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
export default class List extends mixins(ListMixin) {
  get isJobsItem() {
    return this.$route.path.includes('jobs');
  }
}
</script>

<style lang="scss" scoped>
.list {
  background-color: white;
  margin: 20px 0;
}
.item {
  display: flex;
  padding: 24px 0;
  font-size: 18px;
  & + & {
    border-top: 1px solid #f2f3f6;
  }
  .point {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-size: 20px;
    font-weight: 600;
    color: #00c7ae;
  }
  .content {
    &.job {
      padding: 0 50px;
    }
    .main {
      display: inline-block;
      margin-bottom: 5px;
    }
    .sub {
      font-size: 16px;
      color: #828282;
    }
    .user {
      text-decoration: underline;
    }
  }
}
</style>
