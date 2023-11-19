<template>
  <div>
    <List />
  </div>
</template>

<script lang="ts">
import List from '@/components/List.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { List },
})
export default class Ask extends Vue {}
</script>

<style scoped lang="scss">
.footer {
  margin-top: 25px;
  display: flex;
  justify-content: center;
}
.more-button {
  all: unset;
  padding: 5px 10px;
  color: #636e72;
  cursor: pointer;
  border: 2px solid #636e72;
  border-radius: 20px;
}
</style>
