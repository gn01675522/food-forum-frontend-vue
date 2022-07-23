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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

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
    addFollowing( userId ) {

    },
    removeFollowing( userId ) {

    }
  },
};
</script>
