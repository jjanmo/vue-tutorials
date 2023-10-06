<template>
  <div>
    <div class="stat">
      <div>
        <input
          type="checkbox"
          id="check-all"
          @change="onCheckAll(checked)"
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
        @click="updateFilterType('all')"
      >
        All
      </button>
      <button
        :class="{ active: filterType === 'todo' }"
        type="button"
        @click="updateFilterType('todo')"
      >
        Todo
      </button>
      <button
        :class="{ active: filterType === 'done' }"
        type="button"
        @click="updateFilterType('done')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['todos', 'onCheckAll', 'onFilter', 'leftItem'],
  data() {
    return {
      filterType: 'all',
      checked: false,
    };
  },
  methods: {
    updateFilterType(type: string) {
      this.filterType = type;
      this.onFilter(type);
    },
  },
  watch: {
    checked() {
      console.log('>>>', this.checked);
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
