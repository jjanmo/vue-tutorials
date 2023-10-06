<template>
  <div>
    <div class="stat">
      <div>
        <input
          type="checkbox"
          id="check-all"
          @change="toggleAll(checked)"
          v-model="checked"
        />
        <label for="check-all">Check All</label>
      </div>
      <div>{{ leftItem }} left</div>
    </div>
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
import Vue from 'vue';

export default Vue.extend({
  props: ['filterType', 'todos', 'leftItem'],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    setFilterType(type: string) {
      this.$emit('set-filter-type', type);
    },
    toggleAll(checked: boolean) {
      this.$emit('toggle-all', checked);
    },
  },
});
</script>

<style scoped>
.stat {
  padding: 10px 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-radius: 5px;
}
.stat input {
  margin-right: 10px;
}
button {
  all: unset;
  margin-right: 5px;
}
.active {
  font-weight: 600;
  color: #22a6b3;
}
</style>
