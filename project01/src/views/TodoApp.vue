<template>
  <div class="container">
    <h1 class="text-center">ToDo App</h1>
    <Form :value="value" :onSubmit="handleSubmit" :onChange="handleChange" />
    <List
      @delete-todo="deleteTodo"
      @toggle-status="toggleStatus"
      :todos="selectByFilter()"
    />
    <Controller
      @set-filter-type="setFilterType"
      @toggle-all="toggleAll"
      :filterType="filterType"
      :todos="selectByFilter()"
      :leftItem="getLeftItem()"
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
      todos: [] as Todo[],
      value: '',
      filterType: 'all',
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
