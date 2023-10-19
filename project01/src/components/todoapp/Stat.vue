<template>
  <div class="stat">
    <div>
      <input
        type="checkbox"
        id="check-all"
        @change="toggleAll(checked)"
        v-model="checked"
      />
      <label for="check-all">Check All</label>
    </div>
    <div>{{ leftItem }} left</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['leftItem'],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleAll(checked: boolean) {
      this.$emit('toggle-all', checked);
    },
  },
});
</script>

<style scoped>
.stat {
  padding: 10px 15px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-radius: 5px;
}
.stat input {
  margin-right: 10px;
}
button {
  all: unset;
  margin-right: 5px;
}
</style>
