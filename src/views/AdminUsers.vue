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
              v-if="user.isAdmin && currentUser.profile.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>

            <button
              v-else
              :disabled="user.id === currentUser.profile.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
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

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$AmK/JTPO/Ufeoj3nCR/K4.D8xtWYBZyTOxjzpNohkcpdOi0QlKznS",
      isAdmin: true,
      image: null,
      createdAt: "2022-07-07T12:57:22.000Z",
      updatedAt: "2022-07-07T12:57:22.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$HFg9hVY8F07tw.WplbE14uVEoBIU4pSKry3tDk7yzLvmib/nY1oxq",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-07T12:57:22.000Z",
      updatedAt: "2022-07-07T12:57:22.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$prmhBEKhs8ilsCXnWTXnkOxIiHSReV9EUFDzQJuuF1KqKLOeMSF7a",
      isAdmin: false,
      image: null,
      createdAt: "2022-07-07T12:57:23.000Z",
      updatedAt: "2022-07-07T12:57:23.000Z",
    },
  ],
};

const dummyUser = {
  profile: {
    id: 3,
    name: "user2",
    email: "user2@example.com",
    password: "$2a$10$prmhBEKhs8ilsCXnWTXnkOxIiHSReV9EUFDzQJuuF1KqKLOeMSF7a",
    isAdmin: false,
    image: null,
    createdAt: "2022-07-07T12:57:23.000Z",
    updatedAt: "2022-07-07T12:57:23.000Z",
  },
};
// 暫時用的資料，正常情況來說要透過 api 去取得 user 資料

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {},
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = dummyUser;
    },
    toggleUserRole(userId) {
      this.users.filter((user) => {
        if (user.id === userId) {
          return (user.isAdmin = !user.isAdmin);
        }
      });
    },
  },
};
</script>
