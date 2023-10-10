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
import Vue from 'vue';

export default Vue.extend({
  props: ['filterType', 'todos', 'setFilterType'],
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
