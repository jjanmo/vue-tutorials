<template>
  <div class="container">
    <h1 class="text-center">ToDo App</h1>
    <Form />
    <List />
    <Stat @toggle-all="toggleAll" :leftItem="getLeftItem()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import List from '@/components/todoapp/List.vue';
import Form from '@/components/todoapp/Form.vue';
import Stat from '@/components/todoapp/Stat.vue';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export default defineComponent({
  components: {
    Form,
    List,
    Stat,
  },
  data() {
    return {
      todos: [] as Todo[],
      value: '',
      filterType: 'all',
    };
  },
  methods: {
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleStatus(id: string) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    toggleAll(checked: boolean) {
      this.todos = this.todos.map((todo) => ({
        ...todo,
        done: checked,
      }));
    },

    setFilterType(type: string) {
      this.filterType = type;
    },
    selectByFilter() {
      if (this.filterType === 'all') return this.todos;
      else {
        return this.todos.filter((todo) =>
          this.filterType === 'done' ? todo.done : !todo.done
        );
      }
    },
    getLeftItem() {
      return this.selectByFilter().filter((todo) => !todo.done).length;
    },
  },
});
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}
</style>
