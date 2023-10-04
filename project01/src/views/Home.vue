<template>
  <div class="container">
    <h1>내가 공부한 Vue 공부 자료들</h1>
    <div class="button-container">
      <button
        :class="{ active: selected === 'all' }"
        data-type="all"
        @click="handleClick"
      >
        ALL
      </button>
      <button
        :class="{ active: selected === 'v2' }"
        data-type="v2"
        @click="handleClick"
      >
        Version2
      </button>
      <button
        :class="{ active: selected === 'v3' }"
        data-type="v3"
        @click="handleClick"
      >
        Version3
      </button>
    </div>
    <ul v-for="(link, i) of links" :key="i">
      <li>
        <span class="icon" v-if="link.status === 'done'">
          <BIconCheckSquareFill color="#22a6b3" />
        </span>
        <span class="icon" v-else><BIconCheckSquare color="#22a6b3" /></span>

        <a :href="link.url" target="_blank">{{ link.title }}</a>

        <span>{{ link.type === 'video' ? '📺 ' : '📄 ' }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { links } from '@/constants';
import { BIconCheckSquareFill, BIconCheckSquare } from 'bootstrap-vue';

export default Vue.extend({
  name: 'Home',
  components: {
    BIconCheckSquareFill,
    BIconCheckSquare,
  },
  data() {
    return {
      selected: 'all',
      links,
    };
  },
  methods: {
    handleClick(e: Event) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const type = (e.target as HTMLButtonElement).dataset.type!;
      this.selected = type;
      if (type === 'all') this.links = links;
      else if (type === 'v2')
        this.links = links.filter((link) => link.version === 2);
      else this.links = links.filter((link) => link.version === 3);
    },
  },
});
</script>
<style scoped>
.button-container {
  margin: 20px 0;
}
button {
  all: unset;
  width: 100px;
  padding: 5px 0;
  text-align: center;
  border: 1px solid #22a6b3;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
button + button {
  margin-left: 10px;
}
.icon {
  margin-right: 5px;
}
.active {
  background-color: #22a6b3;
  color: white;
  font-weight: 500;
}
</style>
