<!-- 已完成 -->
<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ initial_comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <a
        href="/restaurants/commented.id"
        v-for="comment in initial_comments"
        :key="comment.id"
      >
        <img :src="comment.Restaurant.image | emptyImage" width="68" height="68" />
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
    initial_comments: {
      type: Array,
      required: true,
    },
  },
};
</script>
