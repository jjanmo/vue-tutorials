<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {
  message = 'Hello World';
}
</script>

<style>
h1 {
  color: dodgerblue;
}
</style>
