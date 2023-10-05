<template>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav class="px-4" fill>
      <b-nav-item
        v-for="(link, index) in links"
        v-bind:key="index"
        :to="{ path: link.path }"
      >
        {{ link.text }}
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
export default {
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
          text: '가위 바위 보',
          path: '/rps-game',
        },
        {
          text: '로또 추첨',
          path: '/lotto',
        },
        {
          text: '틱택톡',
          path: '/tictactoe',
        },
        {
          text: '지뢰찾기',
          path: '/minesweeper',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
