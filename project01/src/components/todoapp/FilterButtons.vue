<template>
  <div>
    <div>
      <button
        :class="{ active: filterType === 'all' }"
        type="button"
        @click="changeFilterType('all')"
      >
        All
      </button>
      <button
        :class="{ active: filterType === 'todo' }"
        type="button"
        @click="changeFilterType('todo')"
      >
        Todo
      </button>
      <button
        type="button"
        :class="{ active: filterType === 'done' }"
        @click="changeFilterType('done')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations, mapState } from 'vuex';
import { FilterType } from '@/store/modules/filter';

export default defineComponent({
  computed: {
    ...mapState('filter', {
      filterType: 'type',
    }),
  },
  methods: {
    ...mapMutations('filter', ['changeFilter']),
    changeFilterType(type: FilterType) {
      this.changeFilter(type);
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
