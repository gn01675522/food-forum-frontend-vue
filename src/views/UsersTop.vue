<!-- ./src/views/UsersTop.vue -->
<template>
  <div class="container py-5">
    <template>
      <div class="container py-5">
        <NavTabs />
        <h1 class="mt-5">美食達人</h1>
        <hr />
        <div class="row text-center">
          <div v-for="user in users" :key="user.id" class="col-3">
            <router-link :to="{ name: 'user', params: { id: user.id } }">
              <img
                :src="user.image | emptyImage"
                width="140px"
                height="140px"
              />
            </router-link>
            <h2>{{ user.name }}</h2>
            <span 
            class="badge badge-secondary"
              >追蹤人數：{{ user.FollowerCount }}</span
            >
            <p class="mt-3">
              <button
                v-if="user.isFollowed"
                @click.stop.prevent="deleteFollowing(user.id)"
                type="button"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="addFollowing(user.id)"
                type="button"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import NavTabs from "./../components/NavTabs";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const {data} = await usersAPI.getTopUsers();
        console.log(data)

        this.users = data.users;

      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });
        console.log("data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.FollowerCount + 1,
              isFollowed: true,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.FollowerCount - 1,
              isFollowed: false,
            };
          }
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>
