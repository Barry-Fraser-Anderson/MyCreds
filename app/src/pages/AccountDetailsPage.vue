<script>
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: 'accountDetailsPage',
  data() {
    if (this.$route.params.accountId == 0) {
      return { account: { id: 0 } };
    }

    return { account: null };
  },
  mounted() {
    if (this.$route.params.accountId == 0) return;
    fetch('http://localhost:3000/accounts/' + this.$route.params.accountId)
      .then(res => res.json())
      .then(data => (this.account = data))
      .catch(err => console.log(err.message));
  },
  methods: {
    upsertAccount() {
      let account = { ...this.account };

      let mth = 'PUT';
      let id = account.id;
      if (account.id == 0) {
        mth = 'POST';
        account.id = Date.now().toString;
        id = '';
      }

      fetch('http://localhost:3000/accounts/' + id, {
        method: mth,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(account),
      }).catch(err => console.log(err.message));

      this.$router.push('/accounts');
    },
  },
  components: {
    NotFoundPage,
  },
};
</script>

<template>
  <div v-if="account">
    <div class="page card">
      <div class="card-header bg-secondary bg-gradient ml-0 py-3">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="text-white py-2">
              {{ account.id == 0 ? 'ADD ACCOUNT' : 'EDIT ACCOUNT' }}
            </h2>
          </div>
        </div>
      </div>

      <div class="card-body">
        <form @submit.prevent="upsertAccount">
          <div class="row">
            <div class="col">
              <div class="form-floating mb-3 py-1">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="account.name"
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
                  id="url"
                  v-model="account.url"
                />
                <label for="url">URL</label>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-floating mb-3 py-1">
                <input
                  type="text"
                  class="form-control"
                  id="login"
                  v-model="account.login"
                  required
                />
                <label for="login">Login</label>
              </div>
            </div>

            <div class="col">
              <div class="form-floating mb-3 py-1">
                <input
                  type="text"
                  class="form-control"
                  id="password"
                  v-model="account.password"
                  required
                />
                <label for="password">Password</label>
              </div>
            </div>
          </div>

          <div class="form-floating mb-3 py-1 col-3">
            <input
              type="text"
              class="form-control"
              id="code"
              v-model="account.code"
            />
            <label for="code">Code</label>
          </div>

          <div class="form-floating mb-3 py-1">
            <textarea class="form-control" id="notes" v-model="account.notes" />
            <label for="notes">Notes</label>
          </div>

          <div class="btn-group">
            <button type="submit" class="btn btn-dark mx-2">OK</button>
            <router-link :to="'/accounts'">
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
