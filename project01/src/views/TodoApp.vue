<template>
  <div class="container">
    <h1>ToDo App</h1>
    <Form />
    <List />
    <Stat />
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
});
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}
h1 {
  text-align: center;
}
</style>
