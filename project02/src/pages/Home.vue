<template>
  <div>
    <ul class="news">
      <li class="item" v-for="(item, index) of news" :key="item.id">
        <div class="row main-row">
          <span>{{ index + 1 }}. </span>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </div>
        <div class="row sub-row">
          {{ `${item.points} points by` }}
          <router-link to="#" class="user">{{ item.user }}</router-link>
          {{ item.time_ago }} |
          {{ `${item.comments_count} comments` }}
        </div>
      </li>
    </ul>

    <div class="footer">
      <button class="more-button">more</button>
    </div>
  </div>
</template>

<script lang="ts">
import { getNews } from '@/api';
import { Component, Vue } from 'vue-property-decorator';
import { NewsItem } from '@/interface/news';

@Component
export default class Home extends Vue {
  news: NewsItem[] = [];

  async fetchNews() {
    const response = await getNews();
    this.news = response.data;
  }

  mounted() {
    this.fetchNews();
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
.footer {
  margin-top: 25px;
  display: flex;
  justify-content: center;
}
.more-button {
  all: unset;
  padding: 5px 10px;
  color: #636e72;
  cursor: pointer;
  border: 2px solid #636e72;
  border-radius: 20px;
}
</style>
