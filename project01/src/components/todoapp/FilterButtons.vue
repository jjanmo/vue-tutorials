<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['setFilterType'],
  computed: {
    todos() {
      return this.$store.state.todos.data;
    },
    filterType() {
      return this.$store.state.todos.filterType;
    },
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
