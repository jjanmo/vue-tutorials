<template>
  <div>
    <h2>ToDo List</h2>
    <div v-if="todos.length === 0" class="text-center mt-4 fs-5">
      Empty list
    </div>
    <ul v-else>
      <li class="item" v-for="todo of todos" :key="todo.id">
        <div class="content">
          <input type="checkbox" :id="todo.id" @change="onCheck(todo.id)" />
          <label :for="todo.id" :class="{ active: todo.done }">
            {{ todo.content }}
          </label>
        </div>
        <button class="remove-button" type="button" @click="onDelete(todo.id)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['onDelete', 'todos', 'onCheck'],
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
  margin-top: 10px;
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
