<template>
  <div class="container">
    <h1 class="text-center">ToDo App</h1>
    <Form :value="value" :onSubmit="handleSubmit" :onChange="handleChange" />
    <List
      @delete-todo="deleteTodo"
      @toggle-status="toggleStatus"
      :todos="displayedTodos"
    />
    <Controller
      :onFilter="filterTodos"
      :onCheckAll="toggleAll"
      :leftItem="displayedTodos.filter((todo) => !todo.done).length"
      todos="displayedTodos"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import List from '@/components/todoapp/List.vue';
import Form from '@/components/todoapp/Form.vue';
import Controller from '@/components/todoapp/Controller.vue';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
}
export default Vue.extend({
  components: {
    Form,
    List,
    Controller,
  },
  data() {
    return {
      originalTodos: [] as Todo[],
      displayedTodos: [] as Todo[],
      value: '',
    };
  },
  methods: {
    synchonize() {
      this.displayedTodos = this.originalTodos;
    },
    handleSubmit() {
      if (!this.value) return;

      this.originalTodos.push({
        id: String(this.originalTodos.length + 1),
        content: this.value,
        done: false,
      });
      this.synchonize();
      this.value = '';
    },
    handleChange(e: Event) {
      const value = (e.target as HTMLInputElement).value;
      this.value = value;
    },

    deleteTodo(id: string) {
      this.originalTodos = this.originalTodos.filter((todo) => todo.id !== id);
      this.synchonize();
    },
    toggleStatus(id: string) {
      this.originalTodos = this.originalTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      this.synchonize();
    },

    toggleAll(checked: boolean) {
      this.originalTodos = this.originalTodos.map((todo) => ({
        ...todo,
        done: checked,
      }));
      this.synchonize();
    },
    filterTodos(type: string) {
      if (type === 'all') this.synchonize();
      else {
        this.displayedTodos = this.originalTodos.filter((todo) =>
          type === 'done' ? todo.done : !todo.done
        );
      }
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
