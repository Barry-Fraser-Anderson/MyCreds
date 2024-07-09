<script>
export default {
  name: 'accountsPage',
  data() {
    return {
      accounts: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/accounts');
      const res = await response.json();
      this.accounts = res.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.log(error.message);
    }
  },
  methods: {
    async deleteAccount(id) {
      try {
        await fetch('http://localhost:3000/accounts/' + id, {
          method: 'DELETE',
        });
        this.accounts = this.accounts.filter(a => a.id != id);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header bg-secondary bg-gradient ml-0 py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white py-2">ACCOUNT LIST</h2>
        </div>
      </div>
    </div>

    <div class="card-body p-4">
      <div class="row pb-3">
        <div class="text-end">
          <router-link :to="'/accounts/0'">
            <button class="btn btn-primary">
              <i class="bi bi-plus-circle"></i>ADD ACCOUNT
            </button>
          </router-link>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col" class="col-2">Name</th>
              <th scope="col" class="col-2">Login</th>
              <th scope="col" class="col-2">Password</th>
              <th scope="col" class="col-1">Code</th>
              <th scope="col" class="col-1"></th>
            </tr>
          </thead>

          <tbody>
            <tr scope="row" v-for="account in accounts" :key="account.id">
              <td>{{ account.name }}</td>
              <td>{{ account.login }}</td>
              <td>{{ account.password }}</td>
              <td>{{ account.code }}</td>
              <td>
                <div class="btn-group">
                  <router-link :to="'/accounts/' + account.id">
                    <button type="button" class="btn btn-secondary mx-2">
                      <i class="bi bi-pencil-square"></i>
                      EDIT
                    </button>
                  </router-link>
                  <button
                    type="button"
                    class="btn btn-danger mx-2"
                    @click="deleteAccount(account.id)"
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

<style scoped>
.btn {
  border-radius: 0;
}
</style>
