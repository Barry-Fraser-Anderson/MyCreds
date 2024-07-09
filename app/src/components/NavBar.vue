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
  <div class="nav-bar">
    <router-link to="/accounts">
      <div class="logo-wrap">
        <img class="logo" :src="logo" />
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  width: 80px;
}
</style>
