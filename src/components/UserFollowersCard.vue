<!-- 已完成 -->
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <div v-for="follower in followers" :key="follower.id">
        <img :src="follower.image" alt="" width="68" height="68" />
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserFollowersCard",
  mixins: [emptyImageFilter],
  props: {
    initial_profile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      followers: this.initial_profile.Followers,
    };
  },
};
</script>
