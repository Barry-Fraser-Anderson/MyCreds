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
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
.btn {
  border-radius: 0;
}

.page {
  background-color: azure;
}
</style>
