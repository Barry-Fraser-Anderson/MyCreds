<script>
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'categoryDetailsPage',
  data() {
    if (this.$route.params.categoryId == 0) {
      return { category: { id: 0 } };
    }

    return { category: null };
  },
  mounted() {
    if (this.$route.params.categoryId == 0) return;
    fetch('http://localhost:3000/categories/' + this.$route.params.categoryId)
      .then(res => res.json())
      .then(data => (this.category = data))
      .catch(err => console.log(err.message));
  },
  methods: {
    upsertCategory() {
      let category = { ...this.category };

      let mth = 'PUT';
      let id = category.id;
      if (category.id == 0) {
        mth = 'POST';
        category.id = Date.now().toString;
        id = '';
      }

      fetch('http://localhost:3000/categories/' + id, {
        method: mth,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
      }).catch(err => console.log(err.message));

      this.$router.push('/categories');
    },
  },
  components: {
    NotFoundPage,
  },
};
</script>

<template>
  <div v-if="category">
    <div class="page card">
      <div class="card-header bg-secondary bg-gradient ml-0 py-3">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-white py-2">
              {{ category.id == 0 ? 'ADD CATEGORY' : 'EDIT CATEGORY' }}
            </h2>
          </div>
        </div>
      </div>

      <div class="card-body">
        <form @submit.prevent="upsertCategory">
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3 py-1">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="category.name"
                  required
                />
                <label for="name">Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating mb-3 py-1">
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="category.description"
                />
                <label for="description">Description</label>
              </div>
            </div>
          </div>

          <div class="btn-group">
            <button type="submit" class="btn btn-dark mx-2">OK</button>
            <router-link :to="'/categories'">
              <button type="button" class="btn btn-danger mx-2 text-end">
                CANCEL
              </button>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<style scoped></style>
