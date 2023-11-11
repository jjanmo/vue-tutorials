<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <Logo />
        <span class="text">Vue Hacker News</span>
      </div>
    </router-link>

    <ul class="links">
      <li class="link" v-for="link of links" :key="link.name">
        <router-link :to="link.path">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/icons/Logo.vue';
import { headerLinks } from '@/constants/links';

@Component({
  components: { Logo },
})
export default class extends Vue {
  get links() {
    return headerLinks;
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  padding: 4px;
  background-color: #00c7ae;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  .text {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 700;
  }
}
.links {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.link + .link {
  margin-left: 5px;
}
.link + .link::before {
  content: '|';
  margin: 0 2px;
  font-size: 18px;
}

.active {
  color: #fff;
}
</style>
