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

export default defineComponent({
  name: 'Form',
  props: ['value'],
  methods: {
    handleSubmit() {
      this.$emit('handle-submit');
    },
    handleChange(e: Event) {
      const value = (e.target as HTMLInputElement).value;
      this.$emit('handle-change', value);
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
