<template>
  <div>
    <form @submit.prevent="handleSubmit" autocomplete="off">
      <label for="newtodo">New ToDo</label>
      <input id="newtodo" @input="handleChange" :value="value" />
      <button>Add ToDo</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { v4 } from 'uuid';

export default defineComponent({
  name: 'Form',
  data() {
    return {
      value: '',
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) return;
      const newTodo = {
        id: v4(),
        content: this.value,
        done: false,
      };
      this.$store.commit('todos/addTodo', { todo: newTodo });
      this.value = '';
    },
    handleChange(e: Event) {
      this.value = (e.target as HTMLInputElement).value;
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
label {
  margin-bottom: 10px;
}
input {
  padding: 10px;
  outline: none;
  border: 2px solid #7b7c7e;
  border-radius: 5px;
}
button {
  all: unset;
  padding: 10px 0;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #c7ecee;
  font-weight: 600;
  font-size: large;
  text-align: center;
  cursor: pointer;
}
</style>
