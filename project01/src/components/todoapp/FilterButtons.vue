<template>
  <div>
    <div>
      <button
        :class="{ active: filterType === 'all' }"
        type="button"
        @click="changeFilter('all')"
      >
        All
      </button>
      <button
        :class="{ active: filterType === 'todo' }"
        type="button"
        @click="changeFilter('todo')"
      >
        Todo
      </button>
      <button
        type="button"
        :class="{ active: filterType === 'done' }"
        @click="changeFilter('done')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FilterType } from '@/store/modules/filter';

export default defineComponent({
  computed: {
    todos() {
      return this.$store.state.todos.data;
    },
    filterType() {
      return this.$store.state.filter.type;
    },
  },
  methods: {
    changeFilter(type: FilterType) {
      this.$store.commit('filter/changeFilter', type);
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
