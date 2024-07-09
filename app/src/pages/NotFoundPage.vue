<script>
export default {
  name: 'NotfoundPage',
};
</script>

<template>
  <div class="card">
    <div class="card-header bg-danger bg-gradient ml-0 py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white py-2">PAGE NOT FOUND</h2>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-12 text-center">
          <router-link :to="'/accounts/'">
            <button type="button" class="btn btn-secondary mx-2">HOME</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
