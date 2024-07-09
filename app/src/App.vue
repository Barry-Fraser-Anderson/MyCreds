<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
