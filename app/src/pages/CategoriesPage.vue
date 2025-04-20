<script>
export default {
  name: 'categoriesPage',
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/categories');
      const res = await response.json();
      this.categories = res.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.log(error.message);
    }
  },
  methods: {
    async deleteCategory(id) {
      try {
        await fetch('http://localhost:3000/categories/' + id, {
          method: 'DELETE',
        });
        this.categories = this.categories.filter(c => c.id != id);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<template>
  <div class="page card">
    <div class="card-header bg-secondary bg-gradient ml-0 py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white py-2">CATEGORY LIST</h2>
        </div>
      </div>
    </div>

    <div class="card-body p-4">
      <div class="row pb-3">
        <div class="text-end">
          <router-link :to="'/categories/0'">
            <button class="btn btn-primary">
              <i class="bi bi-plus-circle"></i>ADD CATEGORY
            </button>
          </router-link>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col" class="col-3">Name</th>
            </tr>
          </thead>

          <tbody>
            <tr scope="row" v-for="category in categories" :key="category.id">
              <td>{{ category.name }}</td>
              <td>{{ category.description }}</td>
              <td>
                <div class="btn-group">
                  <router-link :to="'/categories/' + category.id">
                    <button type="button" class="btn btn-secondary mx-2">
                      <i class="bi bi-pencil-square"></i>
                      EDIT
                    </button>
                  </router-link>
                  <button
                    type="button"
                    class="btn btn-danger mx-2"
                    @click="deleteCategory(category.id)"
                  >
                    <i class="bi bi-trash-fill"></i>
                    DELETE
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
