<!-- 已完成 -->
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body" style="display: flex">
      <div v-for="following in followings" :key="following.id">
        <img :src="following.image" alt="" width="68" height="68" />
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
      followings: this.initial_profile.Followings,
    };
  },
};
</script>
