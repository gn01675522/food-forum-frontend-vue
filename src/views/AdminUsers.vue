<template>
  <div class="container py-5">
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="user.isAdmin && currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole(user.id, { isAdmin: user.isAdmin })
              "
            >
              set as user
            </button>

            <button
              v-else
              :disabled="user.id === currentUser.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole(user.id, { isAdmin: user.isAdmin })
              "
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.getAdminUsers();
        this.users = data.users;
        console.log("api-data", data);
        console.log("this-user", this.users[0].id);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者清單，請稍後再試",
        });
      }
    },
    async toggleUserRole(userId, { isAdmin }) {
      try {
        const { data } = await adminAPI.renewUserRole(userId, {
          isAdmin: String(!isAdmin),
        });
        console.log("data", data);
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新權限，請稍後再試",
        });
      }
      this.users.filter((user) => {
        if (user.id === userId) {
          return (user.isAdmin = !user.isAdmin);
        }
      });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
