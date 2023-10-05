<template>
  <div class="container">
    <h1 class="text-center">ToDo App</h1>
    <Form :value="value" :onSubmit="handleSubmit" :onChange="handleChange" />
    <List :onDelete="deleteTodo" :onCheck="updateStatus" :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '@/components/todoapp/List.vue';
import Form from '@/components/todoapp/Form.vue';

interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export default Vue.extend({
  components: {
    Form,
    List,
  },
  data() {
    return {
      todos: [] as Todo[],
      value: '',
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) return;

      this.todos.push({
        id: String(this.todos.length + 1),
        content: this.value,
        done: false,
      });
      this.value = '';
    },
    handleChange(e: Event) {
      const value = (e.target as HTMLInputElement).value;
      this.value = value;
    },
    updateStatus(id: string) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo(id: string) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
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
