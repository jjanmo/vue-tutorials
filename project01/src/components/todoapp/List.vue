<template>
  <div>
    <div class="title">
      <h2>ToDo List</h2>
      <FilterButtons />
    </div>
    <div v-if="todos.length === 0">Empty list</div>
    <ul v-else>
      <li class="item" v-for="todo of todos" :key="todo.id">
        <div class="content">
          <input
            type="checkbox"
            :id="todo.id"
            :checked="todo.done"
            @change="handleStatusChange(todo.id)"
          />
          <label :for="todo.id" :class="{ active: todo.done }">
            {{ todo.content }}
          </label>
        </div>
        <button
          class="remove-button"
          type="button"
          @click="handleDeleteButtonClick(todo.id)"
        >
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import FilterButtons from '@/components/todoapp/FilterButtons.vue';

export default defineComponent({
  components: {
    FilterButtons,
  },
  computed: {
    ...mapGetters('todos', {
      todos: 'filteredTodos',
    }),
  },
  methods: {
    handleDeleteButtonClick(id: string) {
      this.$store.commit('todos/deleteTodo', id);
    },
    handleStatusChange(id: string) {
      this.$store.commit('todos/toggleStatus', id);
    },
  },
});
</script>

<style scoped>
.title {
  padding-bottom: 10px;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #7b7c7e;
}
.title h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}
ul {
  margin: 30px 0;
}
.item {
  width: 95%;
  padding: 0 15px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #7b7c7e;
  border-radius: 5px;
  user-select: none;
}
.item + .item {
  margin-top: 15px;
}
.item input {
  margin-right: 10px;
}
.item button {
  all: unset;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  background-color: #c7ecee;
  border-radius: 5px;
  cursor: pointer;
}
.content {
  flex: 1;
  display: flex;
}
.content label {
  flex: 1;
  display: flex;
  padding: 10px 0;
}
.active {
  text-decoration: line-through;
}
</style>
