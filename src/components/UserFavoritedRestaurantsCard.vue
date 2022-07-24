<!-- 已完成 -->
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favoritedRestaurants ? 1: 2 }}</strong> 收藏的餐廳
    </div>
    <div class="card-body" style="display: flex">
      <div v-for="favorite in favoritedRestaurants" :key="favorite.id">
        <img :src="favorite.image" alt="" width="68" height="68" />
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserFollowingsCard",
  mixins: [emptyImageFilter],
  props: {
    initial_profile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favoritedRestaurants: [],
    };
  },
  methods: {
    getFollowingsInfo() {
      this.favoritedRestaurants = this.initial_profile.FavoritedRestaurants;
    },
  },
  created() {
    this.getFollowingsInfo();
  },
};
</script>
