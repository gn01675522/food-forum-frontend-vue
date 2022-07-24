<!-- 已完成 -->
<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="initial_profile.image | emptyImage"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ initial_profile.name }}</h5>
          <p class="card-text">{{ initial_profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ initial_profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ initial_profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ initial_profile.Followings.length }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ initial_profile.Followers.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <p></p>
          <template v-if="isAuthenticated">
            <router-link to="user/edit" class="btn btn-danger">
              Edit
            </router-link>
          </template>

          <template v-else class="button-area">
            <button
              v-if="isFollowed"
              @click.prevent.stop="removeFollowing(initial_profile.id)"
              type="submit"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.prevent.stop="addFollowing(initial_profile.id)"
              type="submit"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>

          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    initial_profile: {
      type: Object,
      required: true,
    },
    currentUserId: {
      type: Number,
      required: true,
    },
    initial_isFollowed: {
      type: Boolean,
      required: true,
    }
  },

  data() {
    return {
      isFollowed: this.initial_isFollowed,
    };
  },

  created() {
    this.authenticated();
  },

  methods: {
    async addFollowing(userId) {
      try {
        const { data } = await userAPI.addFollowing({ userId })
        console.log(data)
        this.isFollowed = true;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法加入追蹤，請稍後再試",
        });
      }
    },

    async removeFollowing(userId) {
      try {
        const { data } = await userAPI.deleteFollowing({ userId })
        console.log(data)
        this.isFollowed = false;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試",
        });
      }
      this.isFollowed = false;
    },

    authenticated() {
      if (this.currentUserId === this.initial_profile.id) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialIsFollowed (isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
};
</script>
