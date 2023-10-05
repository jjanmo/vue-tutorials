<template>
  <div>
    <h2>ToDo List</h2>
    <ul>
      <li class="item" v-for="todo of todos" :key="todo.id">
        <input type="checkbox" :id="todo.id" />
        <label :for="todo.id">
          {{ todo.content }}
        </label>
        <button class="remove-button" type="button">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { todos } from '@/constants';

export default Vue.extend({
  data() {
    return {
      todos,
    };
  },
});
</script>

<style scoped>
h2 {
  display: inline-block;
  width: 100%;
  padding-bottom: 10px;
  margin: 10px 0 20px;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid #7b7c7e;
}
.item {
}
</style>
