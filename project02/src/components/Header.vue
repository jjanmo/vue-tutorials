<template>
  <header class="header">
    <div class="nav-container">
      <div class="nav">
        <div class="logo-container">
          <Logo />
        </div>
        <ul class="links">
          <li class="link" v-for="link of links" :key="link.name">
            <router-link :to="link.path">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="title">Hacker News Built with Vue</div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/icons/Logo.vue';
import { headerLinks } from '@/constants/links';
import MoreButton from './MoreButton.vue';

@Component({
  components: { Logo, MoreButton },
})
export default class Header extends Vue {
  get links() {
    return headerLinks;
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  height: 60px;
  background-color: #00c7ae;
}
.nav-container {
  min-width: 55%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.nav {
  display: flex;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.links {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.link {
  padding: 0 10px;
  text-transform: capitalize;
  font-size: 18px;
  color: #fff;
  & a {
    padding-bottom: 3px;
  }
}
.title {
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}
.active {
  border-bottom: 2px solid #fff;
}
</style>
