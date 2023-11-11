<template>
  <div>
    <h1>User Page</h1>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
  get name() {
    return this.$route.params.name;
  }
}
</script>

<style scoped></style>
