<template>
  <div v-if="user" class="user-container">
    <div>
      <span class="key">user:</span>
      <span class="value">{{ user.id }}</span>
    </div>
    <div>
      <span class="key">created:</span>
      <span class="value">{{ user.created }}</span>
    </div>
    <div>
      <span class="key">karma:</span>
      <span class="value">{{ user.karma }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User as IUser } from '@/interface/user';
import { getUser } from '@/api';

@Component
export default class User extends Vue {
  user: IUser | null = null;

  async mounted() {
    const name = this.$route.params.name;
    if (name) {
      const { data } = await getUser(name);
      this.user = data;
    }
  }
}
</script>

<style lang="scss" scoped>
.user-container {
  padding: 20px 40px;
  margin-top: 20px;
  font-size: 18px;
  background-color: white;

  > div + div {
    margin-top: 5px;
  }
  .key {
    display: inline-block;
    width: 100px;
  }
  .value {
    color: #828282;
  }
}
</style>
