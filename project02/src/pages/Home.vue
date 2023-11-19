<template>
  <div>
    <List />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import List from '@/components/List.vue';

@Component({
  components: { List },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss"></style>
