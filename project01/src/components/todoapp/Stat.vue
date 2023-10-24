<template>
  <div class="stat">
    <div>
      <input
        type="checkbox"
        id="check-all"
        @change="handleAllClick(checked)"
        v-model="checked"
      />
      <label for="check-all">Check All</label>
    </div>
    <div>{{ leftTodos }} left</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    ...mapGetters('todos', ['filteredTodos', 'leftTodos']),
  },
  methods: {
    handleAllClick(checked: boolean) {
      this.$store.commit('todos/toggleAll', checked);
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
</style>
