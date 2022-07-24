<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="card mb-3">
        <!-- UserProfileCard， user 個人資料區 -->
        <UserProfileCard 
        :initial_profile="profile"
        :initial_isFollowed="isFollowed"
        :currentUserId="currentUser.id"
         />
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <!-- UserFollowingsCard，user 追蹤中資料區 -->
            <UserFollowingsCard :initial_followings="profile.Followings" />
          </div>
          <br />
          <!-- UserFollowersCard，user 的追隨者資料區 -->
          <UserFollowersCard :initial_followers="profile.Followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard，user 評論過的資料區 -->
          <UserCommentsCard :initial_comments="profile.Comments" />
          <br />
          <div class="card">
            <!-- UserFavoritedRestaurantsCard，user 收藏餐廳的資料區 -->
            <UserFavoritedRestaurantsCard :initial_profile="profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserProfileCard from "./../components/UserProfileCard";
import usersAPI from "./../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserProfileCard,
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        Comments: [],
        FavoritedRestaurants: [],
        Followers: [],
        Followings: [],
      },
      isFollowed: false,
    };
  },

  created() {
    const { id } = this.$route.params;
    this.fetchUserInfo(id);
  },

  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUserInfo(id);
    console.log(from);
    next();
  },

  methods: {
    async fetchUserInfo(userId) {
      try {
        const { data } = await usersAPI.get({ userId });
        console.log(data);
        const { profile, isFollowed } = data;
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;
        this.profile = {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        };
        this.isFollowed = isFollowed;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資訊，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
