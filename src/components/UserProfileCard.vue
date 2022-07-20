<!-- 已完成 -->
<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p></p>
          <form action="/following/3" method="POST" style="display: contents">
            <button v-if="isAuthenticated" class="btn btn-danger">Edit</button>

            <div 
            v-else
            class="button-area">
              <button
                v-if="isFollowed"
                @click.prevent.stop="removeFollowing"
                type="submit"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.prevent.stop="addFollowing"
                type="submit"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </div>
          </form>

          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
  },
};

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    initial_profile: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      profile: this.initial_profile,
      currentUser: dummyUser.currentUser,
      isFollowed: false,
      isAuthenticated: false,
    };
  },

  created() {
    this.authenticated();
  },

  methods: {
    addFollowing() {
      this.isFollowed = true;
      this.isAuthenticated = true;
    },

    removeFollowing() {
      this.isFollowed = false;
    },

    authenticated() {
      if (this.currentUser.id === this.profile.id) {
        this.isAuthenticated = true;
        console.log(this.currentUser.id);
      } else {
        console.log(this.currentUser.id);
      }
    },
  },
};
</script>
