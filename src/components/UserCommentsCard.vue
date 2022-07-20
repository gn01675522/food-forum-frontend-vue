<!-- 已完成 -->
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ commented.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a
        href="/restaurants/commented.id"
        v-for="comment in commented"
        :key="comment.id"
      >
        <img :src="comment.Restaurant.image" width="68" height="68" />
      </a>
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
      commented: [],
    };
  },
  methods: {
    getCommented() {
      this.commented = this.initial_profile.Comments;
    },
  },
  created() {
    this.getCommented();
  },
};
</script>
