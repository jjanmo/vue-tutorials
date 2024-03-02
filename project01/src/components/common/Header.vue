<template>
  <div class="header">
    <ul class="container">
      <li class="item" v-for="(link, index) in links" v-bind:key="index">
        <router-link :to="{ path: link.path }">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      links: [
        {
          text: '홈',
          path: '/',
        },
        {
          text: '투두앱',
          path: '/todoapp',
        },
        {
          text: '매칭 게임',
          path: '/matching',
        },
        {
          text: '메모리 게임',
          path: '/memory',
        },
        {
          text: '갤러리',
          path: '/gallery',
        },
      ],
    };
  },
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: #34495e;
  color: white;
}
.container {
  height: 100%;
  display: flex;
  align-items: center;
}
.item {
  margin: 0 12px;
}
.active {
  border-bottom: 2px solid white;
}
.item a {
  padding: 0 6px 3px;
}
</style>
