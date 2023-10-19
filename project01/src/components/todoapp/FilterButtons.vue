<template>
  <div>
    <button
      :class="{ active: filterType === 'all' }"
      type="button"
      @click="setFilterType('all')"
    >
      All
    </button>
    <button
      :class="{ active: filterType === 'todo' }"
      type="button"
      @click="setFilterType('todo')"
    >
      Todo
    </button>
    <button
      type="button"
      :class="{ active: filterType === 'done' }"
      @click="setFilterType('done')"
    >
      Done
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['filterType', 'setFilterType'],
  computed: {
    // todos() {
    //   return this.$store.state.todos;
    // },
  },
});
</script>

<style scoped>
button {
  all: unset;
  margin-right: 5px;
}
.active {
  font-weight: 600;
  color: #22a6b3;
}
</style>
