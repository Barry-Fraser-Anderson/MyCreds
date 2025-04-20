<script>
import logo from '@/assets/logo.svg';

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
    };
  },
};
</script>

<template>
  <nav class="navbar">
    <router-link to="/accounts">
      <div>Accounts</div>
    </router-link>
    <router-link to="/categories">
      <div>Categories</div>
    </router-link>
  </nav>
</template>

<style scoped>
.logo {
  width: 60px;
  padding: 5px;
}
</style>
