<template>
  <div>
    <form @submit="onsubmit">
      <label for="newtodo">New ToDo</label>
      <input id="newtodo" @input="onchange" :value="value" />
      <button class="text-center">Add ToDo</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Form',
  props: ['value', 'onsubmit', 'onchange'],
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
}
</style>
