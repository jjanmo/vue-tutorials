<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" class="px-4">
      <b-navbar-nav>
        <router-link to="/" class="mx-2">
          <b-nav-text>Home</b-nav-text>
        </router-link>
        <router-link to="/about" class="mx-2">
          <b-nav-text>About</b-nav-text>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Header',
};
</script>
