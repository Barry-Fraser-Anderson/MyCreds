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
      <div>
        <img class="logo" :src="logo" />
      </div>
    </router-link>
  </nav>
</template>

<style scoped>
.logo {
  width: 60px;
  padding: 5px;
}
</style>
