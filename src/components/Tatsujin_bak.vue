<!-- 完成 -->
<template>
  <div class="col-3">
    <router-link to="/user">
      <img :src="tatsujin.image" width="140px" height="140px" />
    </router-link>
    <h2>{{ tatsujin.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ tatsujin.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="tatsujin.isFollowed"
        @click.stop.prevent="deleteFollowing"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.stop.prevent="addFollowing"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "tatsujin",
  mixins: [emptyImageFilter],
  props: {
    initial_tatsujins: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tatsujin: this.initial_tatsujins,
    };
  },
  methods: {
    addFollowing() {
      this.tatsujin = {
        ...this.tatsujin,
        isFollowed: true,
        FollowerCount: +1,
      };
    },
    deleteFollowing() {
      this.tatsujin = {
        ...this.tatsujin,
        isFollowed: false,
        FollowerCount: 0,
      };
    },
  },
};
</script>
