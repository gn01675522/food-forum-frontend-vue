<!-- ./src/views/UsersTop.vue -->
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />

    <div class="row text-center">
      <!-- 美食達人資料區塊 -->
      <Tatsujin
        v-for="tatsujin in tatsujins"
        :key="tatsujin.id"
        :initial_tatsujins="tatsujin"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import Tatsujin from "./../components/Tatsujin";

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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
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
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    Tatsujin,
  },
  data() {
    return {
      tatsujins: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.tatsujins = users;
    },
  },
};
</script>
